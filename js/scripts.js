	
	//Menu Toggle
    var winW = $(window).width();
	if (winW >= 768) {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("mini", 0);
            $("#wrapper").toggleClass("mini-sidebar", 0);
            $(this).toggleClass("expand", 0);
            //$('.sidebar-top .user .info').slideToggle(0);
        });
    } else if (winW < 845 && winW > 392) {
        $("#sidebar-wrapper").addClass("mini");
        $("#wrapper").addClass("mini-sidebar");
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("none", 0);
            $("#wrapper").toggleClass("no-sidebar", 0);
            $(this).toggleClass("expand", 0);
        });
    } else if (winW <= 392) {
        $("#sidebar-wrapper").removeClass('mini');
        $("#sidebar-wrapper").addClass("none");
        $("#wrapper").removeClass('mini-sidebar');
        $("#wrapper").addClass("no-sidebar");
        $('#menu-toggle').addClass('expand');

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("none", 0);
            $("#wrapper").toggleClass("no-sidebar", 0);
            $(this).toggleClass("expand", 0);
        });
    }


    $(window).resize(function() {
        var winW = $(window).width();
        if (winW < 845) {
            $("#sidebar-wrapper").addClass("mini");
            $("#wrapper").addClass("mini-sidebar");
        } else if (winW >= 845) {
            $("#sidebar-wrapper").removeClass("mini");
            $("#wrapper").removeClass("mini-sidebar");
        }
    })




    

	var winH = $(window).height();
    var pcwH = $('#page-content-wrapper').outerHeight();

    if (pcwH < winH) {
    	$('#footer').addClass('fixed');
    } else {
    	$('#footer').removeClass('fixed');
    }

    $('#page-content-wrapper').resize(function() {
    	var winH = $(window).height();
    	var pcwH = $('#page-content-wrapper').outerHeight();

    	if (pcwH < winH) {
    		$('#footer').addClass('fixed');
    	} else {
    		$('#footer').removeClass('fixed');
    	}
    })




    //CUSTOM SELECT
$(".custom-select").each(function(){
    $(this).wrap("<span class='select-wrapper'></span>");
    $(this).after("<span class='holder'></span>");
});
$(".custom-select").change(function(){
    var selectedOption = $(this).find(":selected").text();
    $(this).next(".holder").text(selectedOption);
}).trigger('change');