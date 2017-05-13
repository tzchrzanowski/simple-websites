$(document).ready(function(){
	
	function displayThis(){
		var searchField = $("#searchField").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchField + "&format=json&callback=?";
		
		$.ajax({
			type:"GET",
			url:url,
			async: false,
			dataType: "json", 
			success: function(data){
				$("#output").html("");
				for(var i=0; i<data[1].length; i++){
				$("#output").prepend("<li><a href=" + data[3][i]+">"+ data[1][i] + "</a><p>"+ data[2][i]+"</p></li>");
				}
			},
			error: function(errorMessage){
				alert("Error")
			}
		})
	}
	$("#searchField").on('keyup', function (e) {
    if (e.keyCode == 13) {
        displayThis();
    }
	});
	$("#searchWiki").click(function(){
		displayThis();
	});	
});