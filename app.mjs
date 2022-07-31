const textareaEl = document.getElementById("sentence");
const redactInputEl = document.getElementById("redact-words");
const symbolInputEl = document.getElementById("symbol");
const outputDiv = document.getElementById("output");
const redactBtn = document.getElementById("redact-btn");
const resetBtn = document.getElementById("reset-btn");
const milliSecDiv = document.getElementById("time-millisec");
const scannedWordDiv = document.getElementById("scanned-word");
const wordToRedactLengthDiv = document.getElementById("redact-num");
const scrambledWord = document.getElementById("scrambled-word");
const scrambledCharacter = document.getElementById("scrambled-character");
let message;
let wordToRedact;
let symbol;





function startApp() {
		redactBtn.addEventListener("click", () => {
			// Store the current time at the start of the function in a variable 
		const startTime = performance.now();
		
		let message = textareaEl.value.toLowerCase().split(" ");
		let wordToRedact = redactInputEl.value.toLowerCase().split(" ");
		let symbol = symbolInputEl.value;
		let scrambledWordCount = 0;
		let scrambledCharacterCount = 0;

		// Making * the default symbol if user leaves the field empty
		if(!symbol) symbol = "*";

		// Looping through each word user typed in to redact
			for(let text in message) {
				for(let word of wordToRedact) {
					if(message[text] == word) {
						message[text] = symbol.repeat(word.length);
						// console.log(message[text])
						scrambledWordCount++;
						scrambledCharacterCount += word.length;
						// console.log(scrambledWordCount);
						// console.log(scrambledCharacterCount);
					}
				}
			}
			
	
		//Display the message output
		outputDiv.innerText = message.join(" ");

		//Display the total number of scanned word
 		scannedWordDiv.innerText = message.length;
			
		//Display the word to redact length
 		wordToRedactLengthDiv.innerText = wordToRedact.length;
			
		//Display the scrambled word count output
		scrambledWord.innerText = scrambledWordCount;

		// Display the scrambled character count
		scrambledCharacter.innerText = scrambledCharacterCount;

		// Store the current time at the end of the function in a variable
		// const endTime = performance.now();

		// Calculate time difference
		const timeDifferenceInMilliSecs = (performance.now() - startTime).toFixed(1);
			
		// Display time in milliseconds
		milliSecDiv.innerText = timeDifferenceInMilliSecs;
		

		});
		
	
  };


resetBtn.addEventListener("click", resetApp);

function resetApp() {
	milliSecDiv.innerText = "";
	scrambledWord.innerText = "";
	scrambledCharacter.innerText = "";
	outputDiv.innerText = "";
	redactInputEl.value = "";
	textareaEl.value = "";
	symbolInputEl.value = "";
	scannedWordDiv.innerText = "";
	wordToRedactLengthDiv.innerText = ""; 
}







  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //