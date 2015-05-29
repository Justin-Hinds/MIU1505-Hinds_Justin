var finishers = [
{title:  "Mileena", fat1: "Face Feast (Close) - Down, Back, Down, Back, X", fat2: "Tasty Treat (Close) - Forward, Back, Forward, Back, Triangle",
 brute1: "High Roller: *Successfully land five Ball Rolls (Back, Down, Circle) during the match. *Finish off your opponent with a Ball Roll (Back, Down, Circle) or the second hit of Flip 'n' Roll (Back, Down, Circle + R2) while holding Down.", 
 brute2: "Tele-Splat: *Finish off your opponent with either Tele-Kick (Down, Down, X) or Tele-Drop (Down, Down, X + R2) while holding Up.", 
 brute3: "Impaler (Piercing variation): *Finish off your opponent with the Sadistic Ways combo (Back, Triangle, Square, Triangle + Circle) and keep pressing Square or Triangle at least five times."},
{title: "Kitana", fat1: "DarkFan-tasy (Mid) - Down, Forward, Back, Forward, Triangle", fat2:"Splitting Hairs (Mid) - Back, Forward, Down, Down",
 brute1: "Off The Top: *Finish off your opponent with either Throat Slice (Back, Forward, X) or Throat Slash (Back, Forward, X + R2) while holding Forward ", 
 brute2: "Biggest Fan: *You have to connect with three Rising Fans (Down, Back, Triangle) during the match *Finish off your opponent with Rising Blades (Down, Back, Triangle + R2)", 
 brute3: "Back That Up (Royal Storm variation): *Reflect at least one move with Bounce Back (Down, Back, Circle) during the match *Finish off your opponent with an Air Square Boost (Down, Back, X) or Air Square Wave (Down, Back, X + R2) in mid-air"},
{title: "Kenshi", fat1: "Tele-Copter (Far) - Back, Forwad, Back, Back", fat2: "My Puppet (Far) - Forward, Down, Back, Up",
 brute1: "Used Up:  *Must win first round with a throw attack.*Final hit must be from Throw attack.", 
 brute2: "Brutal Kick: *Must go 5 seconds without taking hits in final round. *Final hit must be from Concentration Kombo(Triangle, Triangle, Circle).",
 brute3: "Leg Up (Balanced variation): *Must get First Hit. *Final hit must be from Tele-Flurry(Back, Forward, X)"},
{title: "Jason", fat1: "Kill For Mother(Mid) - Down, Forward, Down, Forward, Triangle" , fat2: "Seeping Bag Killer(Mid) - Down, Back, Forward Circle + R2", 
 brute1: "Blunt Trauma: *Must win the first round. *The final hit must come from (Back, Forward, X + R2)", 
 brute2: "Go To Hell: *Jason must walk a few steps before connecting with the final hit. *The final hit must come from The Horror(L2 + R2)", 
 brute3: "Blood Bath (Slasher Variation): *Final hit must come form Bloodlust(Down, Fowrard, Square + R2) while holding Up."},
{title: "Ermac", fat1: "Head Out (Mid) - Forward, Down, Down, Up", fat2: "Inner Workings (Mid) - Down, Up, Back, Square",
 brute1: "Nether Force: *Successfully land ten special attacks during the match *Finish your opponent using Air Force Port (Down, Back, Circle + R2)", 
 brute2: "We Win: *Perform a five hit combo that ends with Force Lift (Down, Back, Square) *Final hit must come from Force Life (Down, Back, Square)", 
 brute3: "Gluttony (Mystic variation): *Have at least 40% health remaining * Kill your opponent with Tele-Hold (Down, Back, Square + R2)"},
{title: "Erron Black", fat1: "Sandstorm (Mid) - Down, Back, Forward, Down, Square", fat2: "Six-Shooter (Far) - Back, Forward, Back, Forward, Triangle",
 brute1: "Tunnel Vision: *Kill your opponent using a standard throw (R2 or Square + X) while holding Forward during the throw animation", 
 brute2: "Serenity: *Press Square and Triangle at least 15 times during the final hit *Finish off the opponent with Sand Trap (Down, Back, Forward, Triangle) or Quick Sand (Down, Back, Forward, Triangle + R2)", 
 brute3: "Quick Draw (Gunslinger variation): *Perform 10 back dashes during the match *While using the Stand Off stance (Down, Back, Square) finish off your opponent with Spin Shot (Circle) in close range"},
{title: " D'Vorah", fat1:"Bug Me (Mid) - Back, Forward, Back, X" , fat2:"Heart Broken (Close) - Forward, Back, Forward, Triangle",
 brute1: "Migraine: *Have at least 50% of your health left *Kill your opponent with Ovipositor Charge (Down, Back, Circle), holding Forward while the move is triggered",
 brute2: "Fly Swatter: Kill the opponent with a four-hit combo that ends with Backward AirThrow (Down + Throw, Back) *The final hit must come from the Backward Air Throw *It must be performed while in the air.", 
 brute3: "Incubate (Brood Mother variation): *Land three Krawler attacks (Down, Forward, X) *Final hit must with any Throw (Square + X"},
{title: "Raiden", fat1: "Bug Eyes (Close) - Forward, Back, Forward, Square", fat2: "Conducting Rod (Far) - Down, Forward, Back, Forward, Circle",
 brute1: "Super Shocker: *Finish off your opponent with Electrocute (Down, Forward, Triangle) while hitting the Triangle button at least three times",
 brute2: "Dark Force: Finish off your opponent with Power Discharge (Back, Square, Square, Square + X) and then press Forward, Back, Forward", 
 brute3:"Overload (Thunder God variation): *Perform a combo that does 30% damage or more damage to your opponent. *The finishing blow must be the Lightning Strike combo (Back, Square, Square, Triangle, Triangle)"},
{title: "Jax", fat1: "T-Wrecks (Close) - Forward, Back, Down, Triangle", fat2: "Jack the Ribber (Close) - Down, Back, Forward, Forward",
 brute1: "Sledge Hammer: *Finish off your opponent with Downward Dash Punch (Back, Forward,Triangle + Down) or a Downward Dash Fist (Back, Forward, Triangle + R2 +Down) while the opponent is crouching", 
 brute2: "Gotcha Down: Kill your opponent with Gotcha Grab (Down, Back, Square) while holding Forward", 
 brute3: "Rocket Roll (Heavy Weapons Variation): Land the finishing blow with L.A.W. Blast (Down, Back, Triangle + R2 +Up) while your opponent in the air"},
{title: "Reptile", fat1: "Bad Breath (Far) - Down, Forward, Down, Forward, Circle", fat2: "Acid Bath (Close) - Down, Down, Back, Forward, Square",
 brute1: "Acid Wash: *Finish your opponent with a combo for at least 30% damage ending with Acid Spit (Down, Forward, Square)", 
 brute2: "Heart Attack: *Land five successful Tongue Slaps (Back, Square) during the match. *Finish off your opponent with a Tongue Slap", 
 brute3: "Puke (Deceptive variation):Perform three Acid Puddles (Down, Forward, Square + R2) during the match. *Finish your opponent with a Slithering Slam combo (Forward, Triangle, Square + X) or Swamp Slam Kombo (Forward, Triangle, Square, Square + X)"},
{title: "Sub-Zero", fat1: "Chest Kold (Close) - Back, Forward, Down, Back, Circle", fat2: "Bed of Ice (Close) - Down, Back, Down, Forward, Circle",
 brute1: "Snow Ball: *There must be 40 or more seconds left in the round. *The opponent must be frozen *Kill the opponent with Ice Blast (Down, Forward, Triangle + R2) from a long range.", 
 brute2: "Frozen Dinner: *Your opponent must be frozen. *Finish off your opponent with Rising Fist (Down, Triangle) or Upward Sword (Down, Triangle)", 
 brute3: "Pick Your Brain (Cryomancer variation): Finish off your opponent with a six-hit combo that ends with Cold-Blooded (Forward, Circle, Triangle, Square + X)"},
{title: "Scorpion", fat1: "Stop Ahead (Mid) - Down, Back, Forward, Triangle", fat2: "Who's Next? (Mid) - Down, Back, Forward, Up",
 brute1: "Get Over Here: *You must have 50% or more health left. *Finish off your opponent with Enhanced Double Spear (Back, Forward, Square + R2, R2).", 
 brute2: "Shirai Ryu Fire: *Kill your opponent with an Air Flameport (Down, Back, X + R2", 
 brute3: "Just a Scratch (Ninjutsu variation): Successfully land three Downfalls (Back, Circle) during the match. *Finish off your opponent with Doom Blade (Forward + Triangle)."}
];
// login input fields
var user = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
	  	top: 30, 
	  	left: 10,
	  	width: 200,
	  	height: 30,
	  	hintText: "username",
	  	clearOnEdit: "true"
});
var pass = Ti.UI.createTextField({
		top: user.top + user.height + 10,
		left: 10,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  	color: '#336699',
	  	width: 200,
	  	passwordMask: "true",
	  	height: 30,
	  	hintText: "Password",
	  	clearOnEdit: "true"
});
//button for login
var login = Ti.UI.createView({
		height: 40,
		width: 80,
		backgroundColor: "#000",
		top: pass.top + pass.height + 60
});
var loginLabel = Ti.UI.createLabel({
		text: "Login",
		color: "#fff",
		font: {fontFamily:"menlo-bold", fontSize: 14}
});
// window for character list
var finWin = Ti.UI.createWindow({
	backgroundColor: "white"
});
//event listener for login button
login.addEventListener("click", function(e){
	if(user.value == "justin" && pass.value == "hinds"){
		var dialog = Ti.UI.createAlertDialog({
			message:"Are you sure you want to login?",
			buttonNames: ["Yes","No"],
			title:"Login",
			ok: 0
		});
		dialog.show();
	dialog.addEventListener("click",function(e){
		if (e.index === e.source.ok){		
			navWin.openWindow(finWin);
			
		}
});
	}else{
		alert("Invalid Username or Password");
	}
});
// scroll view
var finView = Ti.UI.createScrollView({
	top: 40,
	layout:"vertical",
	showVerticalScrollIndicator: "true",
});
finView.addEventListener("click", function(e){
	getFinish(e.source);
});
//loop for scroll view of character names
for(var i=0; i<finishers.length; i++){
	var view = Ti.UI.createView({
		top: 10,
		left: 10,
		height: 80,
		width: "90%",
		backgroundColor:"a2f",
		borderRadius: 15,
		borderWidth:2,
		borderColor: "#fff",
		fat1: finishers[i].fat1,
		fat2: finishers[i].fat2,
		brute1: finishers[i].brute1,
		brute2: finishers[i].brute2,
		brute3: finishers[i].brute3,
	});
	var charName = Ti.UI.createLabel({
		text: finishers[i].title
	});
	view.add(charName);
	finView.add(view);
};
var getFinish = function(dataSource){
	if (dataSource !== finView){
		// window for finishers and fatality timer
		var finishHim = Ti.UI.createWindow({
			title: dataSource.title,
			orientationModes: [Ti.UI.PORTRAIT,Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT]
		});
		// view for move list
		var moves = Ti.UI.createView({
			layout:"vertical",
			backgroundColor: "white"
		});
		var fatality1 = Ti.UI.createLabel({
			text: dataSource.fat1,
			font:{fontFamily:"Superclarendon-Regular ", fontSize: 14},
			top: 10,
			width:"90%"
		});
		var fatality2= Ti.UI.createLabel({
			text: dataSource.fat2,
			font:{fontFamily:"Superclarendon-Regular ", fontSize: 14},
			top: 10,
			width:"90%"
		});
		var brutality1= Ti.UI.createLabel({
			text: dataSource.brute1,
			font:{fontFamily:"Superclarendon-Regular ", fontSize: 14},
			top: 10,
			width:"90%"
		});
		var brutality2= Ti.UI.createLabel({
			text: dataSource.brute2,
			font:{fontFamily:"Superclarendon-Regular ", fontSize: 14},
			top: 10,
			width:"90%"
		});
		var brutality3= Ti.UI.createLabel({
			text: dataSource.brute3,
			font:{fontFamily:"Superclarendon-Regular ", fontSize: 14},
			top: 10,
			width:"90%"
		});
		//timer function
		var countDown =  function( m , s, fn_tick, fn_end  ) {
		return {
			total_sec:m*60+s,
			timer:this.timer,
			set: function(m,s) {
				this.total_sec = parseInt(m)*60+parseInt(s);
				this.time = {m:0,s:8};
				return this;
			},
			start: function() {
				var self = this;
				this.timer = setInterval( function() {
					if (self.total_sec) {
						self.total_sec--;
						self.time = { m : parseInt(self.total_sec/60), s: (self.total_sec%60) };
						fn_tick();
					}
					else {
						self.stop();
						fn_end();
					}
					}, 1000 );
				return this;
			},
			stop: function() {
				clearInterval(this.timer);
				this.time = {m:0,s:0};
				this.total_sec = 0;
				return this;
			}
		};
	};
var startBtn = Ti.UI.createView({
	height: 20,
	width:40,
	top: 0,
	backgroundColor: "green"
});
var resetBtn = Ti.UI.createView({
	height: 20,
	width:40,
	top: 0,
	backgroundColor: "red"
});
var displayLabel = Ti.UI.createLabel({
	text: ""
});
var myTimer = new countDown( 0,8,
		function() {
			display_lbl.text = my_timer.time.m+" : "+my_timer.time.s;
		},
		function() {
		
		}
	);
resetBtn.addEventListener('click',function(){
	my_timer.set(0,8);
});
 
startBtn.addEventListener('click',function(){
	my_timer.start();
});
moves.add(displayLabel, startBtn, resetBtn);
		
		moves.add(fatality1, fatality2, brutality1, brutality2, brutality3);
		finishHim.add(moves);
		navWin.openWindow(finishHim);
	};
};

//search bar view and text field
var search = Ti.UI.createView({
	top: 0, 
	height: 40,
	viewShadowColor: "373737",
	viewShadowRadius: 6,
	viewShadowOffset:(-5,-10),
	backgroundColor: "white"
});
var searchText = Ti.UI.createSearchBar({
	height: 30,
	hintText: "Search",
	clearOnEdit: "true"
});
searchText.addEventListener("return", function(e){
	for(var i = 0; i < finishers.length; i++){
		if(searchText.value.toLowerCase() == finishers[i].title.toLowerCase()){
			getFinish(finishers[i]);
			console.log(finishers[i]);
		}
		
	}
});
search.add(searchText);
finWin.add(finView, search);
login.add(loginLabel);
mainWin.add(login, user, pass);
