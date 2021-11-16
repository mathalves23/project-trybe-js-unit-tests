const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails === 'function');
    // Teste se o retorno da função é um array.
    // Source: https://jestjs.io/pt-BR/docs/expect#tobeinstanceofclass
    expect(productDetails('product1','product2')).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('product1','product2').length).toBe(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const products = productDetails('product1', 'product2');
    for (let index = 0; index < products.length; index += 1){
    expect(typeof products[index]).toBe('object')}
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Source: https://jestjs.io/pt-BR/docs/expect#toequalvalue
    expect(products[0]).not.toEqual(products[1]);
    // Teste se os dois productIds terminam com 123.
    // Source: https://www.w3schools.com/jsref/jsref_endswith.asp
    expect(products[0].details.productId.endsWith('123')).toBe(true);
    expect(products[1].details.productId.endsWith('123')).toBe(true);
  });
});
