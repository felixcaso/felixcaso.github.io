//Game Variables
var questionMode = false;
var showAnswer = false;
var questionNum;
var introMode = true;
var gameCount;

var showChoice = false;
var addScore = false;
var score = 0;
var playerChoice;
var playerName;
var ansInp;
var nameInp;

//Images
//Musicians of Color Images
var AngelCreasyImg;
var EddieSouthImg;
var JosephDouglassImg;
var EmmaSmockImg;
var WilliamHarreldImg;

//Composers of Color
var MargaretBondsImg;
var JuliusEastmanImg;
var FlorencePriceImg;
var JuliaPerryImg;
var ColeridgeTaylorPerkinsonImg;

//Multi-Cultural
var OrquestaAragonImg;
var ClefClubOrchestraImg;
var QuartetteIndigoImg;
var NegroStringQuartetImg;
var KingandcarterImg;


//Music Theory terms
var staffImg;
var doubleBarLineImage;
var musicalAlphaImg;
var halfNoteImg;
var trebleClefImg;
var baseClefImg;

//String Instruments
var stringFamilyImg;
var CelloImg
var KoraImg;
var violinPartsImg;
var violaImg;


//Personal fonts
var OPEN_SANS_LIGHT;
var PLAY_FAIR_DISPLAY_BOLD;

//Jeopardy Music
var jeopardySong;

//Catagory booleans
var c1_100 = false;
var c1_100_clicked = false;
var c1_200 = false;
var c1_200_clicked = false;
var c1_300 = false;
var c1_300_clicked = false;
var c1_400 = false;
var c1_400_clicked = false;
var c1_500 = false;
var c1_500_clicked = false;

var c2_100 = false;
var c2_100_clicked = false;
var c2_200 = false;
var c2_200_clicked = false;
var c2_300 = false;
var c2_300_clicked = false;
var c2_400 = false;
var c2_400_clicked = false;
var c2_500 = false;
var c2_500_clicked = false;

var c3_100 = false;
var c3_100_clicked = false;
var c3_200 = false;
var c3_200_clicked = false;
var c3_300 = false;
var c3_300_clicked = false;
var c3_400 = false;
var c3_400_clicked = false;
var c3_500 = false;
var c3_500_clicked = false;

var c4_100 = false;
var c4_100_clicked = false;
var c4_200 = false;
var c4_200_clicked = false;
var c4_300 = false;
var c4_300_clicked = false;
var c4_400 = false;
var c4_400_clicked = false;
var c4_500 = false;
var c4_500_clicked = false;

var c5_100 = false;
var c5_100_clicked = false;
var c5_200 = false;
var c5_200_clicked = false;
var c5_300 = false;
var c5_300_clicked = false;
var c5_400 = false;
var c5_400_clicked = false;
var c5_500 = false;
var c5_500_clicked = false;

function preload(){
	//Fonts
	OPEN_SANS_LIGHT = loadFont('Fonts/OpenSans-Light.ttf');
	PLAY_FAIR_DISPLAY_BOLD = loadFont('Fonts/PlayfairDisplay-Bold.ttf');

	//Jeopardy Song
	jeopardySong = loadSound('Sounds/Violin Jeopardy.mp3');

	//Images
	//Musicians of Color
	JosephDouglassImg = loadImage('Images/joseph_henry_douglass.jpg');
	AngelCreasyImg = loadImage('Images/Angel_Creasy.jpeg');
	EddieSouthImg = loadImage('Images/Eddie_South.jpg');
	EmmaSmockImg = loadImage('Images/Emma_Ginger_Smock.png');
	WilliamHarreldImg = loadImage('Images/William_Kemper_Harreld.jpg');

	//Composers of Color
	ColeridgeTaylorPerkinsonImg =loadImage('Images/Coleridge_Taylor_Perkinson.jpg');
	MargaretBondsImg =loadImage('Images/Margaret_Bonds.jpg');
	JuliusEastmanImg =loadImage('Images/Julius_Eastman.png');
	FlorencePriceImg =loadImage('Images/florence_price.jpg');
	JuliaPerryImg =loadImage('Images/Julia_Perry.jpg');

	//Multi=Cultural
	OrquestaAragonImg = loadImage('Images/Orquesta_Aragon.jpg');
	ClefClubOrchestraImg = loadImage('Images/clef_club-orchestra.jpg');
	QuartetteIndigoImg = loadImage('Images/QuartetteIndigo.jpg')
	NegroStringQuartetImg =loadImage('Images/Negro String Quartet.jpg');
	KingandcarterImg = loadImage('Images/kingandcarter.jpeg');

	//Music Theory Terms
	staffImg = loadImage('Images/staff.png');
	doubleBarLineImage = loadImage('Images/doubleBarLine1.png');
	musicalAlphaImg = loadImage('Images/musicalAlpha.jpg');
	halfNoteImg = loadImage('Images/halfNote.jpg');
	baseClefImg = loadImage('Images/baseClef.png');
	trebleClefImg = loadImage('Images/trebleClef.png');

	//String Instruments
	stringFamilyImg = loadImage('Images/stringFamily.png');
	violinPartsImg = loadImage('Images/violinParts.jpg');
	CelloImg = loadImage('Images/cello.png');
	KoraImg = loadImage('Images/kora.png');
	violaImg = loadImage('Images/viola.png');

}

