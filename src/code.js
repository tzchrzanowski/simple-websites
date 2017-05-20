$(document).ready(function (){
//-------------------------------------------------------
// top center navbar icons

    document.getElementById('iconMain1').addEventListener("mouseenter",function(){
			this.style.background = "black";
            $("#circle1").show();
	});
    document.getElementById('iconMain1').addEventListener("mouseleave",function(){
			this.style.background = "#13bdd2";
            $("#circle1").hide();
	});
    // analyse
    document.getElementById('iconMain2').addEventListener("mouseenter",function(){
			this.style.background = "black";
            $("#circle2").show();
	});
    document.getElementById('iconMain2').addEventListener("mouseleave",function(){
			this.style.background = "#13bdd2";
            $("#circle2").hide();
	});
    // plan
    document.getElementById('iconMain3').addEventListener("mouseenter",function(){
			this.style.background = "black";
            $("#circle3").show();
	});
    document.getElementById('iconMain3').addEventListener("mouseleave",function(){
			this.style.background = "#13bdd2";
            $("#circle3").hide();
	});
    // earn
    document.getElementById('iconMain4').addEventListener("mouseenter",function(){
			this.style.background = "black";
            $("#circle4").show();
	});
    document.getElementById('iconMain4').addEventListener("mouseleave",function(){
			this.style.background = "#13bdd2";
            $("#circle4").hide();
	});
//-------------------------------------------------------
    // bottom left blocks
    // wallet
    document.getElementById('walletBox').addEventListener("mouseenter",function(){
			this.style.background = "#13bdd2";
            $('.fa-inbox').css({ "color":"white"});
	});
    document.getElementById('walletBox').addEventListener("mouseleave",function(){
			this.style.background = "white";
             $('.fa-inbox').css({ "color":"#B2B2B2"});
	});
    // deposits
    document.getElementById('depositsBox').addEventListener("mouseenter",function(){
		this.style.background = "#13bdd2";
        $('.fa-money').css({ "color":"white"});
	});
    document.getElementById('depositsBox').addEventListener("mouseleave",function(){
			this.style.background = "white";
             $('.fa-money').css({ "color":"#B2B2B2"});
	});
// accounts
    document.getElementById('accountsBox').addEventListener("mouseenter",function(){
			this.style.background = "#13bdd2";
            $('.fa-university').css({ "color":"white"});
	});
    document.getElementById('accountsBox').addEventListener("mouseleave",function(){
			this.style.background = "white";
             $('.fa-university').css({ "color":"#B2B2B2"});
	});
    // funds
        document.getElementById('fundsBox').addEventListener("mouseenter",function(){
			this.style.background = "#13bdd2";
            $('.fa-bar-chart').css({ "color":"white"});
	});
    document.getElementById('fundsBox').addEventListener("mouseleave",function(){
			this.style.background = "white";
             $('.fa-bar-chart').css({ "color":"#B2B2B2"});
	});
    // bank loans
        document.getElementById('bankLoansBox').addEventListener("mouseenter",function(){
			this.style.background = "#13bdd2";
            $('.fa-hand-o-right').css({ "color":"white"});
	});
    document.getElementById('bankLoansBox').addEventListener("mouseleave",function(){
			this.style.background = "white";
             $('.fa-hand-o-right').css({ "color":"#B2B2B2"});
	});


});

