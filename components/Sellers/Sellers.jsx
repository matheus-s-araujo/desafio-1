import "./Sellers.css";
import Sales from "../Sales/Sales";
import { useState } from "react";
import { commissionCalculate } from "../../src/utils/commissionCalculate";

const Sellers = ({ allSales }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalComissao = allSales.vendas.reduce((acc, sale) => {
    const result = commissionCalculate(sale.valor);
    return acc + result.comissao;
  }, 0);

  return (
    <div className="seller-performance">
      <div
        className="seller-performance_person"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        <h2 className="seller-performance_person-name">{allSales.vendedor}</h2>

        <div className="seller-performance_person-comission">
          <span>Comissão Total</span>
          <span>R$ {totalComissao.toFixed(2)}</span>
        </div>
      </div>

      {isOpen && (
        <ul className="seller-performance_person-sales-list">
          {allSales.vendas.map((sale, index) => (
            <Sales sale={sale} index={index} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sellers;
