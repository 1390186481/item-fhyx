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

//放大镜
//爱写不写