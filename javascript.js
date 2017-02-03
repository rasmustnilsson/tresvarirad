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
	"rätter man kan beställa på kinaresturang"
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
		if(usedStatements[i] == statementIndex && lastStatement == statementIndex) { //kollar om det nya är samma som ett använt eller samma som innan reseten
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
	$(".middle > p").text(newStatement); //printar ut det nya uttrycket
}

newStatement();

var timer;
var time = 5;
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
	}
}

function clearTimer() {
    clearInterval(timer);
	$(".timer").text("0");
	time = 5;
	timerRunning = false;
}

$(".startButton").on("click", function() {
	if(!timerRunning) {
		startTimer();
	} else {
		clearTimer()
	}
});

$(".nextStatementButton").on("click", function() {
	newStatement();
});