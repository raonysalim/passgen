import GenPass from "./genPass"

export default class html{
    constructor(){

    }   

    checkBox(){
        const result = document.querySelector(".result")
        const button = document.querySelector('.button')
        const numeros = document.querySelector('.escolherNumero')
        let addNumeros = document.querySelector('.numeros')
        let letrasMaiusculas = document.querySelector('.letrasMaiusculas')
        let letrasMinusculas = document.querySelector('.letrasMinusculas')
        let especial = document.querySelector('.caracteresEspeciais')


        const genPass = new GenPass
        
        button.addEventListener("click", (e)=>{
        e.preventDefault()
        genPass.checkNum = addNumeros.checked
        genPass.checkCharUp= letrasMaiusculas.checked
        genPass.checkCharLo = letrasMinusculas.checked
        genPass.checkSpe = especial.checked
        if(!addNumeros.checked && !letrasMaiusculas.checked && !letrasMinusculas.checked && !especial.checked){
            result.innerText = 'Selecione pelo menos UM campo!' 
            result.className = 'erro'
            return 
        }
        result.innerText = String(genPass.fatiarSenha(numeros.value)).replaceAll(',', '')
        result.className = 'certo'
        })
    }

}

