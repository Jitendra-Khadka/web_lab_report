<?php
  $hostname = "localhost";
  $username = "root";
  $password = "";

  $connect = mysqli_connect($hostname, $username, $password);

  if($connect->connect_error === true){
    die ("connection failed with database<br>");
  }
  else{
    echo "connection successed<br>";
  }

  $connect->query("DROP DATABASE db");

  if($connect->query("CREATE DATABASE db") === true){
    echo "database db created successfully<br>";
  }
  else{
    die ("could not create database db<br>");
  }

  if($connect->select_db("db") === true){
    echo "connected to database db<br>";
  }
  else{
    die("could not connect with database db<br>");
  }

  $create_table = "CREATE TABLE student (
    name VARCHAR(100)
)";

if ($connect->query($create_table) === true) {
    echo "Table created successfully";
} else {
    die("Error creating table: " . $connect->error);
}

?>