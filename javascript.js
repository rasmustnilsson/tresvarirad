function switchWindow(window) { //funktion som byter screen till den man stoppar in
	if(window == "first") {
		$(".firstScreen").css("display", '');
		$(".secondScreen").css("display", 'none');
		$(".helpScreen").css("display", 'none');
	} else if (window == "second") {
		$(".firstScreen").css("display", 'none');
		$(".secondScreen").css("display", 'flex');
		$(".helpScreen").css("display", 'none');
	}
}
switchWindow("second");
$(".startknapp").on("click", function() { //när man klickar på spelaknappen
	switchWindow("second");
})

$(".questionDiv").on("click", function() { //när man klickar på spelaknappen
	$(".questionButton").css("zIndex", '10');
	$(".helpScreen").fadeToggle(500);
	$('.questionButton').attr('src', 'img/questionmarkW.png');
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
	"energidrycker",
	"personer på sedlar",
	"telefontillverkare",
	"lärare du hade i högstadiet",
	"ord på Ryska",
	"saker som börjar på E",
	"first Person Shooter spel",
	"sommarplågor (låtar)",
	"låtar från Melodifestivalen",
	"döda kändisar",
	"star Wars karaktärer",
	"efternamn",
	"gymnasieprogram",
	"saker som luktar gott",
	"saker man inte få ta med genom säkerhetskontrollen",
	"saker som glänser",
	"medlemmar i svenska kungafamiljen",
	"saker som är söta",
	"tårtor",
	"saker man gör när man är glad",
	"kattdjur",
	"djur som börjar på M",
	"pytteså saker",
	"landskap som slutar på -LAND",
	"vapen utan kulor",
	"djur som finns på en bondgård",
	"svenska politiker",
	"djur man gör päls av",
	"matätter som innehåller ägg",
	"tillbehör till mobilen",
	"saker som flyger",
	"ord som böjar på HÅL-",
	"saker som väger under ett kilo",
	"saker som stinker",
	"kladdiga saker",
	"sorters kakor",
	"saker du lärde dig i skolan",
	"yogurt-smaker",
	"märken på klockor",
	"tärningsspel",
	"tecknade serier",
	"allergier",
	"actionspel",
	"berömda båtar",
	"broar",
	"europeiska maträtter",
	"saker som finns under diskbänken",
	"sorters kött",
	"siffror på en Darttavla",
	"Eu-länder",
	"förrätter",
	"tal som tillsammans blir hundra",
	"saker som är fyrkantiga",
	"utbildningar",
	"sorters bröd",
	"rika människor",
	"saker som är bruna",
	"diktatorer",
	"språk man studerar i skolan",
	"utländska valutor",
	"saker som går batteri",
	"kända boktitlar",
	"irriterande saker hundar gör",
	"saker som går att öppna",
	"klädaffärer",
	"sätt att bli av med extra kilon på",
	"sexiga skådespelerskor",
	"saker man kan tvätta",
	"typer av hus",
	"sallader",
	"saker man kan göra med mat",
	"ställen där du står i kö",
	"ställen där du kan hitta en lök",
	"maträtter som smakar bra med vitlök i",
	"hobbys",
	"rum",
	"djupa ställen",
	"rätter som är husmanskost",
	"ord som slutar på -ÄNG",
	"prickiga saker",
	"yrken med uniform",
	"ord som börjar på HERR-",
	"typer av glas",
	"partiledare",
	"saker som låter högt",
	"dyra bilar",
	"saker du ser på en flygplats",
	"saker du ser på dreamhack",
	"djur som inte hörs",
	"saker du gör i sovrummet",
	"saker som har ben",
	"saker du gör i badrummet",
	"kända byggnader",
	"kroppsdelar där folk är kittliga",
	"flicknamn på tre bokstäver",
	"karaktärer i Kalle Anka",
	"föremål du kan hitta på en soptipp",
	"saker man kan göra med näsan",
	"sorters ägg",
	"saker man bygger",
	"världsberömda svenskar",
	"sorters pasta",
	"flickleksaker",
	"högtider",
	"båtmodeller",
	"drycker man blir berusad av",
	"sagoboksfigurer",
	"saker som smakar sött",
	"saker som går att göra med papper",
	"saker som säljs på en mack",
	"engelska fotbollslag",
	"professionella fotbollsspelare",
	"krig",
	"anledningar till att gifta sig",
	"fåglar som kan flyga",
	"träd med blad",
	"förnamn på tre bokstäver",
	"saker som går att bryta",
	"varma saker",
	"pojknamn på tre bokstäver",
	"sorters pennor",
	"astrologiska stjärntecken",
	"redskap till gräsmattan",
	"saker folk klagar på",
	"klädesplagg för vintern",
	"saker som gör folk nervösa",
	"gator i monopol",
	"saker som man grälar om",
	"anledningar att hamna i fängelse",
	"musik-genrer",
	"ostsorter",
	"saker man bränner sig på",
	"saker som är brå",
	"ställen där spindlar trivs",
	"sätt att skicka meddelanden",
	"företag som gör TV-reklam",
	"flygbolag",
	"parker",
	"sagor",
	"Astrid Lindgren-karaktärer"
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
var spinTimerRunning = false;
$(".replayButton").on("click", function() {
	$(".replayButton").css("animation-duration", '');
	clearTimer();
	clearInterval(interval);
	$(".bar").css("width", '0');
	$(".timer").text("7");
	startTimer();
	progressBar();
	var el = $(this);
    el.before(el.clone(true)).remove();
});

$(".replayButton").css("animation-duration", '0s');
$(".replayButton").addClass("replaySpin");

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

var parent, ink, d, x, y;

$(function(){
	var ink, d, x, y;
	$(".secondScreen span button").on("click", function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
});