$("document").ready(function(){

    $("#toggleMe").on("click",TableFunction);

    function TableFunction(){
        $("#tab").toggle("fast","linear");
        
    }
});