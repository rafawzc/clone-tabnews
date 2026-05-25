  const calculadora = require("../../models/calculadora.js")

  test("diminuir", () => {
    const resultado = calculadora.diminuir(5, 4)
    expect(resultado).toBe(1)
  }) 
  
  test("diminuir", () => {
    const resultado = calculadora.diminuir(5, 100)
    expect(resultado).toBe(-95)
  })

   test("diminuir", () => {
    const resultado = calculadora.diminuir('algo', 4)
    expect(resultado).toBe('erro')
  })

   test("somar", () => {
    const resultado = calculadora.somar('algo', 4)
    expect(resultado).toBe('erro')
  })

   test("somar", () => {
    const resultado = calculadora.somar(2, 2)
    expect(resultado).toBe(4)
  })

  test("multiplicar", () => {
    const resultado = calculadora.multiplicar('algo', 4)
    expect(resultado).toBe('erro')
  })

   test("multiplicar", () => {
    const resultado = calculadora.multiplicar(2, 2)
    expect(resultado).toBe(4)
  })