$("document").ready(function(){
    $("#pageNumber, #pageBack, #pageNext").hide();
    $("#showTable").on("click", ShowTable);

    function ShowTable(){
        $("#tab").toggle("fast","linear");
        $("#pageNumber, #pageBack, #pageNext").toggle();
        
    }

});