Titanium.UI.setBackgroundColor('#000');
// Main and navigation windows
var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Questions About Me"
});
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
	title: "Questions About Me"
});
// Window layout
var titleView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 80,
	top: 0
});
var border = Ti.UI.createView({
	backgroundColor:"#000",
	height: 1,
	top:0
});
var title =Ti.UI.createLabel({
	text:"Questions About Me",
	font: {foneSize: 40, fontStyle:"DamascusBold", fontWeight: "bold" },
	top: 0,
	width: "100%",
	textAlign: "center"
});
// Table View
var table = Ti.UI.createTableView({
	top: border.top + border.height
});
var questionSection = Ti.UI.createTableViewSection({
	
});
 

// Answer Window & Function
var getAnswer = function (){
	answerWindow = Ti.UI.createWindow({
	backgroundColor:"#2064df"
	});
	
var answerTitleView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 80,
	top:0
});
var answerBorder = Ti.UI.createView({
	backgroundColor:"#000",
	height: 1,
	top: answerTitleView.top + answerTitleView.height
});
var answerTitle =Ti.UI.createLabel({
	text:this.title,
	font: {foneSize: 40, fontStyle:"DamascusBold", fontWeight: "bold" },
	top: 35,
	width: "100%",
	textAlign: "center"
});
var answerLabel = Ti.UI.createLabel({
	text: this.answer,
	font: {foneSize: 16, fontStyle:"Baskerville-SemiBold "},
	top: 0,
	left :10,
	right: 10
});
var answerView = Ti.UI.createView({
	height: Ti.UI.SIZE,
	backgroundColor: "fff",
	top: answerBorder.top + answerBorder.height + 5,
	borderRadius: 12
});
answerView.add(answerLabel);
answerTitleView.add(answerTitle);
answerWindow.add(answerTitleView, border, answerTitle, answerView);
navWin.openWindow(answerWindow);
};
 table.setBackgroundColor("#f0f2f4");
var loadFile = require("JSON");
titleView.add(title);
table.setData([questionSection]);
mainWin.add(titleView,border, table);
navWin.open();