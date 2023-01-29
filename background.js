$(function() {
    var Arr = new Array();
    var height = $('div.wrapper2').outerHeight(true);

        $('div.colom').each(function(i) {
            Arr[i] = $(this).offset().top;
            console.log(Arr);
        });

        var current = -1;
        var moveFlug = false;
        $(window).scroll(function() {
            for(var i = Arr.length-1; i >=0; i--){
                if($(window).scrollTop() > Arr[i] - 100) {
                    color(i);
                    console.log(i);
                    break;
                }
            }
        });
    
        function color(num){
            var coln = 0;
            if(num != current && moveFlug == false){
                if(num === 0){
                    document.querySelector(".wrapper2").style.backgroundColor = "#AAE3E2";}
                if(num === 1){
                    document.querySelector(".wrapper2").style.backgroundColor = "#D9ACF5";}
                if(num === 2){
                    document.querySelector(".wrapper2").style.backgroundColor = "#FFCEFE";}
                if(num === 3){
                    document.querySelector(".wrapper2").style.backgroundColor = "#FDEBED";}        
                current = num;
                console.log('a');
            }
        }
});



