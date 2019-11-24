$('.btn:eq(0)').on({
    'click': function() {
        let reg1 = /^1[3-9][0-9]{9}$/,
            reg2 = /^.{6,18}$/;
        if (reg1.test($('#phone').val()) && reg2.test($('#password').val())) {
            $.ajax({
                url: "http://127.0.0.1:8080/qf/item/src/php/login.php",
                type: 'get',
                data: { 'phone': $('#phone').val(), 'password': `${$('#password').val()}` },
                success: function(res) {
                    alert(res);
                    if (res == '登陆成功') {
                        location.href = '../html/index_.html?1';
                    }
                }
            })
        } else {
            alert('输入信息不正确');
            return;
        }
    },
    // 'mousedown': function() {
    //     $('.btn').css('background', 'rgb(209,102,45)')
    // },
    // 'mouseup': function() {
    //     $('.btn').css('background', 'rgb(239,112,35)')
    // },
})