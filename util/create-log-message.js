module.exports = function _scriptable_createLogMessage(obj) {
    if (typeof obj == "string") return obj;
    if (typeof obj == "object" && !(obj instanceof String)) return JSON.stringify(obj);
    return obj.toString();
};