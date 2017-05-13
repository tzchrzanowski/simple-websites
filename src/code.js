
$(document).ready(function(){
	var randomQuote;
	var randomAuthor;
	var randomNumber;
	getQuote();
	function getQuote(){
		var quotes = [
		 "We all make choices in life, but in the end our choices make us.",
		 "Get over here!", 
		 "What is better? To be born good or to overcome your evil nature through great effort?",
		 "The right man in the wrong place can make all the difference in the world.",
		 "Bring me a bucket, and I'll show you a bucket!",
		 "No gods or kings. Only man.",
		 "It’s dangerous to go alone, take this!",
		];
		var authors = [
		 "Andrew Ryan, Bioshock",
		 "Scorpion, Mortal Kombat",
		 "Elder Scrolls V: Skyrim",
		 "G-Man, Half-Life 2",
		 "Psycho, Borderlands 2",
		 "Andrew Ryan, Bioshock",
		 "Old Man, The Legend of Zelda"
		];
		
		randomNumber = Math.floor(Math.random()*quotes.length);
		randomQuote = quotes[randomNumber];
		randomAuthor = authors[randomNumber];
		
		$(".quote").text(randomQuote);
		$(".author").text(randomAuthor);
	}
	$("#newQuote").on("click", function(){
		getQuote();
	});
	
	$('#tweet').on("click", function(){
		window.open("https://twitter.com/intent/tweet?text="+ randomQuote +" "+ randomAuthor)
	});
}) 

