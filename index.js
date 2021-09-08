"use strict";

// As APIs are completed, they will be uncommented.

exports.Alert = require("./src/alert.js");

// Undocumented App class, available in Scriptable
exports.App = require("./src/app.js");

//exports.Calendar = require("./src/calendar.js");

//exports.CalendarEvent = require("./src/calendar-event.js");

exports.CallbackURL = require("./src/callback-url.js");

exports.Color = require("./src/color.js");

//exports.Contact = require("./src/contact.js");

//exports.ContactsContainer = require("./src/contacts-container.js");

//exports.ContactsGroup = require("./src/contacts-group.js");

exports.Data = require("./src/data.js");

exports.DateFormatter = require("./src/date-formatter.js");

exports.DatePicker = require("./src/date-picker.js");

exports.Device = require("./src/device.js");

//exports.Dictation = require("./src/dictation.js");

exports.DocumentPicker = require("./src/document-picker.js");

exports.DrawContext = require("./src/draw-context.js");

exports.FileManager = require("./src/file-manager.js");

exports.Font = require("./src/font.js");

exports.Image = require("./src/image.js");

exports.importModule = require("./src/import-module.js");

exports.Keychain = require("./src/keychain.js");

exports.LinearGradient = require("./src/linear-gradient.js");

exports.ListWidget = require("./src/list-widget.js");

exports.Location = require("./src/location.js");

exports.Mail = require("./src/mail.js");

exports.Message = require("./src/message.js");

exports.Notification = require("./src/notification.js");

exports.Pasteboard = require("./src/pasteboard.js");

exports.Path = require("./src/path.js");

exports.Photos = require("./src/photos.js");

exports.Point = require("./src/point.js");

exports.QuickLook = require("./src/quick-look.js");

exports.Rect = require("./src/rect.js");

exports.RecurrenceRule = require("./src/recurrence-rule.js");

exports.RelativeDateTimeFormatter = require("./src/relative-date-time-formatter.js");

//exports.Reminder = require("./src/reminder.js");

exports.Request = require("./src/request.js");

exports.Safari = require("./src/safari.js");

exports.Script = require("./src/script.js");

exports.SFSymbol = require("./src/sf-symbol.js");

exports.ShareSheet = require("./src/share-sheet.js");

exports.Size = require("./src/size.js");

exports.Speech = require("./src/speech.js");

exports.TextField = require("./src/text-field.js");

exports.Timer = require("./src/timer.js");

exports.UITable = require("./src/ui-table.js");

exports.UITableCell = require("./src/ui-table-cell.js");

exports.UITableRow = require("./src/ui-table-row.js");

exports.URLScheme = require("./src/url-scheme.js");

exports.UUID = require("./src/uuid.js");

exports.WebView = require("./src/web-view.js");

exports.XMLParser = require("./src/xml-parser.js");

/*
Global functions for the console

_scriptable_log, _scriptable_logError, and _scriptable_logWarning
are the undocumented internal functions used in the real Scriptable app
that actually log things to the console.
*/
exports.log = exports._scriptable_log = console.log;
exports.logError = exports._scriptable_logError = console.error;
exports.logWarning = exports._scriptable_logWarning = console.warn;

// Create and log deprecation messages
exports._scriptable_deprecation = function (itemName, version, message) {
    console.warn(`${itemName} was deprecated in version ${version}. ${message}`);
};

// Convert everything to a string, like Scriptable does for its console
// This differs slightly from Scriptable's implmentation, since it actually stringifies
// null and String objects rather than simply returning them.
exports._scriptable_createLogMessage = require("./util/create-log-message.js");