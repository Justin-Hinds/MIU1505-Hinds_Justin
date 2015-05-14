//Question and Answer data
var aboutMe =[
{question:"What is your name?", answer:"Justin Hinds"},
{question:"What is your chat user name, including the host?", answer:"I don't have one.'"},
{question:"In which time zone do you reside?", answer: "PST, I am 3hrs away from seattle."},
{question:"Why are you in the Mobile Development Program?", answer:"I chose to study MMD because of my love of technology. I have been infatuated with phones ever since my Samsung Alias aka SCH-U740. I gravitate towards android because I'm more of a power user and like customizability but I respect both platforms. "},
{question: "How comfortable are you with Javascript?" ,answer:"I am fairly comfortable with javascript. Not as much as I would like to be. I don't have the time to dedicate to independent learning as I would like. I am eager to learn more about the web based coding so I can make myself more marketable before I finish my degree."},
{question:"How comfortable are you with Titanium?" ,answer:"Pretty comfortable, I have to look up some of the call outs since I don't have them committed to memory. I also do not currently know how ot export projects to devices or market places."},
{question:"What kind of work do you do?" ,answer:"I am currently a cook at Buffalo Wild Wings. I have cooked in many places from the fine dining to where I am now. I love food, I love cooking, and I love technology."},
{question:"What is your favorite movie?" ,answer:"Pulp Fiction. I love Tarentinos work, cannot wait for Hateful Eight."},
{question: "What is your favorite TV show?",answer:"My favorite TV show is hands down 'Archer' I love this cartoon. It is a spirtual successor to 'Sealab 2021' and 'Frisky Dingo' making call backs to those shows frequently. On the surface it is a crude, foul mouthed piece of satire full of tropes, but once you get beneath the surface you're left with... well still a crude, foul mouthed piece of satire full of tropes. But it is done very intelligently "},
{question: "What are your hobbies?",answer: " I used to work out but school has taken up that portion of the my time that I used to allocate for exercise; so I am working on adjusting my use of time to fit that back in. I play video games and cook mainly in my free time. "},
{question: "What is your favorite food?",answer:"I love food and choosing a single favorite is tough. Sushi is at the top of my list alongside curry."},
{question:"What is your favorite video game?" ,answer:"As of right now it is between Destiny and Mortal Kombat X."},
{question: "What is your favorite anime?", answer: "That would have to be Code Geass. It was just done so well in my opinion. The story telling, the pacing, the length all crafted masterfully. An honorable mention goes to Shura No Toki."}
];
//Loop for table view rows
for(var i = 0, j = aboutMe.length; i < j; i++){
	var row = Ti.UI.createTableViewRow({
		title: aboutMe[i].question,
		answer: aboutMe[i].answer,
		hasChild: true
	});
	if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false;
	row.hasDetail = true;
}
	questionSection.add(row);
	row.addEventListener("click", getAnswer);
}
