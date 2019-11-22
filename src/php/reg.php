<?php
    include('mysqli.php');

    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];   

    $searchsql = "select * from user where phone = '$phone'";
    $res = $mysqli->query($searchsql);
    if($res->num_rows){
        echo "手机已注册";
        $mysqli->close();
        die;
    };
   
    $insertsql = "insert into user(phone,password) values($phone,'$password')";
    $res2 = $mysqli->query($insertsql);
    if($res2){ 
        echo "注册成功";
    }
    $mysqli->close();

?>
