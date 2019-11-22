//图片切换
(function() {
    let index = 0;
    return {
        ban: (function() { //计时器
            let url;
            setInterval(function() {
                index++;
                if (index > 4) {
                    index = 0;
                }
                url = $(".des_big>img").attr('src').slice(12, 19);
                $(".des_top_small>img").removeClass('des_act');
                $(".des_top_small>img:eq(" + index + ")").addClass('des_act');
                $(".des_big>img").attr('src', "../img/item/" + url + (index + 1) + ".jpg")
            }, 5000);
        })(),
        clc: (function() {
            $(".des_top_small>img").on('click', function(ev) {
                $(".des_top_small>img").removeClass('des_act');
                $(ev.target).addClass('des_act');
                $(".des_big>img").attr('src', $(ev.target).attr('src'));
            })
        })()
    }
})()




//购买的型号信息切换
$('.sl1').on('click', function(ev) {
    $('.sl1').removeClass('sl_act');
    $(ev.target).addClass('sl_act');
})
$('.sl2').on('click', function(ev) {
    $('.sl2').removeClass('sl_act');
    $(ev.target).addClass('sl_act');
})

//展开游戏介绍
$('.intro_title>h2>span').on('click', function() {
    if ($(".intro_title>h2>span").text() == '更多') {
        $(".game_introduce").css('height', '940px');
        $(".intro_passage").css('height', '500px');
        $(".intro_title>h2>span").text('收起');
    } else {
        $(".game_introduce").css('height', '650px');
        $(".intro_passage").css('height', '210px');
        $(".intro_title>h2>span").text('更多');
    }
})

//渲染
let baseUrl = "http://127.0.0.1:8080/qf/item";
let num = location.search.slice(4, );
console.log(num)
$.ajax({
    url: `${baseUrl}/src/php/getitem.php`,
    type: "get",
    dataType: "json",
    data: { 'id': num },
    success: function(res) {
        res = res[0];
        res.pic = JSON.parse(res.pic);
        console.log(res);
        $('.game_title>h2').text(`${res.chname}`);
        $('.game_title>span').html(`${res.details}`);
        $('.des_big>img').attr('src', `${res.pic[2].src}`);
        $(`.des_top_small>img:eq(0)`).attr('src', `${res.pic[2].src}`);
        $(`.des_top_small>img:eq(1)`).attr('src', `${res.pic[3].src}`);
        $(`.des_top_small>img:eq(2)`).attr('src', `${res.pic[4].src}`);
        $(`.des_top_small>img:eq(3)`).attr('src', `${res.pic[5].src}`);
        $(`.des_top_small>img:eq(4)`).attr('src', `${res.pic[6].src}`);
        $(`.des_des>img`).attr('src', `${res.pic[1].src}`);
        $(`.des_des>p`).text(`${res.enname}`);
        $(`.des_price>span:eq(0)`).text(`${res.oldprice}`);
        $(`.des_price>span:eq(1)`).text(`${res.newprice}`);
        $(`.des_price>span:eq(2)`).text(`${res.discount}`);
        $(`.intro_passage>p`).text(`${res.passage}`);

        $('.shop_car').on('click', function() {
            delete res.passage;
            delete res.details;
            let reg = JSON.stringify(res);
            cookie.creat(`item-shop${res.id}`, reg);
        })
    }
})