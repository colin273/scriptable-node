function getEnvironment() {
  // For now, assume the environment is always the app, since this module only runs in Node.JS. When this becomes an actual app, with widgets, support for other environment types can be added.
  return "app";
}

const environment = getEnvironment();

function getWidgetFamily() {
  if (environment == "widget") {
    // get widget family; for now, this block will never execute
  } else {
    return undefined;
  }
}

module.exports = {
  runsInApp: environment == "app",
  runsInActionExtension: environment == "extension",
  runsWithSiri: environment == "siri",
  runsInWidget: environment == "widget",
  runsInNotification: environment == "notification",
  runsFromHomeScreen: environment == "home",
  widgetFamily: getWidgetFamily()
}