function setup() {
	createCanvas(windowWidth,windowHeight);
	ansInp = createInput('').attribute('placeholder', 'Enter Answer');
	ansInp.position(700,600);
	ansInp.size(120,40);
	ansInp.hide();

	nameInp = createInput('').attribute('placeholder', 'Enter Name');
	nameInp.position(600,250);
	nameInp.size(120,40);


	//init Game Variable
	questionMode = false;
	showAnswer = false;
	introMode = true;
	questionNum = 0;
	gameCount = 0;
}

function keyPressed(){

	if(key === ' ' && !showAnswer){
		if(jeopardySong.isPlaying()){
			jeopardySong.stop();
			showAnswer = true;
		}
	}
	else if(keyCode === ENTER && showAnswer && questionMode) {
		if(jeopardySong.isPlaying){
			jeopardySong.stop();
		}
		showAnswer = false;
		questionNum = 0;
		questionMode = false;
	}
	else if(keyCode === ENTER){
		if(introMode){
			playerName = nameInp.value();
			nameInp.hide();
			introMode = false;
		}
		checkAnswer();

	}

}

function mouseClicked(){
	if(c1_100){
		//transition
		c1_100_clicked = true;
		questionNum = 1;
		questionMode = true;
		showChoice = true;
		c1_100 = false;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}

	}
	else if(c1_200){
		//transition
		c1_200_clicked = true;
		questionNum = 2;
		questionMode = true;
		showChoice = true;
		c1_200 = false;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c1_300){
		//transition
		c1_300_clicked = true;
		questionNum = 3;
		questionMode = true;
		c1_300 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c1_400){
		//transition
		c1_400_clicked = true;
		questionNum = 4;
		questionMode = true;
		c1_400 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c1_500){
		//transition
		c1_500_clicked = true;
		questionNum = 5;
		questionMode = true;
		c1_500 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
//=========================================================
	else if(c2_100){
		//transition
		c2_100_clicked = true;
		questionNum = 6;
		questionMode = true;
		c2_100 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c2_200){
		//transition
		c2_200_clicked = true;
		questionNum = 7;
		questionMode = true;
		c2_200 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c2_300){
		//transition
		c2_300_clicked = true;
		questionNum = 8;
		questionMode = true;
		c2_300 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c2_400){
		//transition
		c2_400_clicked = true;
		questionNum = 9;
		questionMode = true;
		c2_400 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c2_500){
		//transition
		c2_500_clicked = true;
		questionNum = 10;
		questionMode = true;
		c2_500 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
//=========================================================
	else if(c3_100){
		//transition
		c3_100_clicked = true;
		questionNum = 11;
		questionMode = true;
		c3_100 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c3_200){
		//transition
		c3_200_clicked = true;
		questionNum = 12;
		questionMode = true;
		c3_200 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c3_300){
		//transition
		c3_300_clicked = true;
		questionNum = 13;
		questionMode = true;
		c3_300 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c3_400){
		//transition
		c3_400_clicked = true;
		questionNum = 14;
		questionMode = true;
		c3_400 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c3_500){
		//transition
		c3_500_clicked = true;
		questionNum = 15;
		questionMode = true;
		c3_500 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
//=========================================================
	else if(c4_100){
		//transition
		c4_100_clicked = true;
		questionNum = 16;
		questionMode = true;
		c4_100 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c4_200){
		//transition
		c4_200_clicked = true;
		questionNum = 17;
		questionMode = true;
		c4_200 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c4_300){
		//transition
		c4_300_clicked = true;
		questionNum = 18;
		questionMode = true;
		c4_300 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c4_400){
		//transition
		c4_400_clicked = true;
		questionNum = 19;
		questionMode = true;
		c4_400 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c4_500){
		//transition
		c4_500_clicked = true;
		questionNum = 20;
		questionMode = true;
		c4_500 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
//=========================================================
	else if(c5_100){
		//transition
		c5_100_clicked = true;
		questionNum = 21;
		questionMode = true;
		c5_100 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c5_200){
		//transition
		c5_200_clicked = true;
		questionNum = 22;
		questionMode = true;
		c5_200 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c5_300){
		//transition
		c5_300_clicked = true;
		questionNum = 23;
		questionMode = true;
		c5_300 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c5_400){
		//transition
		c5_400_clicked = true;
		questionNum = 24;
		questionMode = true;
		c5_400 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
	else if(c5_500){
		//transition
		c5_500_clicked = true;
		questionNum = 25;
		questionMode = true;
		c5_500 = false;
		showChoice = true;
		if(!jeopardySong.isPlaying()){
			jeopardySong.play();
		}
	}
}

function draw(){
	background(235, 81, 15); //red-orange
	if (introMode){
		instructions();
	}
	else{//Start game
		if(!questionMode){
			drawBoard();
		}
		else{
			showQuestions()
		}
	}




}

function setText(){
	//Displaying Title (Top Center)
	strokeWeight(0);
	textSize(50);
	textFont(PLAY_FAIR_DISPLAY_BOLD);
	fill(0);
	text("OBF String Jeopardy", (windowWidth/2)-220, 55);

	//Iymanni's Logo (Top-Right)
	fill(255);
	ellipse(46,40,105);
	fill(0);
	text("iah",10,60);

	//Border below Title
	fill(0);
	rect(0, 77, windowWidth, 30);

	//Display Name and Score
	textSize(25);
	text(playerName+': '+'$'+score, 115, 50);

	if(!questionMode){
		//Font syles for Catagory
		textFont(PLAY_FAIR_DISPLAY_BOLD);
		textStyle(BOLD);
		textSize(22);
		fill(0);

		// First Category text
		text("MUSICIANS", 70, 140);
		text("OF COLOR", 70, 165);

		// Second Category text
		text("COMPOSERS", 350, 140);
		text("OF COLOR", 360, 165);

		// Third box text
		text("MULTI-CULTURAL",595, 140);
		text("ENSEMBLES",630, 165);

		// Fourth box text
		text("MUSIC THEORY", 890, 140);
		text("TERMS", 935, 165);

		// Fifth box text
		text("STRING", 1200, 140);
		text("INSTRUMENTS", 1170, 165);

	}
	else{
		//textFont('Ariel');
		textStyle(BOLD);
		textSize(25);
		fill(255);

		text("Press Enter To Go Back", 990, 50);
	}

}

function drawBoard(){
	background(235, 81, 15); //red-orange #EB510F
	//creating Top Text and logo
	setText();

	textFont('Ariel') // Font for the $$
	//Creating first colunm
	col1_100();
	col1_200();
	col1_300();
	col1_400();
	col1_500();

	//Creating Second colunm
	col2_100();
	col2_200();
	col2_300();
	col2_400();
	col2_500();

	//Creating Third colunm
	col3_100();
	col3_200();
	col3_300();
	col3_400();
	col3_500();

	//Creating Fourth colunm
	col4_100();
	col4_200();
	col4_300();
	col4_400();
	col4_500();

	//Creating Fifth colunm
	col5_100();
	col5_200();
	col5_300();
	col5_400();
	col5_500();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


//=======================================================================================================First Colum
function col1_100(){
	if((mouseX > 15) && (mouseX < 235) && ( mouseY >= 175) && (mouseY <=279 && !c1_100_clicked)){
		stroke(255,204,0);
		c1_100 = true;
	}
	else{
		stroke(0);
		c1_100 = false;
	}

	if(c1_100_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(15, 175, 220, 104,10); // 1st box
		addScore = true

	}else{
		strokeWeight(3);
		fill(255);
		rect(15, 175, 220, 104,10); // 1st box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$100", 35,260);
	}
}

function col1_200(){
	if((mouseX > 15) && (mouseX < 235) && ( mouseY >= 295) && (mouseY <=399) && !c1_200_clicked){
		stroke(255,204,0);
		c1_200 = true;
	}
	else{
		stroke(0);
		c1_200 = false;
	}

	if(c1_200_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(15, 295, 220, 104,10); // 2nd box
	}
	else{
		strokeWeight(3);
		fill(255);
		rect(15, 295, 220, 104,10); // 2nd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$200",35,380);
	}


}

function col1_300(){
	if((mouseX > 15) && (mouseX < 235) && ( mouseY >= 415) && (mouseY <=519 && !c1_300_clicked) ){
		stroke(255,204,0);
		c1_300 = true;
	}
	else{
		stroke(0);
		c1_300 = false;
	}

	if(c1_300_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(15, 415, 220, 104,10); // 3rd box
	}
	else{
		strokeWeight(3);
		fill(255);
		rect(15, 415, 220, 104,10); // 3rd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$300",35,500);
	}


}

function col1_400(){
	if((mouseX > 15) && (mouseX < 235) && ( mouseY >= 535) && (mouseY <=639 &&! c1_400_clicked) ){
		stroke(255,204,0);
		c1_400 = true;
	}
	else{
		stroke(0);
		c1_400 = false;
	}

	if(c1_400_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(15, 535, 220, 104,10); // 4th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(15, 535, 220, 104,10); // 4th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$400",35,620);
	}


}

function col1_500(){
	if((mouseX > 15) && (mouseX < 235) && ( mouseY >= 655) && (mouseY <=759 && !c1_500_clicked) ){
		stroke(255,204,0);
		c1_500 = true;
	}
	else{
		stroke(0);
		c1_500 = false;
	}

	if(c1_500_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(15, 655, 220, 104,10); // 5th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(15, 655, 220, 104,10); // 5th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$500",35,740);
	}


}

//==================================================================Second Colum
function col2_100(){
	if((mouseX >= 300) && (mouseX <= 520) && ( mouseY >= 175) && (mouseY <=279 && !c2_100_clicked) ){
		stroke(255,204,0);
		c2_100 = true;
	}
	else{
		stroke(0);
		c2_100 = false;
	}

	if(c2_100_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(300, 175, 220, 104,10); // 1st box
	}else{
		strokeWeight(3);
		fill(255);
		rect(300, 175, 220, 104,10); // 1st box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$100", 320,260);
	}


}

function col2_200(){
	if((mouseX >= 300) && (mouseX <= 520) && ( mouseY >= 295) && (mouseY <=399&& !c2_200_clicked) ){
		stroke(255,204,0);
		c2_200 = true;
	}
	else{
		stroke(0);
		c2_200 = false;
	}

	if(c2_200_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(300, 295, 220, 104,10); // 2nd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(300, 295, 220, 104,10); // 2nd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$200",320,380);
	}

}

function col2_300(){
	if((mouseX >= 300) && (mouseX <= 520) && ( mouseY >= 415) && (mouseY <=519 && !c2_300_clicked ) ){
		stroke(255,204,0);
		c2_300 = true;
	}
	else{
		stroke(0);
		c2_300 = false;
	}

	if(c2_300_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(300, 415, 220, 104,10); // 3rd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(300, 415, 220, 104,10); // 3rd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$300",320,500);
	}

}

function col2_400(){
	if((mouseX >= 300) && (mouseX <= 520) && ( mouseY >= 535) && (mouseY <=639&& !c2_400_clicked) ){
		stroke(255,204,0);
		c2_400 = true;
	}
	else{
		stroke(0);
		c2_400 = false;
	}

	if(c2_400_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(300, 535, 220, 104,10); // 4th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(300, 535, 220, 104,10); // 4th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$400",320,620);
	}


}

function col2_500(){
	if((mouseX >= 300) && (mouseX <= 520) && ( mouseY >= 655) && (mouseY <=759&& !c2_500_clicked) ){
		stroke(255,204,0);
		c2_500 = true;
	}
	else{
		stroke(0);
		c2_500 = false;
	}

	if(c2_500_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(300, 655, 220, 104,10); // 5th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(300, 655, 220, 104,10); // 5th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$500",320,740);
	}

}

//========================================Third Colum
function col3_100() {
	if ((mouseX >= 580) && (mouseX <= 800) && (mouseY >= 175) && (mouseY <= 279&& !c3_100_clicked)) {
		stroke(255,204,0);
		c3_100 = true;
	}
	else{
		stroke(0);
		c3_100 = false;
	}

	if(c3_100_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(580, 175, 220, 104,10); // 1st box
	}else{
		strokeWeight(3);
		fill(255);
		rect(580, 175, 220, 104,10); // 1st box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$100", 600,260);
	}
}

function col3_200(){
	if((mouseX >= 580) && (mouseX <= 800) && ( mouseY >= 295) && (mouseY <=399&& !c3_200_clicked) ){
		stroke(255,204,0);
		c3_200 = true;
	}
	else{
		stroke(0);
		c3_200 = false;
	}

	if(c3_200_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(580, 295, 220, 104,10); // 2nd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(580, 295, 220, 104,10); // 2nd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$200",600,380);
	}


}

function col3_300(){
	if((mouseX >= 580) && (mouseX <= 800) && ( mouseY >= 415) && (mouseY <=519&& !c3_300_clicked) ){
		stroke(255,204,0);
		c3_300 = true;
	}
	else{
		stroke(0);
		c3_300 = false;
	}

	if(c3_300_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(580, 415, 220, 104,10); // 3rd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(580, 415, 220, 104,10); // 3rd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$300",600,500);
	}



}

function col3_400(){
	if((mouseX >= 580) && (mouseX <= 800) && ( mouseY >= 535) && (mouseY <=639&& !c3_400_clicked) ){
		stroke(255,204,0);
		c3_400 = true;
	}
	else{
		stroke(0);
		c3_400 = false;
	}

	if(c3_400_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(580, 535, 220, 104,10); // 4th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(580, 535, 220, 104,10); // 4th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$400",600,620);
	}


}

function col3_500(){
	if((mouseX >= 580) && (mouseX <= 800) && ( mouseY >= 655) && (mouseY <=759&& !c3_500_clicked) ){
		stroke(255,204,0);
		c3_500 = true;
	}
	else{
		stroke(0);
		c3_500 = false;
	}

	if(c3_500_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(580, 655, 220, 104,10); // 5th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(580, 655, 220, 104,10); // 5th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$500",600,740);
	}

}

//========================================Forth Colum
function col4_100() {
	if ((mouseX >= 855) && (mouseX <= 1075) && (mouseY >= 175) && (mouseY <= 279 && !c4_100_clicked)) {
		stroke(255,204,0);
		c4_100 = true;
	}
	else{
		stroke(0);
		c4_100 = false;
	}

	if(c4_100_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(855, 175, 220, 104,10); // 1st box
	}else{
		strokeWeight(3);
		fill(255);
		rect(855, 175, 220, 104,10); // 1st box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$100", 875,260);
	}

}

function col4_200(){
	if((mouseX >= 855) && (mouseX <= 1075) && ( mouseY >= 295) && (mouseY <=399 && !c4_200_clicked) ){
		stroke(255,204,0);
		c4_200 = true;
	}
	else{
		stroke(0);
		c4_200 = false;
	}

	if(c4_200_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(855, 295, 220, 104,10); // 2nd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(855, 295, 220, 104,10); // 2nd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$200",875,380);
	}


}

function col4_300(){
	if((mouseX >= 855) && (mouseX <= 1075) && ( mouseY >= 415) && (mouseY <=519&& !c4_300_clicked) ){
		stroke(255,204,0);
		c4_300 = true;
	}
	else{
		stroke(0);
		c4_300 = false;
	}

	if(c4_300_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(855, 415, 220, 104,10); // 3rd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(855, 415, 220, 104,10); // 3rd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$300",875,500);
	}


}

function col4_400(){
	if((mouseX >= 855) && (mouseX <= 1075) && ( mouseY >= 535) && (mouseY <=639&& !c4_400_clicked) ){
		stroke(255,204,0);
		c4_400 = true;
	}
	else{
		stroke(0);
		c4_400 = false;
	}
	if(c4_400_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(855, 535, 220, 104,10); // 4th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(855, 535, 220, 104,10); // 4th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$400",875,620);
	}


}

function col4_500(){
	if((mouseX >= 855) && (mouseX <= 1075) && ( mouseY >= 655) && (mouseY <=759&& !c4_500_clicked) ){
		stroke(255,204,0);
		c4_500 = true;
	}
	else{
		stroke(0);
		c4_500 = false;
	}

	if(c4_500_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(855, 655, 220, 104,10); // 5th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(855, 655, 220, 104,10); // 5th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$500",875,740);
	}

}

//========================================Fifth Colum
function col5_100() {
	if ((mouseX >= 1130) && (mouseX <= 1350) && (mouseY >= 175) && (mouseY <= 279&&!c5_100_clicked)) {
		stroke(255,204,0);
		c5_100 = true;
	}
	else{
		stroke(0);
		c5_100 = false;
	}

	if(c5_100_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(1130, 175, 220, 104,10); // 1st box
	}else{
		strokeWeight(3);
		fill(255);
		rect(1130, 175, 220, 104,10); // 1st box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$100", 1150,260);
	}


}

function col5_200(){
	if((mouseX >= 1130) && (mouseX <= 1350) && ( mouseY >= 295) && (mouseY <=399&&!c5_200_clicked) ){
		stroke(255,204,0);
		c5_200 = true;
	}
	else{
		stroke(0);
		c5_200 = false;
	}

	if(c5_200_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(1130, 295, 220, 104,10); // 2nd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(1130, 295, 220, 104,10); // 2nd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$200",1150,380);
	}


}

function col5_300(){
	if((mouseX >= 1130) && (mouseX <= 1350) && ( mouseY >= 415) && (mouseY <=519&&!c5_300_clicked) ){
		stroke(255,204,0);
		c5_300 = true;
	}
	else{
		stroke(0);
		c5_300 = false;
	}

	if(c5_300_clicked){
		strokeWeight(3);
		stroke(0);
		fill(255,255,255,5);
		rect(1130, 415, 220, 104,10); // 3rd box
	}else{
		strokeWeight(3);
		fill(255);
		rect(1130, 415, 220, 104,10); // 3rd box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$300",1150,500);
	}
}

function col5_400(){
	if((mouseX >= 1130) && (mouseX <= 1350) && ( mouseY >= 535) && (mouseY <=639 && !c5_400_clicked) ){
		stroke(255,204,0);
		c5_400 = true;
	}
	else{
		stroke(0);
		c5_400 = false;
	}

	if(c5_400_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(1130, 535, 220, 104,10); // 4th box
	}else{
		strokeWeight(3);
		fill(255);
		rect(1130, 535, 220, 104,10); // 4th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$400",1150,620);
	}


}

function col5_500(){
	if((mouseX >= 1130) && (mouseX <= 1350) && ( mouseY >= 655) && (mouseY <=759&&!c5_500_clicked) ){
		stroke(255,204,0);
		c5_500 = true;
	}
	else{
		stroke(0);
		c5_500 = false;
	}

	if(c5_500_clicked){
		strokeWeight(3);
		fill(255,255,255,5);
		rect(1130, 655, 220, 104,10); // 5th box
		addScore = true;
	}else{
		strokeWeight(3);
		fill(255);
		rect(1130, 655, 220, 104,10); // 5th box

		textSize(90);
		textStyle(BOLD);
		fill(255,204,0); //gold
		text("$500",1150,740);
	}

}

//======================================= Questions
function showQuestions(){
	setText();
	fill(255);
	textSize(50);
	textFont(PLAY_FAIR_DISPLAY_BOLD);
	switch(questionNum) {
		case 1://Joesph Henry Douglas: African American concert violinist, educator and grandson of abolitionist Frederick Douglass.
			text('African American concert violinist, educator ', 150, 200);
			text('and grandson of abolitionist Frederick Douglass', 150, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Joesph Henry Douglas',150,505);
				text('b) Who is Henry Douglas Joesph',150,565);
			}


			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showAnswer = true;
				showChoice = false;
				text('Who is Joesph Henry Douglas', 150, 505);
				image(JosephDouglassImg,900,300,340,450);
			}
			break;
		case 2://Angel Creasy: Who is the versatile jazz violinist known for creating the song and dance trio, Three Little Words?
			text('Who is the versatile jazz violinist known for creating', 90, 200);
			text(' the song and dance trio, Three Little Words?', 90, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Angelina Greasy',150,505);
				text('b) Who is Angel Creasy',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Angel Creasy', 290, 505);
				image(AngelCreasyImg,800,320,290,400);
			}
			break;
		case 3://Edward South: African American concert violinist from Louisiana Missouri who turned to a career in jazz?
			text('African American concert violinist from Louisiana', 125, 200);
			text('Missouri who turned to a career in jazz', 125, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Edward "Eddy" Otha North',150,505);
				text('b) Who is Edward "Eddie" Otha South',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Edward “Eddie” Otha South', 50, 505);
				image(EddieSouthImg,900,280,404,444);
			}
			break;
		case 4://William Kemper Heralds: African American concert violinist, pianist and organist—serving 42 years as professor	and chair of the music department at Morehouse College
			text('African American concert violinist, pianist and', 100, 160);
			text('organist serving 42 years as professor and chair', 100, 220);
			text('of the music department at Morehouse College', 100, 280);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is William Kemper Heralds',150,505);
				text('b) Who is Kemper Will Heralds',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is William Kemper Heralds', 100, 505);
				image(WilliamHarreldImg,900,300,340,450);
			}
			break;
		case 5://Emma Smock: African American violinist, orchestra leader best known for her recordings with the Vivien Garry Quintet
			text('African American violinist, orchestra leader best', 100, 200);
			text('known for her recordings with the Vivien Garry', 100, 260);
			text('Quintet', 100, 320);
			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Emma Smock',150,505);
				text('b) Who is Emmy Smalls',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Emma Smock', 75, 505);
				image(EmmaSmockImg,600,310,663,450);
			}
			break;
		//================================================================================================= C2
		case 6: //Margaret Bonds : Who is best remembered for collaborating with Langston Hughes
			text('Who is best remembered for collaborating', 200, 200);
			text('with Langston Hughes?', 200, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Margaret Bonds',150,505);
				text('b) Who is Martha Binds',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Margaret Bonds', 150, 505);
				image(MargaretBondsImg,750,240,400,500)
			}
			break;
		case 7://Julius Eastman : Which composer is known for combining minimalism and elements of pop music.. guerilla mini
			text('Which composer is known for combining ', 200, 200);
			text('minimalism and elements of pop music.', 200, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('A) Who is Julius Eastman',150,505);
				text('b) Who is Julian Westman',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Julius Eastman', 200, 505);
				image(JuliusEastmanImg,760,300,450,450);
			}
			break;
		case 8://Julia Perry:  Who was the black woman comPoser awarded the Guggenheim fellowship twice?
			text('Who was the black woman composer awarded ', 200, 200);
			text('the Guggenheim fellowship twice?', 200, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Jewel Berry',150,505);
				text('b) Who is Julia Perry',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Julia Perry', 250, 500);
				image(JuliaPerryImg,760,300,450,450);
			}
			break;
		case 9://Coleridge-Taylor Perkinson : Who was the AFRAM composer named after the afro-british composer Samuel CT
			text('Who was the AFRAM composer named after the', 150, 200);
			text('afro-british composer Samuel CT?', 150, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Coleridge-Taylor Perkinson',150,505);
				text('b) Who is Coleridge-Tyson Parker',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Coleridge-Taylor Perkinson', 50, 450);
				image(ColeridgeTaylorPerkinsonImg,900,300,450,450);
			}
			break;
		case 10://Florence price, who is 1st african american woman who had their music performed in a symphony orchestra?
			text('Who is the 1st african american woman who had', 100, 200);
			text('their music performed in a symphony orchestra?', 100, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who is Flora Prince',150,505);
				text('b) Who is Florence Price',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Florence Price', 150, 500);
				textSize(20);
				text('Check out the game OBF Fiddler Hero', 200, 600);
				text('Her song Adoration is featured there', 200, 630);
				image(FlorencePriceImg,700,300,450,450);
			}
			break;
		//=================================================================================================C3
		case 11://Orquesta Aragon : Who are the best charanga orchestra in Cuba during the 1950’s and 60’s?
			text('Who are the best charanga orchestra in Cuba', 100, 180);
			text(' during the 1950’s and 60’s?', 100, 240);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who are the Orquestion Argan',150,505);
				text('b) Who are the Orquesta Aragon',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				textSize(50);
				text('Who are the Orquesta Aragon', 100, 505);
				image(OrquestaAragonImg,800,200,450,550);
			}
			break;
		case 12://Clefclub Orchestra:  Who was the First African American orchestra in the U.S. (led by James Reese Europe) that served as a union/booking agency for Black musicians
			text('Who was the First African American orchestra in the', 100, 200);
			text('U.S. (led by James Reese Europe)that served as', 100, 260);
			text('a union/booking agency for Black musicians?', 100, 320);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who are the Clefclub Symphony',150,505);
				text('b) Who are the Clefclub Orchestra',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who is Clefclub Orchestra', 400, 400);
				image(ClefClubOrchestraImg,350,410,703,350);
			}
			break;
		case 13://Quartette Indigo:  World-renowned Regina Carter jump-started her career as a violinist with this string quartet, originally featuring Gayle Dixon and John Blake Jr. (violin),  Maxine Roach (viola) and Akua Dixon, cello and leader.
			text('World-renowned Regina Carter jump-started her career', 40, 180);
			text('as a violinist with this string quartet, originally featuring ', 40, 240);
			text(' Gayle Dixon and John Blake Jr. (violin), Maxine Roach', 40, 300);
			text('(viola) and Akua Dixon, cello and leader.', 40, 360);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who are the Quartet Indigo',150,505);
				text('b) Who are the Quartet purple',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who are the', 175, 500);
				text('Quartet Indigo', 175, 560);
				image(QuartetteIndigoImg,600,380,512,366);
			}
			break;
		case 14://Negro String Quartet: Which early 20th century string quartet performed mainly in churches, community organizations and college venues in New York City?
			text('Which early 20th century string quartet performed ', 100, 200);
			text('mainly in churches, community organizations and ', 100, 260);
			text('college venues in New York City?', 100, 320);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who are the Negro Jazz Group',150,505);
				text('b) Who are the Negro String Quartet',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who are the Negro String Quartet', 300, 430);
				image(NegroStringQuartetImg,450,475,505,270);
			}
			break;
		case 15://King & Cater Jazzing Orchestra : Who were the first jazz band from Houston, Texas to swing their music in a style never heard before
			text('Who were the first jazz band from Houston, Texas ', 140, 200);
			text('to swing their music in a style never heard before?', 140, 260);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) Who are the King & Cater Jazzing Orchestra',150,505);
				text('b) Who are the King & Carter Jam',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Who are', 250, 460);
				text('the King & Cater', 250, 520);
				text('Jazzing Orchestra', 250, 580);
				image(KingandcarterImg,700,300,500,450);
			}
			break;
		//=================================================================================================== C4
		case 16:
			text('What has 5 lines and 4 spaces?', 300, 300);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What is a Staff',150,505);
				text('b) What is a Barline',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What is a staff', 250, 525);
				image(staffImg,650,400,350,250);
			}
			break;
		case 17:
			text('What symbolizes the end of the piece?', 250, 300);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What is a double bar line',150,505);
				text('b) What is a staff',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What is a double bar line', 400, 400);
				image(doubleBarLineImage,400,450);
			}
			break;
		case 18:
			text('What is the musical alphabet?', 350, 250);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What are the letters C,D & E',150,505);
				text('b) What are the letters A-G',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What are the letters A-G', 400, 350);
				image(musicalAlphaImg,435,400,532,244);
			}
			break;
		case 19:
			text('How many beats does a halfnote equal?', 250, 250);

			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What are 2 beats',150,505);
				text('b) What is 1 beat',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What are 2 beats', 500, 350);
				image(halfNoteImg,600,400,225,225);
			}
			break;
		case 20:
			text('Identify these images', 450, 200);
			image(baseClefImg,750,250,200,200);
			image(trebleClefImg,400,250,200,200);
			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What are treble & base clef',150,505);
				text('b) What are trouble and bass clef',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('treble (gclef)      base (fclef)', 350, 500);

			}
			break;
		//============================================================================================C5
		case 21:
			text('What are the instruments in a string family ochestra?', 100, 200);
			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What are the Violin,Harp,Guitar,Kora',150,505);
				text('b) What are the Violin,Viola,Cello,Bass',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What are the Violin, Viola, Cello, Bass', 200, 300);
				image(stringFamilyImg,450,300,450,450);
			}
			break;
		case 22:
			text('Which string instrument has an end pin?', 200, 200);
			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What is a Cello',150,505);
				text('b) What is a Bass',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What is a Cello', 500, 300);
				image(CelloImg,500,350,400,400);
			}
			break;
		case 23:
			text('What instrument is best known in Africa?', 200, 200);
			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What is a Korra',150,505);
				text('b) What is a Kora',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('Kora', 575, 300);
				image(KoraImg,500,350,400,400);
			}
			break;
		case 24:
			text('Identify parts of the violin', 400, 200);
			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What are the Neck-rest, Back & Frets ',150,505);
				text('b) What are the Chin-rest, Body, Bridge',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What are ', 500, 300);
				image(violinPartsImg,400,350)
			}
			break;
		case 25:
			text('Which instrument uses the alto-clef?', 300, 200);
			//Multiple Choice part
			if(showChoice){
				ansInp.show();
				text('a) What is a Viola',150,505);
				text('b) What is a Violin',150,565);
			}

			if (!jeopardySong.isPlaying()) {
				ansInp.hide();
				showChoice = false;
				showAnswer = true;
				text('What is a Viola', 525, 280);
				image(violaImg,500,300,400,475);
			}
			break;
		default :
		//Nothing
	}
}

function instructions() {
	background(235, 81, 15);//red-orange
	//Displaying Title (Top Center)
	strokeWeight(0);
	textSize(50);
	textFont(PLAY_FAIR_DISPLAY_BOLD);
	fill(0);
	text("OBF String Jeopardy", (windowWidth / 2) - 220, 55);

	//Iymanni's Logo (Top-Right)
	fill(255);
	ellipse(46, 40, 105);
	fill(0);
	text("iah", 10, 60);

	//Border below Title
	fill(0);
	rect(0, 77, windowWidth, 30);


	//Raffle instructions
	textSize(50);
	textFont(PLAY_FAIR_DISPLAY_BOLD);
	fill(255);
	//text("Instructions", (windowWidth/2)-150,170);
	textFont(PLAY_FAIR_DISPLAY_BOLD);
	text("To Play For A Chance At The Raffle", 300, 170);

	textSize(40);
	//text("Keep track of your score!",450,310);
	text("Post a picture of you with your end score on the OBF thread.", 150, 370);
	text("The winner will be chosen from there.", 350, 430);

	textSize(50);
	text('Enjoy!', 600, 550);

	textSize(30);
	text('Enter Name to Start Playing', 500, 650);

}

function checkAnswer(){
	playerChoice = ansInp.value();

	switch(questionNum){
		case 1:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=100;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=100;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 2:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=200;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=200;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 3:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=300;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=300;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 4:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=400;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=400;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 5:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=500;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=500;
				alert('Wrong');
				gameCount++;
			}
			break;
		//================================================================================================
		case 6:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=100;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=100;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 7:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=200;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=200;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 8:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=300;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=300;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 9:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=400;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=400;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 10:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=500;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=500;
				alert('Wrong');
				gameCount++;
			}
			break;
		//================================================================================================
		case 11:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=100;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=100;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 12:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=200;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=200;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 13:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=300;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=300;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 14:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=400;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=400;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 15:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=500;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=500;
				alert('Wrong');
				gameCount++;
			}
			break;
		//================================================================================================
		case 16:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=100;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=100;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 17:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=200;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=200;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 18:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=300;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=300;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 19:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=400;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=400;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 20:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=500;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=500;
				alert('Wrong');
				gameCount++;
			}
			break;
		//================================================================================================
		case 21:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=100;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=100;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 22:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=200;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=200;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 23:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=300;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=300;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 24:
			jeopardySong.stop();
			if(playerChoice === 'b'){
				score+=400;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=400;
				alert('Wrong');
				gameCount++;
			}
			break;
		case 25:
			jeopardySong.stop();
			if(playerChoice === 'a'){
				score+=500;
				alert('Correct');
				gameCount++;
			}
			else{
				score-=500;
				alert('Wrong');
				gameCount++;
			}
			break;
		default:
		//nothing

	}

}