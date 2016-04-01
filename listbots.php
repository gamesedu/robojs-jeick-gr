<html class="no-js" lang="gr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title id="title">RoboJS - Λίστα έτοιμων ρομποτ</title>
  </head>
  <body>
  <h2>Λίστα έτοιμων ρομποτ</h2>
  
  <?php
  $debug=false;
  $require_password=false;
  $secret_password="1234";
  if($debug)if($_POST!=null){print_r($_POST);}
  $directory = "./bots/";
  $phpfiles = glob($directory . "*.js");
  foreach($phpfiles as $phpfile)
	{
	$phpfile=str_replace($directory, "",$phpfile);
	$phpfile=str_replace(".js", "",$phpfile);
	echo "<a href='index.html?bot1=$phpfile&bot2=' target='_blank' >ΜΑΧΗ : $phpfile Vs SittingDuck </a>  <br>";
	}
  ?>
 
  </body>
  </html>