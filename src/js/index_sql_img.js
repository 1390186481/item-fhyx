let baseUrl = "http://127.0.0.1:8080/qf/item";

$.ajax({
    url: `${baseUrl}/src/php/getall.php`,
    type: "get",
    dataType: "json",
    success: function(res) {
        console.log(res);
    }
})