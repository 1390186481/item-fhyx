//全选
$('.allCheck').on('click', function(ev) {
    if (ev.target.nodeName == "I") {
        $('.checkbox>i').css('display', 'none');
        $('.checkbox').data('boo', '0');
    } else if (ev.target.nodeName == "SPAN") {
        $('.checkbox>i').css('display', 'block');
        $('.checkbox').data('boo', '1');
    }
})

//单选
$('.contain').on('click', '.checkbox', function(ev) {
    if (ev.target.parentElement.className == "checkbox") {
        $(ev.target).css('display', 'none');
        $(ev.target).parent().data('boo', '0');
    } else if (ev.target.className == "checkbox") {
        $(ev.target).children('i').css('display', 'block');
        $(ev.target).data('boo', '1');
    }
})

//删除
$('.contain').on('click', '.del_icon', function(ev) {
    $('.contain')[0].removeChild(ev.target.parentElement.parentElement);
})

//增减数量
$('.contain').on('click', '.btn>.lt', function(ev) {
    let x = $(ev.target).next().text();
    x--;
    x < 1 ? x = 1 : null;
    $(ev.target).next().text(x);
})
$('.contain').on('click', '.btn>.gt', function(ev) {
    let x = $(ev.target).prev().text();
    x++;
    $(ev.target).prev().text(x);
})