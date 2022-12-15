// JavaScript Document

$('#avatarModal').modal('show');
var globalCanvas;


//initializing a variable - this variable is an OBJECT
//the properties will hold the filename of the image we are going to show
var character={head:"", eyebrow:"", eyes:"", nose:"", lips:"", beard:"", mustache:"", acc:"", headpc:""};

/************************
HEAD COLORS
************************/
var maleHead1Colors = ["#eddcab", "#92603b", "#524242"];
console.log(maleHead1Colors);
var maleHead2Colors = ["#eddcab", "#92603b", "#524242"];
console.log(maleHead2Colors);
var maleHead3Colors = ["#eddcab", "#92603b", "#524242"];
console.log(maleHead3Colors);
var maleHead4Colors = ["#eddcab", "#92603b", "#524242"];
console.log(maleHead4Colors);
var femaleHead1Colors = ["#eddcab", "#92603b", "#524242"];
console.log(femaleHead1Colors);
var femaleHead2Colors = ["#eddcab", "#92603b", "#524242"];
console.log(femaleHead2Colors);
var femaleHead3Colors = ["#eddcab", "#92603b", "#524242"];
console.log(femaleHead3Colors);
var femaleHead4Colors = ["#eddcab", "#92603b", "#524242"];
console.log(femaleHead4Colors);
var color_options = document.getElementById('color-options');
console.log(color_options);

/************************
HEAD COLOR VARIATIONS
************************/
function generateColors(id){
	// color_options reset
	if(color_options.childNodes.length > 0){ color_options.innerHTML = "" }

	if(id == "malehead1"){
		maleHead1Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_1.png";
					bodyBuilder();
				}
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_1.1.png";
					bodyBuilder();
				}	
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_1.2.png";
					bodyBuilder();
				}				
			}
			color_options.appendChild(colorDiv)
		})

	}else if(id == "malehead2"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_2.png";
					bodyBuilder();
				}
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_2.1.png";
					bodyBuilder();
				}		
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_2.2.png";
					bodyBuilder();
				}				
			}
			color_options.appendChild(colorDiv);
		})
	}else if(id == "malehead3"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_3.png";
					bodyBuilder();
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_3.1.png";
					bodyBuilder();
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_3.2.png";
					bodyBuilder();
				}				
			}
			color_options.appendChild(colorDiv);
		})
	}else if(id == "malehead4"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_4.png";
					bodyBuilder();
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_4.1.png";
					bodyBuilder();
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_4.2.png";
					bodyBuilder();
				}				
			}
			color_options.appendChild(colorDiv);
		})
	}else if(id == "femalehead4"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_4.png";
					bodyBuilder();
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_4.1.png";
					bodyBuilder();
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_4.2.png";
					bodyBuilder();
				}				
			}
			color_options.appendChild(colorDiv);
		})
	}else if(id == "femalehead3"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_3.png";
					bodyBuilder();
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_3.1.png";
					bodyBuilder();
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_3.2.png";
					bodyBuilder();
				}				
			}
			color_options.appendChild(colorDiv);
		})
	}else if(id == "femalehead2"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_2.png";
					bodyBuilder();
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_2.1.png";
					bodyBuilder();
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_2.2.png";
					bodyBuilder();
				}				
			}
			color_options.appendChild(colorDiv);
		})
	}else if(id == "femalehead1"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div');
			colorDiv.style.width = "32px";
			colorDiv.style.height = "32px";
			colorDiv.style.backgroundColor = color;
			colorDiv.style.display = 'inline-block';
			colorDiv.style.margin = '5px';
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_1.png";
					bodyBuilder()
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_1.1.png";
					bodyBuilder()
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_1.2.png";
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}
	
}







