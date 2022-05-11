<?php

if(isset($_GET['platform']) && !empty($_GET['platform'])){
    
    $p = $_GET['platform'];
    
    $link = null;
    if($p == 'win'){
        $link = "http://download.jinxuezhe.com/%E8%9C%97%E7%89%9B%E9%9F%B3%E6%95%88%20Setup%203.3.9.exe";
    }
    if($p == 'mac'){
        $link = "http://download.jinxuezhe.com/%E8%9C%97%E7%89%9B%E9%9F%B3%E6%95%88-3.3.9.dmg";
    }
    if(!empty($link)){
        Header("Location: $link");
    }
    // exit;
    
}else{
    echo "<script>alert('参数错误')</script>";
    // exit;
}
