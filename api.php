<?php
/*

GET:
id list
id delete name

*/

if (!isset($_GET["id"])) die("");
if (!preg_match("/^[0-9]+$/", $_GET["id"])) die("");

$uploads_dir = "__upload/" . $_GET["id"];


if (isset($_GET["list"]))
{
    if (file_exists("$uploads_dir/__names.json"))
    {
        $txt = file_get_contents("$uploads_dir/__names.json");
        
        if ($txt!="")
        {
        	die($txt);
        }
    }

	die("[]");
}

if (isset($_GET["delete"]) && isset($_GET["name"]))
{

    if (!file_exists("$uploads_dir/__names.json")) die("");

	$result = file_get_contents("$uploads_dir/__names.json");
	
	$result = json_decode($result);

	if (!$result) die("");

	$answ = "";

	foreach ($result as $key => $file_data) {
				
		$found = $file_data->name == $_GET["name"];
		
		if ($found) 
		{
			if (file_exists("$uploads_dir/" . $file_data->name))
			{
				unlink("$uploads_dir/" . $file_data->name);
				$answ = "ok";
			}
			unset($result[$key]);
			break;
		}
		# code...
	}

	//var_dump($result);
	file_put_contents("$uploads_dir/__names.json", json_encode(array_values($result)));
    die($answ);
}

?>