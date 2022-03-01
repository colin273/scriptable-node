/*

To do:

- constructor
- cacheDirectory
- documentsDirectory
- libraryDirectory
- allTags
- addTag
- removeTag
- readExtendedAttribute
- writeExtendedAttribute
- removeExtendedAttribute
- allExtendedAttributes
- getUTI (possibly use the uti module on npm for this?)
- bookmarkedPath
- bookmarkExists
- downloadFileFromiCloud
- isFileStoredIniCloud
- isFileDownloaded
- allFileBookmarks

*/

const Data = require("./data.js");
const fs = require("fs");
const Image = require("./image.js");
const os = require("os");
const path = require("path");
const dataKey = Symbol.for("data");

// Yes, yes, I know, don't use JSON as a database
const BOOKMARKS_PATH = "../config/file-bookmarks.json";

class FileManager {
    #type;

    constructor(type) {
        this.#type = type;
        if (type == 'iCloud') {
            // Choose the iCloud directories, if available
        } else {
            // Choose the home directory
        }
    }

    read(filePath) {
        return Data.fromFile(filePath);
    }

    readString(filePath) {
        return fs.readFileSync(filePath, { encoding: "utf-8" });
    }

    readImage(filePath) {
        return Image.fromFile(filePath);
    }

    write(filePath, content) {
        fs.writeFileSync(filePath, content[dataKey]);
    }

    writeString(filePath, content) {
        fs.writeFileSync(filePath, content);
    }

    writeImage(filePath, image) {
        fs.writeFileSync(filePath, image[dataKey]);
    }

    remove(filePath) {
        fs.unlinkSync(filePath);
    }

    move(sourceFilePath, destinationFilePath) {
        fs.rename(sourceFilePath, destinationFilePath);
    }

    copy(sourceFilePath, destinationFilePath) {
        fs.copyFileSync(sourceFilePath, destinationFilePath, fs.constants.COPYFILE_EXCL);
    }

    fileExists(filePath) {
        return fs.existsSync(filePath);
    }

    isDirectory(path) {
        return (fs.existsSync(path) && fs.lstatSync(path).isDirectory());
    }

    createDirectory(path, intermediateDirectories) {
        fs.mkdirSync(path, { recursive: intermediateDirectories });
    }

    temporaryDirectory() {
        if (this.#type == 'iCloud') {
            throw new Error('Temporary directory cannot be accessed in iCloud. Use a local FileManager instead.');
        } else {
            return os.tmpdir();
        }
    }

    cacheDirectory() {
        if (this.#type == 'iCloud') {
            throw new Error('Cache directory cannot be accessed in iCloud. Use a local FileManager instead.');
        } else {
            // What is the cache directory?
        }
    }

    documentsDirectory() {
    }

    libraryDirectory() {
    }

    joinPath(lhsPath, rhsPath) {
        return path.join(lhsPath, rhsPath);
    }

    allTags(filePath) {
    }

    addTag(filePath, tag) {
    }

    removeTag(filePath, tag) {
    }

    readExtendedAttribute(filePath, name) {
    }

    writeExtendedAttribute(filePath, value, name) {
    }

    removeExtendedAttribute(filePath, name) {
    }

    allExtendedAttributes(filePath) {
    }

    getUTI(filePath) {
        // file-uti is for macOS only
        if (process.platform === "darwin") {
            return require("file-uti").sync(filePath);
        }

        // For other platforms
    }

    listContents(directoryPath) {
        return fs.readdirSync(directoryPath);
    }

    fileName(filePath, includeFileExtension) {
        if (includeFileExtension) {
            return path.basename(filePath, path.extname(filePath));
        } else {
            return path.basename(filePath);
        }
    }

    fileExtension(filePath) {
        return path.extname(filePath);
    }

    bookmarkedPath(name) {
        try {
            return this.allFileBookmarks().find(b => b.name === name)._path;
        } catch {
            throw new Error(`No bookmark named "${name}" found.`);
        }
    }

    bookmarkExists(name) {
        return Boolean(this.allFileBookmarks().find(b => b.name === name));
    }

    async downloadFileFromiCloud(filePath) {
    }

    isFileStoredIniCloud(filePath) {
    }

    isFileDownloaded(filePath) {
    }

    creationDate(filePath) {
        return fs.statSync(filePath).birthtime;
    }

    modificationDate(filePath) {
        return fs.statSync(filePath).mtime;
    }

    fileSize(filePath) {
        return fs.statSync(filePath).size / 1000;
    }

    allFileBookmarks() {
        try {
            return JSON.parse(fs.readFileSync(BOOKMARKS_PATH, { encoding: "utf-8" }));
        } catch {
            return {};
        }
    }
}

module.exports = {
    local: function() {
        return new FileManager('local');
    },

    iCloud: function() {
        return new FileManager('iCloud');
    }
}