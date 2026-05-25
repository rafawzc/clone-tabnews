function diminuir(num1, num2){
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'erro'
    } 
    return num1 - num2
  
}
function somar(num1, num2){
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'erro'
    } 
    return num1 + num2
  
}
function multiplicar(num1, num2){
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'erro'
    } 
    return num1 * num2
  
}

  exports.diminuir = diminuir
  exports.somar = somar
  exports.multiplicar = multiplicar