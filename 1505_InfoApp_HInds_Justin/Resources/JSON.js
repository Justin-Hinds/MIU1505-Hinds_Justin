var info = [
{image:"Watch_Dogs.jpg" ,title: "Watch Dogs", publisher: "Ubisoft", release: "May 27, 2014", developer: "Ubisoft Montreal, Ubisoft Reflections, Ubisoft Romania, Ubisoft Quebec, Ubisoft Paris", platforms: "PS3, PS4, Xbox 360, Xbox One, Wii U, PC", 
review:"IGN – 8.4/10, Metacritic – 80/100, Gamespot – 8/10", rated: "Mature", description: " Watch Dogs is a near future action adventure game staring hacker Aiden Pierce. It follows his troubles after a job goes wrong and a member of his family is killed; Then years later his sister is kidnapped. He must use all of his skills to uncover the truth about what happened with that job to save his sister." },
{image: "Destiny.jpg", title: "Destiny", publisher: "Activision, Sony Computer Entertainment", release: "September 9, 2014", developer: "Bungie", platforms: "PS3, PS4, Xbox 360, Xbox One", review: "IGN – 7.8/10, Metacritic – 76/100, Gamespot – 6/10",
 rated: "teen", description: "Destiny is one of the most ambitious console games to date. It almost defies classification since it borrows elements from so many other genres. The closest classification is an FPS (First Person Shooter) MMORPG (Massively Multiplayer Online Roleplaying Game). It continues to evolve since it’s first release in September 2014." },
{image: "Mortal_Kombat_X.jpg", title: "Mortal Kombat X", publisher: "Warner Bros. Interactive Entertainment", release: "April 15, 2015", developer: "NetherRealm Studios, High Voltage Software", platforms: "PS3, PS4, Xbox 360, Xbox One, PC, iOS, Android",
review: ": IGN – 8.4/10, Metacrititc – 84/100, Gamespot -  8/10", rated: "Mature", description: "This is the 10th iteration of the classic brawler. Spanning decades always bringing something new to the table while maintaining its core roots NetherRealm Studios managed another well received fighting game; that’s more gruesome and gory than ever."},
{image: "Infamous_Second_Son.gif", title: "Infamous Second Son", publisher: "Sony Computer Entertainment", release: "March 21, 2014", developer: "Sucker Punch Productions", platforms: "PS4", review: ": IGN – 8.7/10, Metacritic – 80/100, Gamespot – 8/10",
 rated: "Teen", description: " Second Son is the third iteration in the Infamous series. It follows Delson Rowe coming to terms with his newly acquired powers and deciding what to do with them. It is an action adventure exclusive to the PS4."},
{image:"The_Last_of_Us.jpg", title: "The Last of Us", publisher: "Sony Computer Entertainment", release: " June 14, 2014", developer: "Naughty Dog", platforms: "PS3, PS4", 
review: ": IGN – 10/10, Gamespot – 9.6/10, Metacritic – 95/100", rated: "Mature", description: "The last of us is a gritty post apocalyptic action adventure Playstation exclusive based around Joel who whom has been tasked with escorting Ellie across the country. It is presented in an episodic manner based off of the seasons. It has excellent story telling, visuals, and score; It is generally regarded as a masterpiece."}
];
//scroll view loop
for(var i=0; i<info.length; i++){
	var view = Ti.UI.createView({
		top: border.top + border.height + margin,
		left: margin,
		height: 80,
		width: size,
		backgroundColor:"a2f",
		borderRadius: 15,
		borderWidth:2,
		borderColor: "#fff",
	});
	var viewTag = Ti.UI.createLabel({
		text: info[i].title,
		top: view.top + view.height,
		font: { fontSize: 14, fontFamily: "Futura-Medium"},
		textColor: "#fff"
	});
//Image View
	var imageHolder = Ti.UI.createImageView({
		image: "images/" + info[i].image,
		width: view.width,
		tag: info[i].title,
		left: 0,
		height: view.height * 2,
//References For Dot Notation
		title: info[i].title,
		desc: info[i].description,
		publisher: info[i].publisher,
		rated: info[i].rated,
		review: info[i].review,
		releaseDate: info[i].release,
		developer: info[i].developer,
		plat: info[i].platforms,
	});
	
	view.add(imageHolder);
	viewContainer.add(view);
	};
