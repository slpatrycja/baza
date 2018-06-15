

var customersRepository = new CustomersRepository();
function search() {
    
    document.getElementById("resultbody").innerText = "";
    var tempTab = [];
    var text = document.getElementById("searchbox").value;
    var toCompare = text.toLowerCase();
    var data = customersRepository.get();
    for (i = 0; i < data.length; i++) {
        if ((data[i].nazwisko).toLowerCase().includes(toCompare) == true) {
            tempTab.push(data[i]);
        }

        else if ((data[i].imie).toLowerCase().includes(toCompare) == true) {
                    tempTab.push(data[i]);
        }
    }
    for (j = 0; j < tempTab.length; j++) {
        document.getElementById("resultbody").innerText += (j + 1) + '. ' + tempTab[j].imie + ' ' + tempTab[j].nazwisko + ', ' + tempTab[j].wiek + ' lat' + '\n';
    }
    
    document.getElementById("close").onclick = function () {
        document.getElementById("resultbody").innerText = "";
    };

}
function SortById(){

    var A = customersRepository.get();
        for(i=0;i<A.length;i++){
            for(j=i+1;j<A.length;j++){
            
            if(A[i].id > A[j].id){
                var temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }  
        }
        var table = document.getElementById("tbody");
        table.innerHTML = "";
        customersRepository.replace(A);
        
        Main('load',);
    }

function SortByName(){

    var A = customersRepository.get();
        for(i=0;i<A.length;i++){
            for(j=i+1;j<A.length;j++){
            
            if(A[i].imie.toLowerCase() > A[j].imie.toLowerCase()){
                var temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }  
        }
        var table = document.getElementById("tbody");
        table.innerHTML = "";
        customersRepository.replace(A);
        
        Main('load',);
    }

function SortByLastName(){

    var A = customersRepository.get();
        for(i=0;i<A.length;i++){
            for(j=i+1;j<A.length;j++){
            
            if(A[i].nazwisko.toLowerCase() > A[j].nazwisko.toLowerCase()){
                var temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }  
        }
        var table = document.getElementById("tbody");
        table.innerHTML = "";
        customersRepository.replace(A);
        
        Main('load',);
    }

