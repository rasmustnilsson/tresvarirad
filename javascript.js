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
	"uttryck 1",
	"uttryck 2",
	"uttryck 3",
	"uttryck 4",
	"uttryck 5",
	"uttryck 6",
	"uttryck 7"
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