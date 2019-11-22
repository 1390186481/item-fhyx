<?php
    include('mysqli.php');

    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];   

    $searchsql = "select * from user where phone = '$phone' and password = '$password'";
    $res = $mysqli->query($searchsql);
    if($res->num_rows){
        echo "登陆成功";
    }else{
        echo "手机与密码不匹配或未注册";
    }

    $mysqli->close();

?>
