<?php
    include('./mysqli.php');

    $id = $_REQUEST['id'];

    $sql = "select * from product where id = $id";

    $res = $mysqli->query($sql);

    $arr = array();

    if($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>