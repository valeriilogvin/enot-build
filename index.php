<?php

include("__system/lib.php");

if (is_mobile() and !stristr($_SERVER['HTTP_USER_AGENT'],'ipad'))
{
    include("__includes/mobile.php");
}
else
{
    include("__includes/desktop.php");
}

?>