class CustomersRepository{
    get(){
        var tab = localStorage.getItem("Customers");
        var tabObj = JSON.parse(tab);
        return tabObj;
    }

    add(Data){
        this.data = Data;
        localStorage.setItem(keyValue, JSON.stringify(this.data));
    }

    update(){
        localStorage.setItem(keyValue, JSON.stringify(data));
    }
}