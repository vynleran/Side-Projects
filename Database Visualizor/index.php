<!-- Connecting to the database -->
<?php
    $ser = "localhost";
    $user = "root";
    $pass = "Parsa@1379";
    $db = "test";

    $con = mysqli_connect($ser, $user, $pass, $db) or die("connection failed");
    //echo "connection success";
?>

<!-- The Styling of the website -->
<style>
    <?php include 'main.css'; ?>
</style>

<!-- The Skeleton of the website -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- The entire website -->
    <div id="body">
        <!-- The input half -->
        <div id="inputs">
            <!-- The input form -->
            <form action="form.php" method="POST">
                <div id="form">
                    <!-- Labels -->
                    <div id="label">
                        <label for="">Which Batteries?</label>
                        <label for="">What Cycles?</label>
                        <label for="">What's X?</label>
                        <label for="">What's Y?</label>
                        <label for="">Discharge?</label>
                        <label for="">Charge?</label>
                    </div>
                    <!-- User Info -->
                    <div id="info">
                        <input type="text" placeholder="Batteries" required 
                        oninvalid="this.setCustomValidity('No Batteries Were Entered')"
                        oninput="setCustomValidity('')" name="battery">

                        <input type="text" placeholder="Cycles" required 
                        oninvalid="this.setCustomValidity('No Cycles Were Entered')"
                        oninput="setCustomValidity('')" name="cycle">

                        <select name="X">
                            <option value="Cap">Capacity</option>
                            <option value="SCap">Specific Capacity</option>
                            <option value="Volt">Voltage</option>
                        </select>

                        <select name="Y">
                            <option value="Cap">Capacity</option>
                            <option value="SCap">Specific Capacity</option>
                            <option value="Volt">Voltage</option>
                        </select>

                        <input type="checkbox" name="discharge" checked>
                        <input type="checkbox" name="charge" checked>
                    </div>
                </div>
                <!-- Submit Button -->
                <div>
                    <input type="submit" name="submit" id="submit">
                </div>
            </form>
        </div>
        <!-- The graph half -->
        <div id="graph">
            <p>hello</p>
        </div>
    </div>
</body>
</html>