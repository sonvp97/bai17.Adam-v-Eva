let Apple = function (){
    this.Decrease = function (){
        if (this.weight>0){
        this.weight--;
        }
    };
    this.isEmpty = function (){
    };
    this.getWeight = function (){
        return this.weight = 10;
    };
};
let Human = function (){
    this.isMale = function (){
        this.gender = true;
    };
    this.isfemale = function (){
        this.gender = false;
    };
    this.setGender = function (gender){
        this.gender = gender;
    };
    this.checkApple =function (){
        this.apple = apple;
    };
    this.eat = function (){
        return this.apple.Decrease();
    };
    this.say = function (){
        return prompt('Bạn muốn nói gì');
    };
    this.getName = function (){
        return this.name;
    };
    this.setName = function (name){
        this.name = name

    };
    this.getWeight = function (){
        return this.weight;
    };
    this.setweight = function (weight){
        this.weight = weight;
    };
}
let apple = new Apple();
let human = new Human();
let eva = 'eva';
human.setweight(50);
human.setName(eva);
document.write('Tên human là :' + human.getName()+'<br>'+'Cân nặng của Human là:'+ human.getWeight());
