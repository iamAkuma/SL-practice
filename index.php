<?php
// echo "Hello world!". "<br>";
// $name = "Saral";
// $a = 5;
// $b = 6;
// echo $a+$b."<br>";
// echo "My name is $name";

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
?>