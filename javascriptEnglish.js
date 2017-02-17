function switchWindow(window) { //funktion som byter screen till den man stoppar in
	if(window == "first") {
		$(".firstScreen").css("display", '');
		$(".secondScreen").css("display", 'none');
	} else if (window == "second") {
		$(".firstScreen").css("display", 'none');
		$(".secondScreen").css("display", 'flex');
	}
}
$(".startknapp").on("click", function() { //när man klickar på spelaknappen
	switchWindow("second");
})

var statement = [ //en array med alla uttryck
	"sports where you throw something",
	"titles of children's books",
	"diseases",
	"Countries in the northern hemisphere",
	"names of so-called women's magazines",
	"names of amusement parks",
	"brands of TVs",
	"negative things with the US",
	"types of candy",
	"things that are dangerous to inhale",
	"cities starting with P",
	"famous couples",
	"team sports with a ball",
	"Countries that start with S",
	"TV profiles",
	"Frozen desserts",
	"Electronics stores",
	"Board Games",
	"Popular vacation spots",
	"Popular websites",
	"Martial arts,",
	"Birds",
	"Things that belong in a school bag",
	"Holiday islands",
	"Drinks you buy at a liquor store",
	"Newspapers",
	"State of minds",
	"radio programs",
	"Words that rhyme on stone",
	"Famous tennis players",
	"Things that are sold in bags",
	"Brands",
	"Dances",
	"Italian cities",
	"Professions",
	"Things you can eat at IKEA",
	"football players",
	"Words that rhyme on red",
	"Computer stuff",
	"Things that make men angry",
	"Body parts of a horse,",
	"Things you can not buy for money",
	"Pastry creams",
	"Things you can do with a knife",
	"Marmalade flavors",
	"Movie titles",
	"Dangerous places",
	"Song titles",
	"Dishes you can order the china resturant",
]

var usedStatements = []; //använda statementsindexes
var lastStatement;
function newStatement() { //spottar ut ett random statement som inte har användts förr
	function newStatementIndex() {
		var index = Math.floor(Math.random()*statement.length);
		return index;
	}
	var statementIndex = newStatementIndex();
	for(var i = 0; i < usedStatements.length; i++) { //loopar genom använda uttryck
		if(usedStatements[i] == statementIndex || lastStatement == statementIndex) { //kollar om det nya är samma som ett använt eller samma som innan reseten
			i = -1;
			if (usedStatements.length == statement.length) {
				usedStatements = [];
			}
			statementIndex = newStatementIndex();
		}
	}
	usedStatements.push(statementIndex);
	lastStatement = statementIndex;
	var newStatement = statement[statementIndex];
	$(".middle > p").fadeTo(200, 0, function() {
		$(".middle > p").text(newStatement); //printar ut det nya uttrycket
	});
	$(".middle > p").fadeTo(200, 1);
}

newStatement();

var timer;
var time = 7;
var timerRunning = false;

function startTimer() {
	timerRunning = true;
	timer = setInterval(function(){ myTimer() }, 1000);
}
function myTimer() {
	time -= 1;
	$(".timer").text(time);
	if (time == 0) {
		clearTimer();
		$(".startButton").text("Starta timer");
	}
}

function clearTimer() {
    clearInterval(timer);
	time = 7;
	timerRunning = false;
}

$(".startButton").on("click", function() {
	if(!timerRunning) {
		startTimer();
		$(".startButton").text("Stoppa timer");
		$(".timer").text("7");
		progressBar();
	} else {
		clearTimer();
		$(".startButton").text("Starta timer");
		clearInterval(interval);
	}
});

$(".nextStatementButton").on("click", function() {
	newStatement();
	clearTimer();
	clearInterval(interval);
	$(".bar").css("width", '0');	
	$(".timer").text("7");
	startTimer();
	progressBar();
});


function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() {
	if($(".firstScreen").css("display") == "none") {
		switchWindow("first");
	} else {
		navigator.app.exitApp();
	}
}
var interval;
function progressBar() {
	var bar = $(".bar");
	var timeLength = 7;
	var width = 1/timeLength;
	interval = setInterval(function() {
		if(width + 1/timeLength >= 100) {
			bar.css("width", "100%");
		} else {
			bar.css("width", width + "%");
		}
		if(width >= 100) {
			clearInterval(interval);
		}
		width = width + 1/timeLength;
	},  10)
}