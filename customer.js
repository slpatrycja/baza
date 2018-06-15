class Person{
    constructor(name, surname, age, gender) {
        this.imie = name;
        this.nazwisko = surname;
        this.wiek = age;
        this.plec = gender;
       
    }
}
class Customer extends Person{

    constructor(name, surname, age, gender, _id) {
        super(name, surname, age, gender);
        this.id = _id;
    }
}

class CustomersRepository {

    constructor(){}

    get(){
        if (JSON.parse(localStorage.getItem("Customers")) != null)
            var dataObj = JSON.parse(localStorage.getItem("Customers"));
        else
            dataObj = [];

        return dataObj;
    }

    add(item){
        var data = this.get();
        data.push(item);
        var keyValue = "Customers"; 
        localStorage.setItem(keyValue, JSON.stringify(data));
    }

    update(item, id){
        var data = this.get();
        var toUpdate = data.findIndex(function(obj){
            return obj.id == id;
        });
        if (data[toUpdate] != undefined)
            data[toUpdate] = item;
        var keyValue = "Customers"; 
        localStorage.setItem(keyValue, JSON.stringify(data));
    }

    delete(id){
        var data = this.get();
        var toDelete = data.findIndex(function(obj){
            return obj.id == id;
        });
        if (data[toDelete] != undefined)
            data.splice(toDelete, 1);
        var keyValue = "Customers"; 
        localStorage.setItem(keyValue, JSON.stringify(data));
    }

    replace(ar){
        var data = this.get();
        data = [];
        data = ar.splice(0);
        
        var keyValue = "Customers"; 
        localStorage.setItem(keyValue, JSON.stringify(data));
    }
    
}