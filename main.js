window.onload = Main;
function Main() {
    document.getElementById("search").onclick = search;
    document.getElementById("SortByNameButton").onclick = SortByName;
    document.getElementById("SortByLastNameButton").onclick = SortByLastName;
    var loadId;
    var addId = -1;
    document.getElementById("but").onclick = add;
    var table = document.getElementById("tbody");
    var tab = document.getElementById("tab");
    var customersRepository = new CustomersRepository();

    load();
    function clearTable(){
        table.innerHTML = ""; 
    }
    function makeRow(imie, nazwisko, wiek, plec, del, edit, save) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.appendChild(imie);
        cell2.appendChild(nazwisko);
        cell3.appendChild(wiek);
        cell4.appendChild(plec);
        cell5.appendChild(del);
        cell6.appendChild(edit);
        cell7.appendChild(save);
    }

    function clearInputs() {
        document.getElementById("name").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("age").value = "";
    }
    function edit(event) {

        var table = document.getElementById("tbody");
        var row = event.target.parentElement.parentElement;
        row.cells[0].innerHTML = "<input type='text' id='changedname'>";
        row.cells[1].innerHTML = "<input type='text'id='changedlast'>";
        row.cells[2].innerHTML = "<input type='number'id='changedage'>";
        row.cells[3].innerHTML = " <select id='changedgender'><option value='Kobieta'>Kobieta</option> <option value='Mezczyzna'>Mezczyzna</option> </select></br>";
    }

    function save() {
        var chName = document.getElementById("changedname").value;
        var chLast = document.getElementById("changedlast").value;
        var chAge = document.getElementById("changedage").value;
        var chGender = document.getElementById("changedgender").value;
        var editedCustomer = new Customer(chName, chLast, chAge, chGender, eval(event.target.id));
        customersRepository.update(editedCustomer, eval(event.target.id));
        var chImie = document.createTextNode(editedCustomer.imie);
        var chNazwisko = document.createTextNode(editedCustomer.nazwisko);
        var chWiek = document.createTextNode(editedCustomer.wiek);
        var chPlec = document.createTextNode(editedCustomer.plec);
        var row = event.target.parentElement.parentElement;
        row.cells[0].innerHTML = "";
        row.cells[1].innerHTML = "";
        row.cells[2].innerHTML = "";
        row.cells[3].innerHTML = "";
        row.cells[0].appendChild(chImie);
        row.cells[1].appendChild(chNazwisko);
        row.cells[2].appendChild(chWiek);
        row.cells[3].appendChild(chPlec);

        btnEdit.innerText = "Edytuj";
        btnEdit.onclick = edit;
        return id;


    }

    function load() {
        var tabObj = customersRepository.get();
        if (tabObj != null) {
            
            for (i = 0; i < tabObj.length; i++) {
                //id += 1;
                var deltt = document.createTextNode("Usuń");
                var btnDel = document.createElement("button");
                btnDel.appendChild(deltt);
                btnDel.setAttribute("id", tabObj[i].id);
                btnDel.setAttribute("class", "btn btn-danger");
                btnDel.onclick = del;

                var savet = document.createTextNode("Zapisz zmiany");
                var btnSave = document.createElement("button");
                btnSave.appendChild(savet);
                btnSave.setAttribute("id", tabObj[i].id);
                btnSave.setAttribute("class", "btn btn-success");
                btnSave.addEventListener("click", save);

                var editt = document.createTextNode("Edytuj");
                var btnEdit = document.createElement("button");
                btnEdit.appendChild(editt);
                btnEdit.setAttribute("id", tabObj[i].id);
                btnEdit.setAttribute("class", "btn btn-warning");
                btnEdit.onclick = edit;

                var imie = document.createTextNode(tabObj[i].imie);
                var nazwisko = document.createTextNode(tabObj[i].nazwisko);
                var wiek = document.createTextNode(tabObj[i].wiek);
                var plec = document.createTextNode(tabObj[i].plec);
            
                makeRow(imie, nazwisko, wiek, plec, btnDel, btnEdit, btnSave);
            }
            addId = tabObj[tabObj.length - 1].id;
            return addId;
        }
    }

    function add() {
        var table = document.getElementById("tbody");
        addId += 1;

        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var customer = new Customer(name, lastname, age, gender, addId);

        var deltt = document.createTextNode("Usun");
        var btnDel = document.createElement("button");
        btnDel.appendChild(deltt);
        btnDel.setAttribute("id", addId);
        btnDel.setAttribute("class", "btn btn-danger");
        btnDel.onclick = del;

        var editt = document.createTextNode("Edytuj");
        var btnEdit = document.createElement("button");
        btnEdit.appendChild(editt);
        btnEdit.setAttribute("id", addId);
        btnEdit.setAttribute("class", "btn btn-warning");
        btnEdit.onclick = edit;

        var savet = document.createTextNode("Zapisz zmiany");
        var btnSave = document.createElement("button");
        btnSave.appendChild(savet);
        btnSave.setAttribute("id", addId);
        btnSave.setAttribute("class", "btn btn-success");
        btnSave.addEventListener("click", save);

        var imie = document.createTextNode(customer.imie);
        var nazwisko = document.createTextNode(customer.nazwisko);
        var wiek = document.createTextNode(customer.wiek);
        var plec = document.createTextNode(customer.plec);

        makeRow(imie, nazwisko, wiek, plec, btnDel, btnEdit, btnSave);
        clearInputs();
        customersRepository.add(customer);
        return addId;
    }

    function del(event) {

        event.target.parentElement.parentElement.remove();
        customersRepository.delete(eval(event.target.id));

    }

   


   
}
