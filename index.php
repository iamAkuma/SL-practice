<!--
// echo "Hello world!". "<br>";
// $name = "Saral";
// $a = 5;
// $b = 6;
// echo $a+$b."<br>";
// echo "My name is $name";

/*
class Car {
    public $color;
    public $model;
    public function __construct($color, $model) {
        $this->color = $color;
        $this->model = $model;
    }

    public function message(){
        echo 'This car has a color of '.$this->color.' and the model is '.$this->model. '<br>';
    }
}

$myCar = new Car('black', 'Volvo');
echo $myCar -> message();
echo "<br>";
$myCar = new Car('red', 'Toyota');
echo $myCar -> message();
?> */

<?php
$cars = array (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);
echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2].".<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2].".<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2].".<br>";


for ($row = 0; $row < 4; $row++) {
  echo "<p><b>Row number $row</b></p>";
  echo "<ul>";
  for ($col = 0; $col < 3; $col++) {
    echo "<li>".$cars[$row][$col]."</li>";
  }
  echo "</ul>";
}

?>