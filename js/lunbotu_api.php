<?php

//允许跨域
header("Access-Control-Allow-Origin: *");


echo file_get_contents("../json/lunbotu.json");


?> 