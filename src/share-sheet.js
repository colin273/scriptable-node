"use strict";

exports.present = async function (activityItems) {
    // Present share sheet for activityItems
    console.log("Share sheet is not supported yet");
    console.log("Share sheet items:")
    console.log(activityItems)
    // Return an object with the completed items
    // For now, this will always be the result for when the share sheet is dismissed without performing any actions
    // Example of when an action (in this case "Copy") is selected on iOS:
    // { "activity_type": "com.apple.UIKit.activity.CopyToPasteboard", "completed": true }
    return {
        completed: false,
        activity_type: null
    };
};