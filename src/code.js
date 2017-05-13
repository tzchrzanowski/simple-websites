	var API_KEY = "7734d5a7adb7511d990602dc0f2eadd1";
	var cel = false;
	var wd;

	function displayTemp(fTemp, c){
		if(c) return Math.round((fTemp - 32)*(5/9)) + " C";
		return Math.round(fTemp) +" F";
	}
	function render(wd, cel){
				var currentLocation = wd.name;
				var currentWeather = wd.weather[0].description;
				var currentTemperature = displayTemp(wd.main.temp, cel);
				var pressure = wd.main.pressure;
				var humidity = wd.main.humidity;
				var icon = wd.weather[0].icon;

				$("#location").html(currentLocation);
				$("#currentTemperature").html(currentTemperature);
				$("#currentWeather").html(currentWeather);
				$("#high-low").html("pressure "+ pressure + " | humidity " + humidity);
				
				var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
				// placing item as a first child of an element
				$("#currentTemperature").prepend('<img src=' + iconSrc + '>');
	}
	$(function(){
	// document ready function
		var loc;
		$.getJSON('http://ipinfo.io', function(d){
			loc =d.loc.split(",");

			$.getJSON("http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + loc[0] + "&lon=" + loc[1] + "&APPID=" + API_KEY, function(apiData){
				wd = apiData;
				
				render(apiData, cel);
				$('#toggle').click(function(){
					// changes the celcius back and forth with F
					cel = !cel;
					render(wd, cel);
				})
			})
		})
	})

