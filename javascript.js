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


function toggleHelp() {
	$(".questionButton").css("zIndex", '10');
	$(".helpScreen").fadeToggle(500);
}


$(".questionDiv").on("click", function() { //när man klickar på spelaknappen
	toggleHelp();
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
	"first person shooter spel",
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
	"föremål av metall",
	"saker du förvarar i bilen",
	"saker man dricker ur",
	"djur på en bondgård",
	"djur som lever i kyla",
	"röda blommor",
	"tävlingsgrenar i sommar-OS",
	"saker man kan hitta bakom soffkuddarna",
	"sätt att imponera på någon",
	"klädmärken för kvinnor",
	"rätter från ett gatukök",
	"idrottsklubbar",
	"saker som finns i badrumsskåpet",
	"namn på fiskrätter",
	"frestelser",
	"professionella löpardistanser",
	"saker man skär upp",
	"festivaler",
	"saker som är farliga för tänderna",
	"ord som slutar på -PP",
	"konserver",
	"dåliga vanor",
	"preventivmedel",
	"franska ord",
	"artistnamn",
	"orsaker till dålig andedräkt",
	"prinsar",
	"saker som skyddar dig",
	"grenar i friidrott",
	"sorters nötter",
	"pojknamn som börjar på bokstaven D",
	"skäl till att man kan få böter",
	"sjöar",
	"namn på gemensamma bekanta",
	"saker i verktygslådan",
	"läskedrycker",
	"kontorsprylar",
	"sätt att bli miljonär",
	"bocker som har blivit film",
	"pajer",
	"saker som ringer",
	"saker man borstar",
	"djur som bor i de svenska skogarna",
	"kända religiösa personer",
	"matvaror som finns i kylskåpet",
	"sorters chokladbitar",
	"saker som rullar",
	"såser",
	"saker du köper till ditt husdjur",
	"typer av biljetter",
	"klassiska förfararknep",
	"maträtter en vegetarian äter",
	"nationsflaggor med rött i",
	"länder som gör vin",
	"andra ord för onykter",
	"städer i Norge",
	"förvaringsplatser där du kan ha pengar",
	"ord som rimmar på bok",
	"växter i en trädgård",
	"saker som inte har någon lukt",
	"saker du kan se under en bil",
	"saker som luktar illa",
	"saker man gör i vatten",
	"stjärnbilder",
	"saker som doftar",
	"sätt att minska stressen",
	"skyhöga byggnader",
	"hårprodukter",
	"matvanor som är nyttiga att äta",
	"saker som gör dig vacker",
	"sporter du lär dig i skolan",
	"saker man kan klippa",
	"saker som säljs i en låda",
	"saker som hänger",
	"saker som rinner",
	"åldersgränser",
	"smink-produkter",
	"anledningar att sända ett gratulationskort",
	"efterrätter",
	"saker som inte hörs",
	"kändisar från Storbritannien",
	"saker som finns på cirkus",
	"dubbelnamn på killar",
	"djur i trädgården",
	"TV-deckare",
	"saker som lyser",
	"amerikanska sångare",
	"yrken som slutar på -LOG",
	"föremål som används på ett bröllop",
	"drycker med bubblor",
	"dvärgar",
	"klädesplagg män sällan använder",
	"saker i en necessär",
	"saker du trär på armen",
	"djurläten",
	"svenska städer som slutar på -STAD",
	"underbara saker i livet",
	"andra ord för bröst",
	"saker som gör kvinnor arga",
	"saker man kan knyta",
	"yrken som använder lagbok",
	"ställen där du måste betala inträde",
	"saker man kan köpa på en loppmarknad",
	"saker som är mjuka",
	"saker som ryker",
	"skaldjur",
	"GB-glassar",
	"saker som man får gaser i magen av",
	"pojkleksaker",
	"träslag",
	"glass-smaker",
	"svenska statsministrar",
	"typer av vapen",
	"dagstidningar",
	"fobier",
	"saker man kan skriva på",
	"saker som finns i ett klassrum",
	"sorters straff",
	"saker som skrämmer",
	"bär",
	"saker i naturen som är gröna",
	"julsånger",
	"saker du hittar på frukostbordet",
	"strandsporter",
	"saker med lock",
	"saker man bär",
	"maträtter som innehåller potatis",
	"köksprylar",
	"sporter som inte utövas i lag",
	"värktabletter",
	"saker man har runt halsen",
	"sorters skräpmat",
	"saker folk blir glada av",
	"simmande djur",
	"drömjobb",
	"aktiviter på en första date",
	"saker du gör innan du lägger dig",
	"elektriska apparater",
	"kungar",
	"TV-program för barn",
	"djur du inte vill ha som husdjur",
	"romantiska platser",
	"internationella idrottstävlingar",
	"mjölsorter",
	"saker med pedaler",
	"saker man äter på barnkalas",
	"musikstilar",
	"saker som kan läggas i buntar",
	"sätt att flirta",
	"sätt att skaffa sig bättre kondition",
	"berömda hundar",
	"fiskar",
	"saker man hänger upp",
	"saker man gör med vatten",
	"ställen som kan lukta illa",
	"sorters te",
	"ställen där du kan köpa böcker",
	"rynkiga saker",
	"träningsformer",
	"föremål du ostraffat kan sparka på",
	"saker som smakar surt",
	"TV-serier",
	"saker som kan trösta dig",
	"golvmaterial",
	"saker som är svartvita",
	"ord på tre bokstäver",
	"saker som finns i en handväska",
	"typer av klocker",
	"gröna grönsaker",
	"olika pajer",
	"saker som känns sträva",
	"drömyrken",
	"saker du kan göra med fötterna",
	"naturkatastrofer",
	"djur som simmar bra",
	"cykeltillbehör",
	"saker som är förbjudna",
	"typer av skor",
	"läsksorter",
	"män som anses sexiga",
	"utomhusaktiviteter under sommartid",
	"ord som börjar på SEX-",
	"djur som bor på zoo",
	"yrkesgrupper som jobbar med film",
	"kvinnliga dubbelnamn",
	"saker man kan göra med öronen",
	"saker i din semesterväska",
	"geometriska figurer",
	"mänskliga inre organ",
	"sorters bär",
	"ord som rimmar på våga",
	"egenskaper man kan beundra",
	"saker som du kan läsa",
	"artighetsfraser",
	"vätskor",
	"saker många inte vågar göra",
	"saker som är salta",
	"saker som måste vändas",
	"ställen man kan bada på",
	"fiskeredskap",
	"klassiska leksaker",
	"typer av damunderkläder",
	"saker med kärna",
	"sätt att göra sönder något",
	"djur på B",
	"barnsjukdomar",
	"saker i en nyttig frukost",
	"saker som bör poleras",
	"viktenheter",
	"ställen där du vill bli kliad",
	"saker du gör i bilen",
	"sorters verktyg",
	"maträtter serveras med ris",
	"typer av frukostflingor",
	"ord som börjar på V",
	"skrynkliga saker",
	"gymnastikredskap",
	"drycker som smakar bra med is",
	"namn på prinsessor",
	"saker som förvaras i källaren",
	"sätt att snabbt slösa pengar på",
	"svenska landskap",
	"traditionella juldekorationer",
	"raka förmål",
	"italienska maträtter",
	"ord som slutar på -ISM",
	"saker av plast",
	"saker som glittrar",
	"svenska idrottskvinnor",
	"rutiga saker",
	"skelettdelar",
	"saker som får dig att skratta",
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

function onBackKeyDown() {
	if($(".helpScreen").css("display") != "none") {
		toggleHelp();
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