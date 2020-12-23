<?php

include("__system/lib.php");

if (is_mobile())
{
    include("__includes/mobile.php");
}
else
{
    include("__includes/desktop.php");
}

?>