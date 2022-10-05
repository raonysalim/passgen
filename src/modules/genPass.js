
import Char from './char';
import Num from './randomNum';
import SpeChar from './speChar';
export default class genPass{
    constructor(){
        this.length = 10
        this.checkNum = false
        this.checkCharUp = false
        this.checkCharLo = false
        this.checkSpe = false

    }

    calcSenha(){
        this.resultNum = ''
        this.resultCharUP = ""
        this.resultChar = ""
        this.resultSpe = ""
        
        if (this.checkNum){
           const num = new Num
        this.resultNum = num.calcRandomNum() 
        }
        
        if (this.checkSpe){
           const speChar = new SpeChar
        this.resultSpe = speChar.randomSpe() 
        }

        const char = new Char
        
        if (this.checkCharUp){
            this.resultCharUP = char.calcCharUp()
        }
        
        if (this.checkCharLo){
          this.resultChar = char.calcCharLo()  
        }
        return this.resultSpe + this.resultCharUP + this.resultChar + this.resultNum
    }

    organizarSenha(){
        const num = new Num
        this.testes = this.calcSenha().split("")
        for (this.teste in this.testes){
            let randomNum = num.randomNum(0, this.testes.length)
            let valor1 = this.testes[this.teste]
            let valor2 = this.testes[randomNum]
            this.testes[randomNum] = valor1
            this.testes[this.teste] = valor2
        } 
        return this.testes
    }

    fatiarSenha(num = 5){
        const fullPass = this.organizarSenha().slice(0,num)
        return fullPass
    }

}


