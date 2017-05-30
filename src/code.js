$(document).ready(function (){
//---------------------------------------------------------------------

	// synchronous function that will handle asynchronous generator:
	function run(genFunc){
		const genObject= genFunc(); //creating a generator object

		function iterate(iteration){ //recursive function to iterate through promises
			if(iteration.done) //stop iterating when done and return the final value wrapped in a promise
				return Promise.resolve(iteration.value);
			return Promise.resolve(iteration.value) //returns a promise with its then() and catch() methods filled
			.then(x => iterate(genObject.next(x))) //calls recursive function on the next value to be iterated
			.catch(x => iterate(genObject.throw(x))); //throws an error if a rejection is encountered
		}

		try {
			document.getElementById("loading").style.visibility = "visible"; // loading message show:
			return iterate(genObject.next()); //starts the recursive loop
		} catch (ex) {
			document.getElementById("loading").style.visibility = "hidden"; // hide the loading message:
			return Promise.reject(ex); //returns a rejected promise if an exception is caught
		}
	}
    function *gen(){
        $(".tab1a").css( "background-color", "rgba(255,255,255,0");
        $(".tab1b").css( "background-color", "rgba(255,255,255,0");

        $(".tab2a").css( "background-color", "rgba(255,255,255,0");
        $(".tab2b").css( "background-color", "rgba(255,255,255,0");

        $(".tab3a").css( "background-color", "rgba(255,255,255,0");
        $(".tab3b").css( "background-color", "rgba(255,255,255,0");

        $(".tab4a").css( "background-color", "rgba(255,255,255,0");
        $(".tab4b").css( "background-color", "rgba(255,255,255,0");

		//fetch the ship 1
		var shipResponse1 = yield fetch("http://swapi.co/api/starships/" + document.getElementById("exampleSelect1").value) + "/";
		var ship1json = yield shipResponse1.json();
		//display the data
        var pas1 = ship1json.passengers;
        var name1 = ship1json.name;
        var cost1 = ship1json.cost_in_credits;
        var speed1 = ship1json.max_atmosphering_speed;
        var cargo1 = ship1json.cargo_capacity;
		document.getElementById("passengers1").innerHTML = pas1;
        document.getElementById("name1").innerHTML = name1;
        document.getElementById("cost1").innerHTML = cost1 + " credits";
        document.getElementById("speed1").innerHTML = speed1;
        document.getElementById("cargoSize1").innerHTML = cargo1;
		//fetch the ship 2
		var shipResponse2 = yield fetch("http://swapi.co/api/starships/" + document.getElementById("exampleSelect2").value) + "/";
		var ship2json = yield shipResponse2.json();
		//display the data
        var pas2 = ship2json.passengers;
        var name2 = ship2json.name;
        var cost2 = ship2json.cost_in_credits;
        var speed2 = ship2json.max_atmosphering_speed;
        var cargo2 = ship2json.cargo_capacity;
		document.getElementById("passengers2").innerHTML = pas2;
        document.getElementById("name2").innerHTML = name2;
        document.getElementById("cost2").innerHTML = cost2 + " credits";
        document.getElementById("speed2").innerHTML = speed2;
        document.getElementById("cargoSize2").innerHTML = cargo2;       

		document.getElementById("loading").style.visibility = "hidden"; // hide the loading message:

        // change colors after load:
        var redC = "rgba(255, 51, 51, 0.3)"
        if(parseInt(cost1) > parseInt(cost2)) $(".tab1a").css( "background-color", redC); 
        else if( parseInt(cost1) === parseInt(cost2)){}
        else $(".tab1b").css( "background-color", redC); 

        if(parseInt(speed1) > parseInt(speed2)) $(".tab2a").css( "background-color", redC);  
        else if( parseInt(speed1) === parseInt(speed2)){}
        else $(".tab2b").css( "background-color", redC); 
        
        if(parseInt(cargo1) > parseInt(cargo2)) $(".tab3a").css( "background-color", redC); 
        else if( parseInt(cargo1) === parseInt(cargo2)){} 
        else $(".tab3b").css( "background-color", redC); 

        if(parseInt(pas1) > parseInt(pas2)) $(".tab4a").css( "background-color", redC); 
        else if( parseInt(pas1) === parseInt(pas2)){}
        else $(".tab4b").css( "background-color", redC); 
    }
    	// search on click:
	document.getElementById("button").addEventListener('click',function(){
		run(gen).catch(function(err){
			alert(err.message);
			document.getElementById("loading").style.visibility = "hidden"; // hide the loading message:
		});
	})

//---------------------------------------------------------------------
});

