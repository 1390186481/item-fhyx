let baseUrl = "http://10.31.154.72:8080/qf/item";
//加载图片
$.ajax({
    url: `${baseUrl}/src/php/getall.php`,
    type: "get",
    dataType: "json",
    success: function(res) {
        for (let i = 0; i < 10; i++) {
            res[i].pic = JSON.parse(res[i].pic);
            $(`.ul1>li:eq(${res[i].id})>a>img`).attr('src', `${res[i].pic[0].src}`);
            $(`.ul1>li:eq(${res[i].id})>a>span:eq(0)`).text(`${res[i].discount}`);
            $(`.ul1>li:eq(${res[i].id})>a>span:eq(1)`).html(`<s>${res[i].oldprice}</s><br>${res[i].newprice}`);
            $(`.ul1>li:eq(${res[i].id})>.PC_date>p`).html(`<span><span></span></span>${res[i].data}`);
            $(`.ul1>li:eq(${res[i].id})>.PC_js>p:eq(0)`).text(`${res[i].chname}`);
            $(`.ul1>li:eq(${res[i].id})>.PC_js>p:eq(1)`).text(`${res[i].enname}`);

            //加载详情页

            $(`.ul1>li:eq(${res[i].id})>a`).on('click', function() {
                location.href = `${baseUrl}/src/html/item.html?id=${i}`;
            })
        }
    }
})