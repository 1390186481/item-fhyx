// 定义变量区
// var bannerTimer;


// //轮播图按钮出现  轮播停止
// $(".banner_contral").on({
//     "mouseover": function() {
//         $(".sb").addClass('sb_show');
//         clearInterval(bannerTimer);
//     },
//     "mouseout": function() {
//         $(".sb").removeClass('sb_show');
//         objBanner.fn();
//     }
// })
// $(".sb").on("mouseenter", function() {
//     clearInterval(bannerTimer);
//     $(".sb").addClass('sb_show');
// })



window.onload = function() {

    //轮播图
    (function() {
        let index = 0,
            hotIndex = 0,
            bannerTimer;

        return objBanner = {
            fn: function() { //计时器
                bannerTimer = setInterval(function() {
                    $(".banner_img>div:eq(" + index + ")").css('z-index', '0');
                    $(".banner_img>div:eq(" + index + ")").css('opacity', '0');
                    index++;
                    if (index > 7) {
                        index = 0;
                    }
                    $(".banner_img>div:eq(" + index + ")").css('z-index', '1');
                    $(".banner_img>div:eq(" + index + ")").animate({
                        opacity: '1',
                    }, 1000)
                }, 5000);
            },
            changeL: (function() {
                //轮播图按钮功能
                $(".sb_left").on("click", function() {
                    $(".banner_img>div:eq(" + index + ")").stop(false, true);
                    $(".banner_img>div:eq(" + index + ")").css('z-index', '0');
                    $(".banner_img>div:eq(" + index + ")").css('opacity', '0');
                    index--;
                    if (index < 0) {
                        index = 7;
                    }
                    $(".banner_img>div:eq(" + index + ")").css('z-index', '1');
                    $(".banner_img>div:eq(" + index + ")").animate({
                        opacity: '1',
                    }, 1000)
                })
            })(),
            changeR: (function() {
                //轮播图按钮功能
                $(".sb_right").on("click", function() {
                    $(".banner_img>div:eq(" + index + ")").stop(false, true);
                    $(".banner_img>div:eq(" + index + ")").css('z-index', '0');
                    $(".banner_img>div:eq(" + index + ")").css('opacity', '0');
                    index++;
                    if (index > 7) {
                        index = 0;
                    }
                    $(".banner_img>div:eq(" + index + ")").css('z-index', '1');
                    $(".banner_img>div:eq(" + index + ")").animate({
                        opacity: '1',
                    }, 1000)
                })
            })(),
            stop: (function() {
                //轮播图按钮出现  轮播停止
                $(".banner_contral").on({
                    "mouseover": function() {
                        $(".sb").addClass('sb_show');
                        clearInterval(bannerTimer);
                    },
                    "mouseout": function() {
                        $(".sb").removeClass('sb_show');
                        objBanner.fn();
                    }
                })
                $(".sb").on("mouseenter", function() {
                    clearInterval(bannerTimer);
                    $(".sb").addClass('sb_show');
                })
            })(),
            fn_hot: function() { //计时器--hotgame
                hotTimer = setInterval(function() {
                    $(".hot_banner>img:eq(" + hotIndex + ")").css('z-index', '0');
                    $(".hot_banner>img:eq(" + hotIndex + ")").css('opacity', '0');
                    hotIndex++;
                    if (hotIndex > 5) {
                        hotIndex = 0;
                    }
                    $(".hot_banner>img:eq(" + hotIndex + ")").css('z-index', '1');
                    $(".hot_banner>img:eq(" + hotIndex + ")").animate({
                        opacity: '1',
                    }, 1000)
                }, 5000);
            },
            stop_hot: (function() { //轮播停止--hotgame
                $(".hot_banner").on({
                    "mouseover": function() {
                        clearInterval(bannerTimer);
                    },
                    "mouseout": function() {
                        objBanner.fn_hot();
                    }
                })
            })()
        }
    })();
    objBanner.fn();
    objBanner.fn_hot();

    //登陆后
    if (cookie.get('phone')) {
        $('.login>span').css('display', 'block');
        $('.login>span').text(`${cookie.get('phone')}`);
        $('.lg_btn>a').text(`退出`);
        $('.lg_btn>a').attr('href', 'javascript:void(0)');

        $('.login').on('click', function(e) {
            if (e.target.innerHTML == '退出') {
                $('.login>span').css('display', 'none');
                $('.login>span').text('');
                $('.lg_btn>a').text(`登陆`);
                setTimeout(function() {
                    $('.lg_btn>a').attr('href', '../html/login.html');
                }, 0)
            }
        })
    }

    // PCgame 滑动游戏选项卡
    (function() {
        let pcIndex = 1;
        return {
            cab: (function() {
                $('.cab').on("click", function() {
                    $('.cab').removeClass('act_cab');
                    $(this).addClass('act_cab');
                    if ($(this).data('index') == 1) {
                        $('.ul1').css('display', 'block');
                        $('.ul2').css("display", 'none');
                    } else {
                        $('.ul1').css('display', 'none');
                        $('.ul2').css("display", 'block');
                    }
                    pcIndex = $(this).data('index');
                })
            }()),
            slide1: (function() {
                $('.ul1_left').on('click', function() {
                    $('.ul1_left').animate({
                        left: '0px'
                    }, 500);
                    $('.ul1').animate({
                        left: 0
                    }, 500, function() {
                        $('.ul1_left').css('left', '1000px');
                        $('.ul1_left').css('display', 'none');
                        $('.ul1_right').css('display', 'block');
                    });
                });
                $('.ul1_right').on('click', function() {
                    $('.ul1_right').animate({
                        left: '2165px'
                    }, 500);
                    $('.ul1').animate({
                        left: '-1000px'
                    }, 500, function() {
                        $('.ul1_right').css('left', '1165px');
                        $('.ul1_left').css('display', 'block');
                        $('.ul1_right').css('display', 'none');
                    });
                });
            })(),
            slide2: (function() {
                $('.ul2_left').on('click', function() {
                    $('.ul2_left').animate({
                        left: '0px'
                    }, 500);
                    $('.ul2').animate({
                        left: 0
                    }, 500, function() {
                        $('.ul2_left').css('left', '1000px');
                        $('.ul2_left').css('display', 'none');
                        $('.ul2_right').css('display', 'block');
                    });
                });
                $('.ul2_right').on('click', function() {
                    $('.ul2_right').animate({
                        left: '2165px'
                    }, 500);
                    $('.ul2').animate({
                        left: '-1000px'
                    }, 500, function() {
                        $('.ul2_right').css('left', '1165px');
                        $('.ul2_left').css('display', 'block');
                        $('.ul2_right').css('display', 'none');
                    });
                });
            })()
        }
    })();



    //展开动画
    $('.onegroup').on('mouseover', function(e) {
        console.log(1)
        let index,
            left;
        if (e.target.tagName == 'IMG') {
            index = $(e.target).data("index");
        } else {
            index = $(e.target.children[0]).data("index");
        }
        $('.one_show:eq(' + index + ')').stop(true, false);
        $('.group').stop(true, false);
        $('.one_show:eq(' + index + ')').animate({
            width: '1212px'
        }, 1000);
        left = -304 * index;
        $('.group').animate({
            left: left
        }, 1000);

    })
    $('.onegroup').on('mouseout', function(e) {
        e.p
        console.log(2)
        if (e.target.tagName == 'IMG') {
            index = $(e.target).data("index");
        } else {
            index = $(e.target.children[0]).data("index");
        }
        $('.one_show:eq(' + index + ')').stop(true, false);
        $('.group').stop(true, false);
        $('.one_show:eq(' + index + ')').animate({
            width: '286px'
        }, 1000);
        $('.group').animate({
            left: 0
        }, 1000);
    })

    if ($(document).scrollTop() >= 635) {
        $('.stairs').css('visibility', 'unset');
    } else {
        $('.stairs').css('visibility', 'hidden');
    }



    //楼梯
    $(window).on('scroll', function() {
        st = $(document).scrollTop();
        $('.stairs').css('top', st - 650 + 'px');
        console.log(st)
        let index;
        if (st >= 3450) {
            index = '';
            $('.stairs').slideUp(200);
        } else if (st >= 3080) {
            index = 4;
            $('.stairs').slideDown(200);
        } else if (st >= 2500) {
            index = 3;
        } else if (st >= 1900) {
            index = 2;
        } else if (st >= 1375) {
            index = 1;
        } else if (st >= 635) {
            index = 0;
            $('.stairs').css('visibility', 'unset');
            $('.stairs').slideDown(200);
        } else {
            $('.stairs').slideUp(200);
        }
        $('.li-sta').removeClass('act-stairs');
        $(`.li-sta:eq(${index})`).addClass('act-stairs');
    })
    $('.li-sta:last').on('click', function() {
        $('html,body').animate({
            scrollTop: 0,
        }, 500)
    })

    $('.li-sta:not(:last)').on('click', function() {
        var top = $('#' + this.title).offset().top;
        this.title == 'up' ? top = 0 : null;
        $('html,body').animate({
            scrollTop: top,
        }, 500)
    })
}