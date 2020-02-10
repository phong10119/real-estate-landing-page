$("#myform").submit(function(e) {
    e.preventDefault();
});

function postToGoogle() {
    var field1 = $("#nameField").val();
    var field2 = $("#phoneField").val();
    var field3 = $("#emailField").val();
    console.log(field1, 'submitted')
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSf-OC2q6cahfDfgQzWbgJqJTpUR9jlxCEIw-Y3k2qJjpHeBAA/formResponse?",
        data: {"entry.1801709916": field1, "entry.733540953": field2, "entry.1582798998": field3,
        type: "POST",
        dataType: "xml",
        success: function(d) {
            // console.log(d,'sucess')
        },
        error: function(x, y, z){
                $('#success-msg').show();
                $('#form').hide();
        }
    }})
    return false;
}

