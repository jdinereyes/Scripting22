

function write(){
	// show output
	document.getElementById('output').style.display = "block";
	
	var arrayOfChoices = [] 
	
	var gensib1=document.querySelector('input[name=gender1]:checked').value;
	console.log(gensib1);
	
	var bname=document.getElementById('bsibname').value;
	bname = bname.toLowerCase().replace(/\b[a-z]/g, function(letter){
		return letter.toUpperCase();
	});
	console.log(bname);
	
	var gensib2=document.querySelector('input[name=gender2]:checked').value;
	console.log(gensib2);
	
	var lname = document.getElementById('lsibname').value;
	lname = lname.toLowerCase().replace(/\b[a-z]/g, function(letter){
		return letter.toUpperCase();
	});
	console.log(lname);
	
	var park=document.getElementById('park').value;
	park = park.toLowerCase().replace(/\b[a-z]/g, function(letter){
		return letter.toUpperCase();
	});
	console.log(park);
	
	var animalname=document.getElementById('aniname').value;
	console.log(animalname);
	
	var weekday=document.getElementById('weekday').value;
	weekday = weekday.toLowerCase().replace(/\b[a-z]/g, function(letter){
		return letter.toUpperCase();
	});
	console.log(weekday);

	var reaction=document.getElementById('reaction').value;
	console.log(reaction);
	
	var feeling=document.getElementById('feeling').value;
	console.log(feeling);
	
	var garment=document.getElementById('garment').value;
	console.log(garment)
	
	var estbl=document.getElementById('est').value;
	estbl = estbl.toLowerCase().replace(/\b[a-z]/g, function(letter){
		return letter.toUpperCase();
	});
	console.log(estbl);
	
	// ---> CHOICES THAT ARE INCLUDED IN THE ARRAY <--- //

	// FOR 'a' or 'an'
	// let's check the starting letter of 'animal1'
	
	// Let's add them to arrays so it'll be easier for later	

	// We don't need the value directly, instead we need the whole dom. So we don't need to put '.value' in the end.
	var animal1=document.getElementById('animal1');
	console.log(animal1);
	// Add it to array
	arrayOfChoices.push(animal1)

	var animal2=document.getElementById('animal2');
	console.log(animal2);
	// Add it to array
	arrayOfChoices.push(animal2)
	
	var animal3=document.getElementById('animal3');
	console.log(animal3);
	// Add it to array
	arrayOfChoices.push(animal3)
	
	var color1=document.getElementById('color1');
	console.log(color1);
	// Add it to array
	arrayOfChoices.push(color1)
	
	var color2=document.getElementById('color2');
	console.log(color2);
	// Add it to array
	arrayOfChoices.push(color2)
	
	var vehicle=document.getElementById('vehic');
	console.log(vehicle);
	// Add it to array
	arrayOfChoices.push(vehicle)
	
	var mediCon=document.getElementById('medCon');
	// Add it to array
	arrayOfChoices.push(mediCon)
	console.log(mediCon);	
	
	//changing "a" & "an" for vowels and consonants
	
	for(var i = 0; i < arrayOfChoices.length; i++){
		// 0 = first character
		// 1 = second character
		if(arrayOfChoices[i].value.charAt(0) == "a" || arrayOfChoices[i].value.charAt(0) == "A" || arrayOfChoices[i].value.charAt(0) == "e" ||
		arrayOfChoices[i].value.charAt(0) == "E" || arrayOfChoices[i].value.charAt(0) == "o" || arrayOfChoices[i].value.charAt(0) == "O" ||
		arrayOfChoices[i].value.charAt(0) == "u" || arrayOfChoices[i].value.charAt(0) == "U"){
			// if choice first letter is a vowel: Let's add `an` in the first part of the value:
			// so for example, My animal1 name is: Elephant it will be "an Elephant"
			arrayOfChoices[i].value = "an " + arrayOfChoices[i].value
		}else{
			// if consonant go with 'a' 
			arrayOfChoices[i].value = "a " + arrayOfChoices[i].value
		}
	}
	
	// since we don't put .value at the end when we assign it to a variable. 
	// in order to get access to the value of the dom we must put ".value" property at the end.
	console.log(animalname)

	//****Big Sibling***//
	var bsibgenHeShe, bsibgenheshes, bsibgenhisher, bsibgenhimherself,
		bsibgenbrosis, bsibgenboygirl, bsibgenbrothersister, bsibgenhimher

	//****Little Sibling***//
	var lsibgenHeShe, lsibgenheshes, lsibgenhisher, lsibgenhimherself,
		lsibgenbrosis, lsibgenboygirl, lsibgenbrothersister, lsibgenhimher

	//****Big Sibling***//
	if(gensib1=="sister"){ // If GENSIB1 EQUAL TO SISTER
		bsibgenHeShe = "She";
		bsibgenheshes="she";
		bsibgenhisher="her";
		bsibgenhimherself="herself";
		bsibgenbrosis="sis";
		bsibgenboygirl="girl";
		bsibgenbrothersister="sister";
		bsibgenhimher="her";
	}else{ // If GENSIB1 NOT EQUAL TO SISTER, // SINCE WE ONLY HAVE 2 CHOICES IT IS ASSUMED 'BROTHER'
		bsibgenHeShe = "He";
		bsibgenheshes="he";
		bsibgenhisher="his";
		bsibgenhimherself="himself";
		bsibgenbrosis="bro";
		bsibgenboygirl="boy";
		bsibgenbrothersister="brother";
		bsibgenhimher="him";		
	}
		

	//****Little Sibling***//
	if(gensib2=="sister"){ // If GENSIB2 EQUAL TO SISTER
		lsibgenHeShe = "She";
		lsibgenheshes="she";
		lsibgenhisher="her";
		lsibgenhimherself="herself";
		lsibgenbrosis="sis";
		lsibgenboygirl="girl";
		lsibgenbrothersister="sister";
		lsibgenhimher="her";
	}else{ // If GENSIB2 NOT EQUAL TO SISTER, // SINCE WE ONLY HAVE 2 CHOICES IT IS ASSUMED 'BROTHER'
		lsibgenHeShe = "He";
		lsibgenheshes="he";
		lsibgenhisher="his";
		lsibgenhimherself="himself";
		lsibgenbrosis="bro";
		lsibgenboygirl="boy";
		lsibgenbrothersister="brother";
		lsibgenhimher="him";
	}
		
	console.log(gensib1);

	
	//PUT YOUR IMAGE HERE
	document.getElementById('output').innerHTML = "<img class='img-fluid pb-5' src='images/park_img.jpg' alt='parkimage'>";
	

	//OUTPUT
	document.getElementById('output').innerHTML += "<h2>A Walk in the Park</h2>";
	document.getElementById('output').innerHTML += "<p>Mab Lib by Jeraldine</p>";
	document.getElementById('output').innerHTML += "<p>" + bname + " is living close to " + park + " Park, and " + bsibgenheshes + " likes to walk in the park every " + weekday+ ". " + bsibgenHeShe + " loves seeing everyone having fun and enjoying themselves under the sun. " + bsibgenHeShe + " is strolling with " + bsibgenhisher + " 4-year-old little " + lsibgenbrothersister + " named " + lname + " and "  + lsibgenheshes +  " is wearing " + animal1.value + " printed shirt and has " + color1.value + " pants with " + color2.value + " colored hat. " + bsibgenHeShe + " gave " + lsibgenhimher + " a popsicle and turned away from "  + lsibgenhimher + " to buy another one for " + bsibgenhimherself + ". " + lsibgenHeShe +  " liked it but when little " + lname + " tried to take a bite, " + animal2.value + " quickly charged towards " + lsibgenhimher + " and steal " + lsibgenhisher + " food and bumped into " + lsibgenhisher + " face. Little " + lname + " then felt a sting in " + lsibgenhisher + " mouth.</p>"; 
	
	document.getElementById('output').innerHTML += "<p>" + lsibgenHeShe +  " turned to " + lsibgenhisher + " " + bsibgenbrothersister + " crying with a bleeding mouth and since " + bname + " have a fear of blood and seeing the state of " + bsibgenhisher + " " + lsibgenbrothersister + " " + bsibgenheshes + " " + reaction + " and did not have the time to ask little " + lname + " about what happened. “Oh No! Somebody help me!” and before anyone could come to " + bsibgenhisher + " rescue,  " + bname + " felt " + feeling + " and fainted on the ground. " + animal3.value + " wearing " + garment + " was the first to hear the " + bsibgenboygirl + "'s cry and come to the rescue. After few minutes, the little " + lsibgenboygirl + " saw an old couple riding " + vehicle.value + " rushing towards their direction yelling “" + animalname + "!” “" + animalname + "!”. When the couple arrived at the bleeding little " + lname + "'s location, they scolded the animal, “don’t run like that again!” and that’s when they noticed the unfortunate situation of the siblings “Oh! What happened?” asked the couple. The " + lsibgenboygirl + "  told the couple that " + animal2.value + " charged towards " + lsibgenhimher + " and steal " + lsibgenhisher + " popsicle then hit  " + lsibgenhisher + " face causing " + lsibgenhisher +  " mouth to bleed, and " + lsibgenhisher + " " + bsibgenbrothersister + " was afraid of the blood but before " + bsibgenheshes + " fainted, " + bsibgenheshes + " cried for help and that’s when " + animal3.value + " come rushing to them. </p>"; 
	
	document.getElementById('output').innerHTML += "<p> The couple was nice enough to drive the siblings to the " + estbl + " Hospital and admitted them to the hospital. " + bname + " turns out to have " + mediCon.value + " and little " + lname + " just lost " + lsibgenhisher + " baby teeth. At " + bname + "'s hospital room they are all waiting for " + bsibgenhimher + " to wake up, and in a few minutes, " + bsibgenheshes + " opened " + bsibgenhisher + " eyes and the first thing that " + bsibgenheshes + " saw was " + animal3.value + " wearing " + garment + " carried by the old couple and " + bsibgenhisher + " " + lsibgenbrothersister + " sitting in front of " + bsibgenhimher + " with a wide grin. “Look! Look! big " + bsibgenbrosis + "! I just lost my baby tooth!” and the little " + lsibgenboygirl + " showed " + lsibgenhisher + " bloody gums to " + lsibgenhisher + " " + bsibgenbrothersister + " that made " + bsibgenhimher + " faint again.</p>";

}