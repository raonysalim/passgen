import RandomNum from './randomNum'
export default class char{
    constructor(){
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charLength = 30
    } 
        calcCharUp(){
                const randomNum = new RandomNum
                this.result = ""
                for ( var i = 0; i < this.charLength; i++ ) {
                this.result += this.characters[randomNum.randomNum(0,25)]
                }
                return this.result
        }

        calcCharLo(){
             this.result = this.calcCharUp()
             return this.result.toLowerCase()
        }
    }    
