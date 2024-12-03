<?php
if($_SERVER['REQUEST_METHOD'] === "POST"){
  $name = $_POST['name'];
  $last_name = $_POST["last_name"];
  echo "using post method";
  echo "\nName mentioned in form is $name $last_name";
}
else{
  $name = $_GET['name'];
  $last_name = $_GET["last_name"];
  echo "using get method";
  echo "\nName mentioned in form is $name $last_name";
}
?>