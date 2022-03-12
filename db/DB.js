
var customerDB=new Array();
var itemDB=new Array();

function updateCustomer(id, name, address, tp) {
    for (let i = 0; i < customerDB.length; i++) {
        if(customerDB[i].getCusID()===id){
            customerDB[i].setCusName(name);
            customerDB[i].setCusAddress(address);
            customerDB[i].setCusTp(tp);
            return true;
        }
    }
    return false;
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if(customerDB[i].getCusID() === id){
            customerDB.splice(i,1);
            $("#customerDetailsTable").empty();
            loadAllCustomers();
            clearAll();
        }
    }
    return false;
}

function saveCustomer(customer) {
    customerDB.push(customer);

    $("#customerDetailsTable>tr").on("click", function () {

        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let tp = $(this).children(":eq(3)").text();
        console.log(id, name, address,tp);

        $("#addNewCustomerModal2").modal('show');

        $("#txtCustomerID1").val(id);
        $("#txtCustomerName1").val(name);
        $("#txtCustomerAddress1").val(address);
        $("#txtTelephone1").val(tp);
    });

}

function loadAllCustomers() {
    $("#customerDetailsTable").empty();
    for (var i of customerDB) {
        let customerRow = `<tr><td>${i.getCusID()}</td><td>${i.getCusName()}</td><td>${i.getCusAddress()}</td><td>${i.getCusTp()}</td></tr>`;
        console.log(customerRow)
        $("#customerDetailsTable").append(customerRow);
    }
}

function searchCustomer(id) {
    for (let i = 0; i<customerDB.length;i++){
        if (customerDB[i].getCusID()===id){
            return customerDB[i];
        }
    }
    return false;
}