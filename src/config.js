function getEnvironment() {
}

let environment = getEnvironment()

function getWidgetFamily() {
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