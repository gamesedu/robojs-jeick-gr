<?php
$save_to_file=true;
$show_data_in_screen=true;
$all_data_is_null=true;
if($debug) echo "<h2>inside createbotfile.php</h2>";

//open file and get data
$data = file_get_contents("bots/template-gr.js");
if($debug) echo "<h2>template-gr: $data</h2>";
// do tag replacements or whatever you want
$data = str_replace("<tag1>", "<tag2>", $data);

//check bot filename
$tankname=$_POST["tankname"];
if(mb_strlen($tankname)<3 || is_null($tankname)) {
	//if we have forgoten to enter name then we will create a random name (we assume since password was entered the user wanted something)
	$tankname=date("Ymd_H_m");
	if ($require_password && $secret_password!=$_POST["password"]) {$save_to_file=false; }
}
if($debug) echo "<h2>tankname $tankname</h2>";

//save it back:
if($save_to_file)file_put_contents("bots/".$tankname.".js", $data);
if($show_data_in_screen) echo "<h3><fieldset>Copy this to a file<pre>".$data."</pre></fieldset></h3>"
//file_put_contents("bbb.js", $data); //ok works

?>