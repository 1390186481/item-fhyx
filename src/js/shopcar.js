$('.allCheck').on('click', function() {
    console.log($('allCheck').data('boo'))
    if ($('allCheck').data('boo')) {
        $('.checkbox>i').css('display', 'none');
    } else {
        $('.checkbox>i').css('display', 'block');
    }
    // $('allCheck').
})
$('.checkbox:not(:first)').on('click', function(ev) {
    let boo = $(ev.target).attr("data_boo");
    boo = +boo;
    console.log(boo)
    console.log($(ev.target).attr("data_boo"))
    if (boo) {
        $(ev.target).children('i').css('display', 'none');
        $(ev.target).attr("data_boo", '0');
    } else {
        $(ev.target).children('i').css('display', 'block');
        $(ev.target).attr("data_boo", '1');
    }
})