
        var data = [];
        var table = document.getElementById("tab");
        function clearInputs() {
            document.getElementById("name").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("age").value = "";
            
        }

        function add() {
            var table = document.getElementById("tab");
            var row = table.insertRow();
            var nrwiersza = eval(table.rows.length - 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);

            var deltt = document.createTextNode("Usun");
            var btnDel = document.createElement("button");
            btnDel.appendChild(deltt);
            btnDel.setAttribute("id", nrwiersza);
            btnDel.onclick = del;

            var editt = document.createTextNode("Edytuj");
            var btnEdit = document.createElement("button");
            btnEdit.appendChild(editt);
            btnEdit.setAttribute("id", nrwiersza);
            btnEdit.onclick = edit;

            var newCustomer = {
                imie: document.getElementById("name").value,
                nazwisko: document.getElementById("lastname").value,
                wiek: document.getElementById("age").value,
                plec: document.getElementById("gender").value,

            }

            var imie = document.createTextNode(newCustomer.imie);
            var nazwisko = document.createTextNode(newCustomer.nazwisko);
            var wiek = document.createTextNode(newCustomer.wiek);
            var plec = document.createTextNode(newCustomer.plec);



            cell1.appendChild(imie);
            cell2.appendChild(nazwisko);
            cell3.appendChild(wiek);
            cell4.appendChild(plec);
            cell5.appendChild(btnDel);
            cell6.appendChild(btnEdit);

            data.push(newCustomer);
            data[nrwiersza-1].id = nrwiersza;
            clearInputs();



            function edit(event) {
                cell1.innerHTML = "<input type='text' id='changedname'>";
                cell2.innerHTML = "<input type='text'id='changedlast'>";
                cell3.innerHTML = "<input type='number'id='changedage'>";
                cell4.innerHTML = " <select id='changedgender'><option value='Kobieta'>Kobieta</option> <option value='Mezczyzna'>Mezczyzna</option> </select></br>";

                btnEdit.innerText = "Zapisz";
                btnEdit.onclick = save;

                function save(event) {

                    var editedCustomer = {
                        imie: document.getElementById("changedname").value,
                        nazwisko: document.getElementById("changedlast").value,
                        wiek: document.getElementById("changedage").value,
                        plec: document.getElementById("changedgender").value,
                    }

                    var chImie = document.createTextNode(editedCustomer.imie);
                    var chNazwisko = document.createTextNode(editedCustomer.nazwisko);
                    var chWiek = document.createTextNode(editedCustomer.wiek);
                    var chPlec = document.createTextNode(editedCustomer.plec);

                    cell1.innerHTML = "";
                    cell2.innerHTML = "";
                    cell3.innerHTML = "";
                    cell4.innerHTML = "";
                    cell1.appendChild(chImie);
                    cell2.appendChild(chNazwisko);
                    cell3.appendChild(chWiek);
                    cell4.appendChild(chPlec);

                    btnEdit.innerText = "Edytuj";
                    btnEdit.onclick = edit;
                    var row = event.target.id;
                    data.splice(row-2, 1, editedCustomer);
                    data[row-2].id = row;
                }

            }
        }

        function del(event) {
            var index;
            var table = document.getElementById("tab");
            event.target.parentElement.parentElement.remove();
            for (i=0; i<data.length; i++){
                if(data[i].id == event.target.id)
                    index = i;
              
            }
                data.splice(index, 1);
                
            
        }

