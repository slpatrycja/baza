window.onload = Main;
function Main() {
    document.getElementById("search").onclick = search;
    document.getElementById("SortByNameButton").onclick = SortByName;
    document.getElementById("SortByLastNameButton").onclick = SortByLastName;
    document.getElementById("SortByIdButton").onclick = SortById;
    document.getElementById("pageNext").onclick = nextPage;
    document.getElementById("pageBack").onclik = previousPage;
    var loadId;
    var addId = -1;
    document.getElementById("but").onclick = add;
    var table = document.getElementById("tbody");
    var tab = document.getElementById("tab");
    var customersRepository = new CustomersRepository();

    load(1);
    function clearTable() {
        table.innerHTML = "";
    }
    function makeRow(id, imie, nazwisko, wiek, plec, del, edit) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        row.setAttribute("id", eval(id));
        cell1.appendChild(id);
        cell2.appendChild(imie);
        cell3.appendChild(nazwisko);
        cell4.appendChild(wiek);
        cell5.appendChild(plec);
        cell6.appendChild(del);
        cell7.appendChild(edit);

    }

    function clearInputs() {
        document.getElementById("name").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("age").value = "";
    }

    function edit(event) {
        var table = document.getElementById("tbody");
        var row = event.target.parentElement.parentElement;
        var oldName = row.cells[1].innerText;
        var oldSurname = row.cells[2].innerText;
        var oldAge = eval(row.cells[3].innerText);
        var oldSex = row.cells[4].innerText;

        $("#nameEdit").text(oldName);
        $("#lastnameEdit").text(oldSurname);
        $("#ageEdit").val(oldAge);
        $("#genderEdit").val(oldSex);
        $(".saveEdited").attr("id", event.target.id);
        $(".saveEdited").on("click", save);

        function save(event) {
            var chName = document.getElementById("nameEdit").value;
            var chLast = document.getElementById("lastnameEdit").value;
            var chAge = document.getElementById("ageEdit").value;
            var chGender = document.getElementById("genderEdit").value;
            var editedCustomer = new Customer(chName, chLast, chAge, chGender, eval(event.target.id));
            customersRepository.update(editedCustomer, eval(event.target.id));
            var chImie = document.createTextNode(editedCustomer.imie);
            var chNazwisko = document.createTextNode(editedCustomer.nazwisko);
            var chWiek = document.createTextNode(editedCustomer.wiek);
            var chPlec = document.createTextNode(editedCustomer.plec);
            row.cells[1].innerHTML = "";
            row.cells[2].innerHTML = "";
            row.cells[3].innerHTML = "";
            row.cells[4].innerHTML = "";
            row.cells[1].appendChild(chImie);
            row.cells[2].appendChild(chNazwisko);
            row.cells[3].appendChild(chWiek);
            row.cells[4].appendChild(chPlec);
            return id;
        
        }
    }

    function load(pageNumber) {
        $("#pageNumber").val(pageNumber);
        var tabObj = customersRepository.get();
        if (tabObj != null) {

            for (i = (pageNumber-1)*9; i < pageNumber*9; i++) {
                //id += 1;
                var deltt = document.createTextNode("Usuń");
                var btnDel = document.createElement("button");
                btnDel.appendChild(deltt);
                btnDel.setAttribute("id", tabObj[i].id);
                btnDel.setAttribute("class", "btn btn-danger");
                btnDel.onclick = del;

                var editt = document.createTextNode("Edytuj");
                var btnEdit = document.createElement("button");
                btnEdit.appendChild(editt);
                btnEdit.setAttribute("data-toggle", "modal");
                btnEdit.setAttribute("data-target", "#formEdit");
                btnEdit.setAttribute("id", tabObj[i].id);
                btnEdit.setAttribute("class", "btn btn-warning");
                btnEdit.onclick = edit;

                var id = document.createTextNode(tabObj[i].id);
                var imie = document.createTextNode(tabObj[i].imie);
                var nazwisko = document.createTextNode(tabObj[i].nazwisko);
                var wiek = document.createTextNode(tabObj[i].wiek);
                var plec = document.createTextNode(tabObj[i].plec);

                makeRow(id, imie, nazwisko, wiek, plec, btnDel, btnEdit);
                addId = tabObj[tabObj.length - 1].id;
                return addId;
                return pageNumber;
            }
           
        }
    }
    function nextPage(){
        var currentPage = eval($("#pageNumber").val()) + 1;
        clearTable();
        load(currentPage);
    }

    function previousPage(){
        var currentPage =  eval($("#pageNumber").val());
        clearTable();
        load(currentPage);
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

        var imie = document.createTextNode(customer.imie);
        var nazwisko = document.createTextNode(customer.nazwisko);
        var wiek = document.createTextNode(customer.wiek);
        var plec = document.createTextNode(customer.plec);
        var id = document.createTextNode(customer.id);

        makeRow(id, imie, nazwisko, wiek, plec, btnDel, btnEdit);
        clearInputs();
        customersRepository.add(customer);
        return addId;
    }

    function del(event) {

        event.target.parentElement.parentElement.remove();
        customersRepository.delete(eval(event.target.id));

    }





}
