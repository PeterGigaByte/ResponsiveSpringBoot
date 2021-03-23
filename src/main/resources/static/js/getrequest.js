$( document ).ready(function() {

    // GET REQUEST
    $("#getAllCustomersBtnId").click(function(event){
        event.preventDefault();
        ajaxGet();
    });

    // DO GET
    function ajaxGet(){
        $.ajax({
            type : "GET",
            url : window.location + "api/customer/all",
            success: function(result){
                $('#resultGetAllCustomerDiv ul').empty();
                var custList = "";
                $.each(result, function(i, customer){
                    var customer = "{firstName: " + customer.firstName +
                        ", surname: " + customer.surname + "}";

                    $('#resultGetAllCustomerDiv .list-group').append("<li>" + customer + "</li>");
                });

                // just re-css for result-div
                $('#resultGetAllCustomerDiv').css({'background-color':'#D16953', 'color':'white', 'padding':'20px 20px 5px 30px'});

                // just hide POST button
                if($('#customerTable').is(":hidden")){
                    $('#postCustomersBtn').hide();
                }
            },
            error : function(e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
})