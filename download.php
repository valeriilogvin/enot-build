<?php
/*

id
name

*/

if (!isset($_GET["id"])) die("");
if (!isset($_GET["name"])) die("");

if (!preg_match("/^[0-9]+$/", $_GET["id"])) die("");
if (!preg_match("/^[0-9a-zA-Z]+$/", $_GET["name"])) die("");

$uploads_dir = "__upload/" . $_GET["id"];

if (!file_exists("$uploads_dir/__names.json")) die("");

function file_force_download($file, $name) {
  //echo($file);
  if (file_exists($file)) {
    if (ob_get_level()) {
      ob_end_clean();
    }
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header("Content-Disposition: attachment; filename*=UTF-8''".rawurlencode($name));
    //header('Content-Disposition: attachment; filename="' . $name . '"');
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));

    if ($fd = fopen($file, 'rb')) {
      while (!feof($fd)) {
        print fread($fd, 1024);
      }
      fclose($fd);
    }

  }
}

$result = file_get_contents("$uploads_dir/__names.json");

$result = json_decode($result);

if (!$result) die("");

foreach ($result as $key => $file_data) {
			
	$found = $file_data->name == $_GET["name"];
	
	if ($found) 
	{
		if (file_exists("$uploads_dir/" . $file_data->name))
		{
			file_force_download("$uploads_dir/" . $file_data->name, $file_data->realname);
			die();
		}
		break;
	}
	# code...
}



?>