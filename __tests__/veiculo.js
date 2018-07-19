'use strict'

import test from 'ava'
import Leite from './..'

let leite

test.beforeEach(() => {
  leite = new Leite()
})

test('ano', t => {
  const expect = leite.veiculo.ano()
  t.is(typeof expect, 'number')
})

test('tipo', t => {
  const expect = leite.veiculo.tipo()
  t.is(typeof expect, 'string')
})

test('restricao', t => {
  const expect = leite.veiculo.restricao()
  t.is(typeof expect, 'string')
})

test('renavam', t => {
  const expect = leite.veiculo.renavam()
  t.is(typeof expect, 'string')
})

test('placa', t => {
  const expect = leite.veiculo.placa()
  t.is(typeof expect, 'string')
})

test.todo('placa - verifica composicao da string')

test('modelo', t => {
  const expect = leite.veiculo.modelo()
  t.is(typeof expect, 'string')
})

test('marca', t => {
  const expect = leite.veiculo.marca()
  t.is(typeof expect, 'string')
})

test('testa se marcaModelo é um objeto definido', t => {
  const marcaModelo = leite.veiculo.marcaModelo()
  t.is(typeof marcaModelo, 'object')
  t.is(typeof marcaModelo.marca, 'string')
  t.is(typeof marcaModelo.modelo, 'string')
})

test('especie', t => {
  const expect = leite.veiculo.especie()
  t.is(typeof expect, 'string')
})

test('combustivel', t => {
  const expect = leite.veiculo.combustivel()
  t.is(typeof expect, 'string')
})

test('categoria', t => {
  const expect = leite.veiculo.categoria()
  t.is(typeof expect, 'string')
})

test('carroceria', t => {
  const expect = leite.veiculo.carroceria()
  t.is(typeof expect, 'string')
})

test('cor', t => {
  const expect = leite.veiculo.cor()
  t.is(typeof expect, 'string')
})
