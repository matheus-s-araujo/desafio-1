// 1. Considerando que o json abaixo tem registros de vendas de um time comercial, faça
// um programa que leia os dados e calcule a comissão de cada vendedor, seguindo a
// seguinte regra para cada venda:


//  Vendas abaixo de R$100,00 não gera comissão
//  Vendas abaixo de R$500,00 gera 1% de comissão
//  A partir de R$500,00 gera 5% de comissão

import './App.css';

import salesFromServer from "../api/sales.json";
import Sellers from '../components/Sellers/Sellers';

const allSales = [...salesFromServer.vendas];

const salesArray = allSales.reduce((acc, sale) => {
  const name = sale.vendedor;
  const value = sale.valor;

  if (!acc.map[name]) {
    const newSeller = {
      vendedor: name,
      vendas: []
    };

    acc.map[name] = newSeller;
    acc.list.push(newSeller);
  }

  acc.map[name].vendas.push({ valor: value });

  return acc;
}, { map: {}, list: [] }).list;

const App = () => (
  <section className="App">
    <h1 className="App__title">Comissões</h1>
    <h2 className="App__subtitle">Visão Geral da Equipe</h2>
    <p className="App__text">Acompanhe todos os vendedores, suas vendas e o total de comissão acumulada.</p>

    {salesArray.map((seller, index) => (
      <Sellers key={index} allSales={seller} />
    ))}
  </section>
);

export default App;