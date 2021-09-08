const { parser } = require("sax");
const scriptableTypeError = require("../util/type-error.js");

class XMLParser {
    #parser;

    constructor(string) {
        this.#parser = parser();
        const stringType = typeof string;
        if (stringType != "string") {
            throw scriptableTypeError("string", stringType)
        }
        this.string = string;
    }

    get didEndDocument() {
        return this.#parser.onend;
    }

    set didEndDocument(fn) {
        this.#parser.onend = fn;
    }

    get didStartElement() {
        return this.#parser.onopentag;
    }

    set didStartElement(fn) {
        this.#parser.onopentag = fn;
    }

    get didEndElement() {
        return this.#parser.onclosetag;
    }

    set didEndElement(fn) {
        this.#parser.onclosetag = fn;
    }

    get foundCharacters() {
        return this.#parser.ontext;
    }

    set foundCharacters(fn) {
        this.#parser.ontext = fn;
    }

    get parseErrorOccurred() {
        return this.#parser.onerror;
    }

    set parseErrorOccurred(fn) {
        this.#parser.onerror = fn;
    }

    parse() {
        try {
            this.#parser.write(this.string).close();
            if (this.didStartDocument) {
                this.didStartDocument();
            }
            return true;
        } catch {
            return false;
        }
    }
}

module.exports = XMLParser;