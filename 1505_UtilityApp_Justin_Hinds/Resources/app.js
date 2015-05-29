Ti.UI.setBackgroundColor("#000");

var mainWin = Ti.UI.createWindow({
	backgroundColor: "e7f5fd",
});
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
	orientationModes: [Ti.UI.PORTRAIT,Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT]
});

navWin.open();
var loadFile = require("JSON");
