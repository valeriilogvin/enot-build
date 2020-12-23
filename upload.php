<?php

$html = file_get_contents("upload.html");

if (count($_FILES)==0)
{
    die($html);
}

if (!isset($_GET["id"])) die("[]");
if (!preg_match("/^[0-9]+$/", $_GET["id"])) die("[]");


$uploads_dir = "__upload/" . $_GET["id"];
$get_file_php = "download.php";

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function get_temp_file_name()
{

    return generateRandomString(16);
}

function incoming_files() {
    $files = $_FILES;
    $files2 = [];
    foreach ($files as $input => $infoArr) {
        $filesByInput = [];
        foreach ($infoArr as $key => $valueArr) {
            if (is_array($valueArr)) { // file input "multiple"
                foreach($valueArr as $i=>$value) {
                    $filesByInput[$i][$key] = $value;
                }
            }
            else { // -> string, normal file input
                $filesByInput[] = $infoArr;
                break;
            }
        }
        $files2 = array_merge($files2,$filesByInput);
    }
    $files3 = [];
    foreach($files2 as $file) { // let's filter empty & errors
        if (!$file['error']) $files3[] = $file;
    }
    return $files3;
}

$res = array();
$res1 = array();

if (count($_FILES)>0) {

    if (!file_exists($uploads_dir)) mkdir($uploads_dir, 0777, true);

    if (file_exists("$uploads_dir/__names.json"))
    {
        $txt = file_get_contents("$uploads_dir/__names.json");
        if ($txt!="")
        {
            $res = json_decode($txt, true);
        }
    }

	//var_dump($_FILES);
    $file_ary = incoming_files();

    foreach ($file_ary as $file) {        

    	$filepath = get_temp_file_name();

        //var_dump($file);

    	move_uploaded_file($file['tmp_name'], "$uploads_dir/$filepath");
    	
        $res[]  = array("src"=> "$get_file_php?id=" . $_GET["id"] . "&name=$filepath", "name"=>$filepath, "realname"=>$file["name"]);
        $res1[] = array("src"=> "$get_file_php?id=" . $_GET["id"] . "&name=$filepath", "name"=>$filepath, "realname"=>$file["name"]);
    }

    file_put_contents("$uploads_dir/__names.json", json_encode($res));

    $json = json_encode($res1);    
    die($json);

}

?>