//Event Listener
	viewContainer.addEventListener("click", function(e){
	getDetail(e.source);
	if (e.source.title ===  null){
	navWin.openWindow(mainWin);
	console.log("ok");
}
});
// Info Functions
var getDetail =function(dataSource){ 
	//New window for info
if (dataSource !== viewContainer){
	photoView = Ti.UI.createWindow({
		backgroundColor: "c2c2c2",
		title: dataSource.title,
		orientationModes: [Ti.UI.PORTRAIT,Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT]
	});
	photo = Ti.UI.createImageView({
		image:  dataSource.image,
		top:0,
		height:180,
		right: 0,
		width:220,
		viewShadowColor: "373737",
		viewShadowRadius: 6,
		viewShadowOffset:(-5,-10)
	});
//Info View
var infoView = Ti.UI.createView({
		layout: "vertical",
		top: 0,
		width: pW
	});
// Labels for Info page
	var tag1 = Ti.UI.createLabel({
		text:"Release Date:",
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack", fontWeight:"bold"},
		left: 0,
		width: 180,
		top:4
	});
	var tagRel = Ti.UI.createLabel({
		text: dataSource.releaseDate,
		font: {fontSize: 16, fontStyle: "Optima-ExtraBlack"}, 
		height: Ti.UI.SIZE,
		width: pW - 10,
		left: 5
	});
	var tagDesc = Ti.UI.createLabel({
		text: dataSource.desc,
		top: 0,
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack"}, 
		height: Ti.UI.SIZE,
		width: pW - 10,
		left: 5
	});
	var tag2 = Ti.UI.createLabel({
		text:"Rated: ",
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack", fontWeight:"bold"},
		left: 5,
		width: 180
	});
	var tagRate = Ti.UI.createLabel({
		text: dataSource.rated,
		font: {fontSize:16, fontStyle: "Optima-ExtraBlack"}, 
		height: Ti.UI.SIZE,
		width: pW - 10,
		right: 5
	});
	var tag3 = Ti.UI.createLabel({
		text:"Publisher: ",
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack", fontWeight:"bold"},
		left: 5,
		width: 180,
		top:80
	});
	var tagPub = Ti.UI.createLabel({
		text: dataSource.publisher,
		font: {fontSize:16, fontStyle: "Optima-ExtraBlack"}, 
		height: Ti.UI.SIZE,
		width: pW - 10,
		left: 5
	});
	var tag4 = Ti.UI.createLabel({
		text:"Developer: ",
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack", fontWeight:"bold"},
		left:5,
		width: 180
	});
	var tagDev = Ti.UI.createLabel({
		text: dataSource.developer,
		font: {fontSize:16, fontStyle: "Optima-ExtraBlack"}, 
		height: Ti.UI.SIZE,
		width: pW - 10,
		left: 5
	});
	var tag5 = Ti.UI.createLabel({
		text:"Review: ",
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack", fontWeight:"bold"},
		left: 5,
		width: 180
	});
	var tagRev = Ti.UI.createLabel({
		text: dataSource.review,
		font: {fontSize:16, fontStyle: "Optima-ExtraBlack"}, 
		height: Ti.UI.SIZE,
		width: pW - 10,
		left: 5
	});
	var tag6 = Ti.UI.createLabel({
		text:"Platforms: ",
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack", fontWeight:"bold"},
		left: 5,
		width: 180
	});
	var tagPlat = Ti.UI.createLabel({
		text: dataSource.plat,
		font: {fontSize:16, fontStyle: "Optima-ExtraBlack"}, 
		height: Ti.UI.SIZE,
		width: pW - 10,
		left: 5
	});
	var tag7 = Ti.UI.createLabel({
		text:"Description: ",
		font: {fontSize:18, fontStyle: "Optima-ExtraBlack", fontWeight:"bold"},
		left: 5,
		width: 180,
		top: 10
	});
	infoView.add(tag1,tagRel, tag2, tagRate, tag3, tagPub, tag4, tagDev, tag5,tagRev, tag6, tagPlat,tag7, tagDesc);
	photoView.add(photo, infoView);
	navWin.openWindow(photoView);
	console.log(dataSource);

};
};

