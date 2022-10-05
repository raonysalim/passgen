export default class Num{
    constructor (){
        // this.number = 1234567890
        this.numberLength = 30
    }

    calcRandomNum() {
        this.result = ""
        for(let i = 0; i<this.numberLength;i++){
        this.result += Math.floor(this.randomNum(1,10))
        }
        return this.result
    }

    randomNum(min, max){
        return Math.floor(Math.random() * ((max - min + min) + min))
    }
    
}