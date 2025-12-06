import "./Sellers.css";
import Sales from "../Sales/Sales";
import { useState } from "react";
import { commissionCalculate } from '../../src/utils/commissionCalculate'

const Sellers = ({ allSales }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalComissao = allSales.vendas.reduce((acc, sale) => {
    const result = commissionCalculate(sale.valor);
    return acc + result.comissao;
  }, 0);

  return (
    <div className="seller_performance">
      <h2
        className="seller_performance-name"
        onClick={() => setIsOpen(prev => !prev)}
        style={{ cursor: "pointer" }}
      >
        {allSales.vendedor}
      </h2>

      {isOpen && (
        <ul className="sales-list">
          {allSales.vendas.map((sale, index) => (
            <Sales sale={sale} index={index} key={index} />
          ))}
        </ul>
      )}

      <p className="seller_performance-comission">
        Total ganho de comissão: R$ {totalComissao.toFixed(2)}
      </p>
    </div>
  );
};

export default Sellers;
