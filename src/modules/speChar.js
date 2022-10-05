import RandomNum from './randomNum'
export default class SpeChar{
    constructor(){
        this.speChar = "/!@#$%¨&*_-+?"
        this.speCharLength = 30
        this.resultNum = ""
        
    }

    randomSpe(){
        const randomNum = new RandomNum
        this.result = ''
        for(let i = 0; i<this.speCharLength;i++){
            this.result += this.speChar[randomNum.randomNum(0,12)]
            }
        return this.result
    }
}