//全选
$('.allCheck').on('click', function(ev) {
    if (ev.target.nodeName == "I") {
        $('.checkbox>i').css('display', 'none');
        // $('.checkbox').data('boo', '0');
        cont($('.checkbox:not(:first)'), 2);
    } else if (ev.target.nodeName == "SPAN") {
        $('.checkbox>i').css('display', 'block');
        // $('.checkbox').data('boo', '1');
        cont($('.checkbox:not(:first)'), 3);
    }
})

//单选
$('.contain').on('click', '.checkbox', function(ev) {
        if (ev.target.parentElement.className == "checkbox") {
            $(ev.target).css('display', 'none');
            // $(ev.target).parent().data('boo', '0');
            cont($(ev.target.parentElement), 0);
            jude(0);
        } else if (ev.target.className == "checkbox") {
            $(ev.target).children('i').css('display', 'block');
            // $(ev.target).data('boo', '1');
            console.log()
            cont($(ev.target), 1);
            jude(1);
        }
    })
    //单选影响全选
function jude(y) {
    if (y) {
        let bol = true;
        // console.log($('.checkbox:first>i').css('display'))
        for (let i = 1; i < $('.checkbox:not(:first)').length + 1; i++) {
            if ($(`.checkbox:eq(${i})>i`).css('display') == 'none') {
                bol = false;
                // console.log(bol)
            }
        }
        // console.log(bol)
        if (bol) {
            $('.checkbox:first>i').css('display', 'block');
        }
    } else {
        $('.checkbox:first>i').css('display', 'none');
    }
}


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



//购物车加入
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = cookie.get(`item-shop${i}`);
    if (arr[i]) {
        arr[i] = JSON.parse(arr[i]);

        // let li = document.createElement('li');
        let li = `<li><div>
            <span class="checkbox"><i></i></span>
            <img src="${arr[i].pic[1].src}" alt="">
            <div class="msg">
                <p>${arr[i].chname}</p>
                <p>${arr[i].enname}</p>
            </div>
            <div class="btn">
                <div class="lt">&lt;</div>
                <span>1</span>
                <div class="gt">&gt;</div>
            </div>
            <div class="rice">
                <s>${arr[i].oldprice}</s>
                <p><b>${arr[i].newprice}</b></p>
            </div>
            <span class="zk">${arr[i].discount}</span>
            <i class="del_icon del${arr[i].id}"></i>
        </div></li>`
            // console.log(li)
        $('.contain').append(li);
    }
}

//删除
$('.contain').on('click', '.del_icon', function(ev) {
    $('.contain')[0].removeChild(ev.target.parentElement.parentElement);
    let cl = $(ev.target).attr('class').slice(12, 14);
    cookie.remove('item-shop' + cl);
})

//计算
function cont(elm, x) {
    let num1 = 0,
        num2 = 0,
        less = 0,
        all = 0;
    if (x <= 1) {
        num1 = parseInt(elm.parent().children('.rice').children(':first').text().slice(1, 4));
        num2 = parseInt(elm.parent().children('.rice').children(':last').text().slice(1, 4));
        less = parseInt($('.less>span').text().slice(1, 4));
        all = parseInt($('.all>span').text().slice(1, 4));
        num1 = num1 - num2;
        if (x) {
            less += num1;
            all += num2;
        } else {
            less -= num1;
            all -= num2;
        }
    } else {
        if (x - 2) {
            for (let i = 0; i < elm.length; i++) {
                num1 += parseInt($(elm[i]).parent().children('.rice').children(':first').text().slice(1, 4));
                num2 += parseInt($(elm[i]).parent().children('.rice').children(':last').text().slice(1, 4));
            }
            less = num1 - num2;
            all = num2;
        } else {
            less = 0;
            all = 0;
        }
    }
    $('.less>span').text(`￥${less}.00`);
    $('.all>span').text(`￥${all}.00`)
}