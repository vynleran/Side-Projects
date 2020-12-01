<!-- Connecting to the database -->
<?php
    $ser = "localhost";
    $user = "root";
    $pass = "Parsa@1379";
    $db = "test";

    $con = mysqli_connect($ser, $user, $pass, $db) or die("connection failed");
    echo "connection success";
?>

<!-- The basic frontend of the website -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>