const sax = require('sax');

class XMLParser {
    constructor(string) {
        Object.defineProperty(this, "_parser", {
            value: sax.parser(),
            writable: true
        });

        const stringType = typeof string;
        
        if (stringType != "string") {
            throw new Error(`Expected value of type string but got value of type ${stringType}.`)
        }

        this.string = string;

        Object.defineProperty(this, "didStartDocument", {
            writable: true
        })
    }

    get didEndDocument() {
        return this._parser.onend;
    }

    set didEndDocument(fn) {
        this._parser.onend = fn;
    }

    get didStartElement() {
        return this._parser.onopentag;
    }

    set didStartElement(fn) {
        this._parser.onopentag = fn;
    }

    get didEndElement() {
        return this._parser.onclosetag;
    }

    set didEndElement(fn) {
        this._parser.onclosetag = fn;
    }

    get foundCharacters() {
        return this._parser.ontext;
    }

    set foundCharacters(fn) {
        this._parser.ontext = fn;
    }

    get parseErrorOccurred() {
        return this._parser.onerror;
    }

    set parseErrorOccurred(fn) {
        this._parser.onerror = fn;
    }

    parse() {
        try {
            if (this.didStartDocument) {
                this.didStartDocument();
            }
    
            this._parser.write(this.string).close();

            return true;
        } catch {
            return false;
        }
        
    }
}

module.exports = XMLParser;