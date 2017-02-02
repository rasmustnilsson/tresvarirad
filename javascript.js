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

var usedStatements = [1, 2, 3]; //använda statementsindexes

function newStatement() { //spottar ut en random statement som inte har användts förr
	function newStatementInfo() {
		var index = Math.floor(Math.random()*statement.length);
		return statement[index];
	}
	var newStatement = newStatementInfo();
	console.log(newStatement);
	for (var i = 0; i < usedStatements.length; ++i) {
		if(statement[usedStatements[i]] == newStatement) {
			console.log(true);
		}
	}
	newStatementInfo();
	$(".secondScreen p").text("hello");
}