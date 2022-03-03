module.exports = {
  present: async (item, fullscreen) => {

    /*
      Notes:
      1. The `fullscreen` parameter has no effect in scriptable-node.
      2. Only strings are currently supported for Quick Look.
           If a string is a file path, the associated file will be previewed.
           Otherwise, a preview of the string will be shown.
      3. Quick Look is only supported on macOS for the moment.
           On all other platforms, a "not supported" message is logged to the console.
    */

    if (process.platform == "darwin") {
      if (typeof item == "string") {
        await require('child_process').execFile("qlmanage", ["-p", item]);
      } else {
        console.log("scriptable-node does not currently support Quick Look for this type.");
      }
    } else {
      console.log(`Quick Look is not supported on the platform '${process.platform}'.`);
    }
  }
}