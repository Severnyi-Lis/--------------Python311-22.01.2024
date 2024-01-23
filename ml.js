window.addEventListener(
    'load',
    kuk
);
function changeColor(element) {
    element.currentTarget.style.backgroundColor='';
    if(car_1.style.backgroundColor=='',car.style.backgroundColor==''){
        car_1.style.backgroundColor='blue';
        car.style.backgroundColor='blue';
    }else{
        car_1.style.backgroundColor='';
        car.style.backgroundColor='';
    }
}
function changewheels(тык){
    тык.currentTarget.style.backgroundColor='';
    if(wheel.style.borderColor=='',wheel_2.style.borderColor==''){
        wheel.style.borderColor='black';
        wheel_2.style.borderColor='black';
    }else{
        wheel.style.borderColor='';
        wheel_2.style.borderColor='';
    }
}
function kuk(){
    ttt.addEventListener(
    'click',
    changeColor
    )
    sss.addEventListener(
    'click',
    changewheels
    )
}



//Здесь пытался поработать с классом но ничегшо не выходит 


class Car{
    #color
    #speed
    #wheels
constructor(color,speed,wheels){
        this.#color=color;
        this.#speed=speed;
        this.#wheels=wheels;
    }   
    changeColor(element) {
        element.currentTarget.style.backgroundColor='';
        car_1.style.backgroundColor='blue';
        car.style.backgroundColor='blue';
        }
    changewheels(тык){
        тык.currentTarget.style.backgroundColor='';
        wheel.style.borderColor='black';
        wheel_2.style.borderColor='black'
        }
    }
    let mashina = new Car('red',100,'black')