import { convertToUpperCase, capitalizeWords } from './strings'

describe('Converting to uppercase', () => {
  test('"paraguai" => "PARAGUAI"', () => {
    expect(convertToUpperCase('paraguai')).toBe('PARAGUAI')
  })

  test('"Brasil" => "BRASIL"', () => {
    expect(convertToUpperCase('Brasil')).toBe('BRASIL')
  })

  test('" Brasil" => "BRASIL"', () => {
    expect(convertToUpperCase(' Brasil')).toBe('BRASIL')
  })
})

describe('Capitalize words', () => {
  expect(typeof capitalizeWords).toBe('function')

  it('expect "márcio" to be "Márcio"', () => {
    expect(capitalizeWords('márcio')).toBe('Márcio')
  })

  it('expect "maria" to be "Maria"', () => {
    expect(capitalizeWords('maria')).toBe('Maria')
  })

  it('expect " márcio " to be "Márcio"', () => {
    expect(capitalizeWords(' márcio ')).toBe('Márcio')
  })
})

describe('Capitalize phrases', () => {
  it('expect "meu canário belga" to be "Meu Canário Belga"', () => {
    expect(capitalizeWords('meu canário belga')).toBe('Meu Canário Belga')
  })

  it('expect "meu canário belga" to be "Meu Canário Belga"', () => {
    expect(capitalizeWords('meu canário belga')).toBe('Meu Canário Belga')
  })

  it('expect "frederico o cantor" to be "Frederico o Cantor"', () => {
    expect(capitalizeWords('frederico o cantor')).toBe('Frederico o Cantor')
  })

  it('expect "o cantor frederico" to be " O Cantor Frederico"', () => {
    expect(capitalizeWords('o cantor frederico')).toBe('O Cantor Frederico')
  })
})
