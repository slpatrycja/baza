$("document").ready(function(){
    $("#pageNumber, #pageBack, #pageNext").hide();
    $("#showTable").on("click", ShowTable);

    function ShowTable(){
        $("#tab").fadeIn();
        $("#pageNumber, #pageBack, #pageNext").toggle();
        
    }

});