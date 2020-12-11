class FileManager {
  constructor(type) {
    if (type == "iCloud") {
      // Choose the iCloud directories, if available
    } else {
      // Choose the home directory
    }
  }

  read(filePath) {
  }

  readString(filePath) {
  }

  readImage(filePath) {
  }

  write(filePath, content) {
  }

  writeString(filePath, content) {
  }

  writeImage(filePath, image) {
  }

  remove(filePath) {
  }

  move(sourceFilePath, destinationFilePath) {
  }

  copy(sourceFilePath, destinationFilePath) {
  }

  fileExists(filePath) {
  }

  isDirectory(path) {
  }

  createDirectory(path, intermediateDirectories) {
  }

  temporaryDirectory() {
  }

  cacheDirectory() {
  }

  documentsDirectory() {
  }

  libraryDirectory() {
  }

  joinPath(lhsPath, rhsPath) {
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
  }

  listContents(directoryPath) {
  }

  fileName(filePath, includeFileExtension) {
  }

  fileExtension(filePath) {
  }

  bookmarkedPath(name) {
  }

  bookmarkExists(name) {
  }

  async downloadFileFromiCloud(filePath) {
  }

  isFileStoredIniCloud(filePath) {
  }

  isFileDownloaded(filePath) {
  }

  creationDate(filePath) {
  }

  modificationDate(filePath) {
  }

  fileSize(filePath) {
  }

  allFileBookmarks() {
  }
}

module.exports = {
  local: function() {
    return new FileManager("local");
  },

  iCloud: function() {
    return new FileManager("iCloud");
  }
}