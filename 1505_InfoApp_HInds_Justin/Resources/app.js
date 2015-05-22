Ti.UI.setBackgroundColor("#000");
// Screen width and height 
var pW = Ti.Platform.displayCaps.platformWidth;
var pH = Ti.Platform.displayCaps.platformHeight;
// Main and Nav window
var mainWin = Ti.UI.createWindow({
	backgroundColor:("#fff"),
	title: "Games",
	orientationModes: [Ti.UI.PORTRAIT,Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT]
});
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
	});
//File System
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"Images");
var imageFiles = imagesFolder.getDirectoryListing();
// Margins and Sizing
var margin = 16;
var trueCanvas = pW - (margin * 2);
var size = trueCanvas ;
// Scroll View
var border = Ti.UI.createView({
	backgroundColor:"8650d8",
	height:1,
	top:0  
});
var viewContainer = Ti.UI.createScrollView({
	top:0,
	width: pW,
	backgroundColor: "#c2c2c2",
	layout:"horizontal",
	contentWidth: pW,
	showVerticalScrollIndicator: true,
	height: pH - border.height - border.top
});
mainWin.add(viewContainer);

var loadFile = require("JSON");
navWin.open();
