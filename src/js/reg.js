$('#phone').on('keyup', function() {
    let reg = /^1[3-9][0-9]{9}$/;
    // console.log($('#phone+span'))
    if (reg.test($('#phone').val())) {
        $('#phone+span').text('√');
        $('#phone+span').css({
            'display': 'inline-block',
            'background': 'greenyellow'
        });
    } else {
        $('#phone+span').text('×');
        $('#phone+span').css({
            'display': 'inline-block',
            'background': 'red'
        });
    }
})
$('#password').on('keyup', function() {
    let reg = /^.{6,18}$/;
    if (reg.test($('#password').val())) {
        $('#password+span').text('√');
        $('#password+span').css({
            'display': 'inline-block',
            'background': 'greenyellow'
        });
    } else {
        $('#password+span').text('×');
        $('#password+span').css({
            'display': 'inline-block',
            'background': 'red'
        });
    }
})
$('#repassword').on('keyup', function() {
    if ($('#repassword').val() == $('#password').val() && $('#password+span').text() == '√') {
        $('#repassword+span').text('√');
        $('#repassword+span').css({
            'display': 'inline-block',
            'background': 'greenyellow'
        });
    } else {
        $('#repassword+span').text('×');
        $('#repassword+span').css({
            'display': 'inline-block',
            'background': 'red'
        });
    }
})
$('.btn').on({
    'click': function() {
        if ($('#password+span').text() == '√' && $('#password+span').text() == '√' && $('#repassword+span').text() == '√' && $('#checkbox').prop('checked') == true) {
            $.ajax({
                url: "http://localhost:8080/qf/item/src/php/reg.php",
                type: 'get',
                data: { 'phone': $('#phone').val(), 'password': `${$('#password').val()}` },
                success: function(res) {
                    alert(res);
                    if (res == '注册成功') {
                        location.href = '../html/login.html';
                    }
                }
            })
        } else {
            alert('输入信息不正确');
            return;
        }
    },
    'mousedown': function() {
        $('.btn').css('background', 'rgb(209,102,45)')
    },
    'mouseup': function() {
        $('.btn').css('background', 'rgb(239,112,35)')
    },
})