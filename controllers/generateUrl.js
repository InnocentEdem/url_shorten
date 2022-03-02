const urlService = require('../services/urlService')

const baseCode = 97;
const algos = [0,1,2];
const useUrlService = new urlService();
const generate_new_url = ()=>{
    let newUrl= "";

    const genChar = ()=> String.fromCharCode(baseCode + Math.floor(Math.random() * 25))
    const genNum = () => (Math.floor(Math.random() * 9)+1).toString();
    const genNumOrChar = () => Math.floor(Math.random() * 2);
    const reverseNewUrl = (input)=> Array.from(input).reverse().join("");
    
    for(let i = 0; i < 3; i++){
    
        if (genNumOrChar() === 0){
            newUrl += genNum()
        }
        else{
            newUrl += genChar() 
        }
    }
    let i = 0
    while(!useUrlService.checkUnique()){

        const strategy = Math.floor(Math.random() * 3).toString()
        console.log(newUrl, strategy)

        switch(strategy){
            case "0": newUrl = reverseNewUrl(newUrl);
            break;
            case "1": newUrl += genNum();
            break;
            case "2": newUrl += genChar();
        }
    }
    return newUrl;
}
module.exports = generate_new_url
