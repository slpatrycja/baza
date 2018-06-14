


document.getElementById("search").onclick = search;
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
    }
    for (j = 0; j < tempTab.length; j++) {
        document.getElementById("resultbody").innerText += (j + 1) + '. ' + tempTab[j].imie + ' ' + tempTab[j].nazwisko + ', ' + tempTab[j].wiek + ' lat' + '\n';
    }
    
    document.getElementById("close").onclick = function () {
        document.getElementById("resultbody").innerText = "";
    };



}
