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

$(".secondScreen img").on("click", function() { //när man klickar på spelaknappen
	switchWindow("help");
})

var statement = [ //en array med alla uttryck
	"sporter där du kastar något",
	"titlar på barnböcker",
	"sjukdomar",
	"länder på norra halvklotet",
	"namn på så kallade damtidningar",
	"namn på nöjesfält",
	"varumärken på TV-apparater",
	"negativa saker med Sverige",
	"typer av lösgodis",
	"rovfåglar",
	"saker som är farliga att andas in",
	"städer som börjar på P",
	"berömda par",
	"lagsporter med boll",
	"länder som börjar på S",
	"TV-profiler",
	"frusna efterrätter",
	"elektronikaffärer",
	"brädspel",
	"populära chartermål",
	"populära webplatser",
	"kampsporter",
	"fågelarter",
	"saker i skolväskan",
	"semesteröar",
	"drycker man köper på systembolaget",
	"tidningar",
	"sinnestillstånd",
	"radioprogram",
	"ord som rimmar på sten",
	"kända tennispelare",
	"saker som säljs i påse",
	"bilmärken",
	"danser",
	"italienska städer",
	"yrken",
	"saker man kan äta på IKEA",
	"svenska fotbollsspelare",
	"ord som rimmar på röd",
	"datorprylar",
	"saker som gör män arga",
	"kroppsdelar på en häst",
	"saker du inte kan köpa för pengar",
	"bakverk med grädde",
	"saker man kan göra med en kniv",
	"marmeladsmaker",
	"filmtitlar",
	"farliga platser",
	"låt-titlar",
	"karaktärer i Emil i Lönneberga",
	"rätter man kan beställa på kinaresturang",
	"maträtter",
	"Energidrycker",
	"Personer på sedlar",
	"Telefontillverkare",
	"Lärare du hade i högstadiet",
	"Ord på Ryska",
	"Saker som börjar på E",
	"First Person Shooter spel",
	"Sommarplågor",
	"Låtar från Melodifestivalen"
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
	var ptag = $(".secondScreen div p");
	var newStatement = statement[statementIndex];
	ptag.fadeTo(200, 0, function() {
		ptag.text(newStatement); //printar ut det nya uttrycket
	});
	ptag.fadeTo(200, 1);
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

$(".replayButton").on("click", function() {
	clearTimer();
	clearInterval(interval);
	$(".bar").css("width", '0');	
	$(".timer").text("7");
	startTimer();
	progressBar();
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