//this function will set the face property
function setHead(base, id){
	// add select indication //
	var head = document.getElementById(id);
	generateColors(id)
	// this head already selected ?
	if(head.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.head = "";
		// hide the colors
		color_options.innerHTML = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		head.setAttribute('selected', false);
		// remove the cute heart icon
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	head.setAttribute('selected', true);
	character.head=base;
	console.log(character.head);
	//run the body builder function
	bodyBuilder();
}

function setEyebrow(eyebrow, id){
	// add select indication //
	var eyebrowImg = document.getElementById(id);

	// this head already selected ?
	if(eyebrowImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.eyebrow = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		eyebrowImg.setAttribute('selected', false);

		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 

	eyebrowImg.setAttribute('selected', true);
	character.eyebrow=eyebrow;
	console.log(character.eyebrow);
	//run the body builder function
	bodyBuilder();
}

function setEyes(eyes, id){
	// add select indication //
	var eyesImg = document.getElementById(id);

	// this head already selected ?
	if(eyesImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.eyes = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		eyesImg.setAttribute('selected', false);
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	eyesImg.setAttribute('selected', true);
	character.eyes=eyes;
	console.log(character.eyes);
	//run the body builder function
	bodyBuilder();
}


function setNose(nose, id){
	// add select indication //
	var noseImg = document.getElementById(id);

	// this head already selected ?
	if(noseImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.nose = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		noseImg.setAttribute('selected', false);
		// remove the cute heart icon

		return
	}

	noseImg.setAttribute('selected', true);
	character.nose=nose;
	console.log(character.nose);

	//run the body builder function
	bodyBuilder();
}

function setLips(lips, id){
	// add select indication //
	var lipsImg = document.getElementById(id);

	// this head already selected ?
	if(lipsImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.lips = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		lipsImg.setAttribute('selected', false);
		// remove the cute heart icon
		return
	}

	lipsImg.setAttribute('selected', true);
	character.lips=lips;
	console.log(character.lips);
	//run the body builder function
	bodyBuilder();
}

function setBeard(beard, id){
	// add select indication //
	var beardImg = document.getElementById(id);

	// this head already selected ?
	if(beardImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.beard = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		beardImg.setAttribute('selected', false);

		return
	}

	beardImg.setAttribute('selected', true);
	character.beard=beard;
	console.log(character.beard);

	//run the body builder function
	bodyBuilder();
}

function setMust(mustache, id){
	// add select indication //
	var mustImg = document.getElementById(id);

	// this head already selected ?
	if(mustImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.mustache = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		mustImg.setAttribute('selected', false);
		return
	}

	mustImg.setAttribute('selected', true);
	character.mustache=mustache;
	console.log(character.mustache);

	//run the body builder function
	bodyBuilder();
}

function setAcc(acc, id){
	// add select indication //
	var accImg = document.getElementById(id);

	// this head already selected ?
	if(accImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.acc = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		accImg.setAttribute('selected', false);

		return
	}

	accImg.setAttribute('selected', true);
	character.acc=acc;
	console.log(character.acc);

	//run the body builder function
	bodyBuilder();
}

function setHeadpc(headpc, id){
	// add select indication //
	var headpcImg = document.getElementById(id);

	// this head already selected ?
	if(headpcImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.headpc = "";
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		headpcImg.setAttribute('selected', false);

		return
	}

	headpcImg.setAttribute('selected', true);
	character.headpc=headpc;
	console.log(character.headpc);
	//run the body builder function
	bodyBuilder();
}

function setBG(bg, id){
	// add select indication //
	var builderCointainer=document.getElementsByClassName('result');
	var bgImg = document.getElementById(id);
	console.log(bg)

	// this head already selected ?
	if(bgImg.getAttribute('selected') == 'true'){
		// remove the attribute that this head is already selected
		bgImg.setAttribute('selected', false);

		return
	}
	
	builderCointainer[0].style.backgroundImage="url('images/avatar/bg/" + bg + "')";

	bgImg.setAttribute('selected', true);
}


//this function will set the glasses property
function bodyBuilder(){
	
	if(character.head!=""){
		document.getElementById('head').innerHTML="<img class='img-fluid' src='images/avatar/head/"+ character.head +"' alt='head'>";
	}else{
		document.getElementById('head').innerHTML="";
	}
	
	if(character.eyebrow!=""){
		document.getElementById('eyebrow').innerHTML="<img class='img-fluid' src='images/avatar/eyebrow/"+ character.eyebrow +"' alt='eyebrow'>";
	}else{
		document.getElementById('eyebrow').innerHTML="";
	}

	if(character.eyes!=""){
		document.getElementById('eyes').innerHTML="<img class='img-fluid' src='images/avatar/eyes/"+ character.eyes +"' alt='eyes'>";
	}else{
		document.getElementById('eyes').innerHTML="";
	}
	
	if(character.nose!=""){
		document.getElementById('nose').innerHTML="<img class='img-fluid' src='images/avatar/nose/"+ character.nose +"' alt='nose'>";
	}else{
		document.getElementById('nose').innerHTML="";
	}
	
	if(character.lips!=""){
		document.getElementById('lips').innerHTML="<img class='img-fluid' src='images/avatar/lips/"+ character.lips +"' alt='lips'>";
	}else{
		document.getElementById('lips').innerHTML="";
	}
	
	if(character.beard!=""){
		document.getElementById('beard').innerHTML="<img class='img-fluid' src='images/avatar/beard/"+ character.beard +"' alt='beard'>";
	}else{
		document.getElementById('beard').innerHTML="";
	}
	
	if(character.mustache!=""){
		document.getElementById('mustache').innerHTML="<img class='img-fluid' src='images/avatar/mustache/"+ character.mustache +"' alt='mustache'>";
	}else{
		document.getElementById('mustache').innerHTML="";
	}
	
	if(character.acc!=""){
		document.getElementById('acc').innerHTML="<img class='img-fluid' src='images/avatar/acc/"+ character.acc +"' alt='acc'>";
	}else{
		document.getElementById('acc').innerHTML="";
	}
	
	if(character.headpc!=""){
		document.getElementById('headpc').innerHTML="<img class='img-fluid' src='images/avatar/headpc/"+ character.headpc +"' alt='headpc'>";
	}else{
		document.getElementById('headpc').innerHTML="";
	}
}

function showAvatar(){
		color_options.innerHTML=""
		html2canvas(document.querySelector(".result")).then(canvas => {
			//console.log(canvas.toDataURL())
			document.getElementById('showcase').innerHTML="";
			document.getElementById('showcase').appendChild(canvas);
			//saveAs(canvas.toDataURL(), 'canvas.png');
		});

	$('#showcaseModal').modal('show');
}




/************************
AUDIO
************************/

function muteAudio(){
	var audiobutton=document.getElementById('audiobtn');
	console.log(audiobutton)
	
	if(document.getElementById('audio').muted == true){
		audiobutton.src='images/unmute.png';
		document.getElementById('audio').muted = false;
	}else{
		audiobutton.src='images/mute.png';
		document.getElementById('audio').muted = true;
	}	
}


/************************
CAROUSEL SELECTION
************************/

$('.eye-vessel-child').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
});

$('.lips-vessel-child').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
});

$('.acc-vessel-child').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
});

$('.mustache-vessel-child').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
});

$('.beard-vessel-child').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
});
