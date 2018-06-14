console.log("working");

// easy going
// 1

// for (let i = 1; i < 21; i++) {
// 	console.log(i);
// }

// get even
// 1

// for (let i = 0; i < 201; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i)

// 	}

// }

// excited kitten
//  const phrase = ["...human...why you taking pictures of me?...the catnip made me do it", "...why does the red dot always get away..."];
// let randomPhrase = phrase[Math.floor(Math.random() * phrase.length)];

// for (let i = 0; i < 20; i++) {
// 	console.log("Love me, pet me! HSSSSSS!");
// 	if (i % 2 === 0) {
// 		console.log(randomPhrase);

		
// 	}
// }

// fizz buzz

// for (let i = 1; i < 101; i++ ) {
	
// 	if (i % 3 === 0 && i % 5 === 0 ) {
	
// 		console.log("FizzBuzz");
	
// 	} else if (i % 3 === 0) {
		
// 		console.log("Fizz");
	
// 	} else if (i % 5 === 0) {
		
// 		console.log("Buzz");
	
// 	} else {
// 		console.log(i);
// 	}

// }

// Getting to know you

// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

// thom[0] = "Gameboy";
// karolin[1] = 17;
// matt[2] = "Gotham City";
// kristyn.pop();
// kristyn.push("Brooklyn");

// console.log(thom);
// console.log(karolin);
// console.log(kristyn);
// console.log(matt);

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let i = 0; i < ninjaTurtles.length; i++) {
	
// 	console.log(ninjaTurtles[i].toUpperCase());

// }

// Return of the closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

let kristynsShoe = kristynsCloset.shift();

thomsCloset[2].push(kristynsShoe);

// let kristynOutfitArr = [];

// let randomOutfit = kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)];

// console.log(randomOutfit);


// Still trying to figure this one out
// function outfitGenerator (item1, item2, item3) {
	
// 	kristynOutfitArr.push(arguments[0]);
// 	kristynOutfitArr.push(arguments[1]);
// 	kristynOutfitArr.push(arguments[2]);

// }


//  let outfit1 = outfitGenerator(kristynsCloset[1], kristynsCloset[2], kristynsCloset[3]);
//  let outfit2 = outfitGenerator(kristynsCloset[0], kristynsCloset[4], kristynsCloset[5]);
//  let outfit3 = outfitGenerator(kristynsCloset[1], kristynsCloset[3], kristynsCloset[4]);
//  console.log(outfit1);

// dirty laundry

for (let i = 0; i < kristynsCloset.length; i++) {
	console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

for (let i = 0; i < thomsCloset[0].length; i++) {
	
	console.log(thomsCloset[0][i]);
	
}

for (let i = 0; i < thomsCloset[1].length; i++) {
	
	console.log(thomsCloset[1][i]);
	
}

for (let i = 0; i < thomsCloset[2].length; i++) {
	
	console.log(thomsCloset[2][i]);
	
}


















