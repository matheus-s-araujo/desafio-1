import "./Sales.css";
import { commissionCalculate } from '../../src/utils/commissionCalculate'


const Sales = ({ sale, index }) => {
  const { percentual, comissao } = commissionCalculate(sale.valor);

  return (
    <li key={index} className="sales-list__sale">
      <p className="sales-list__sale-value">Valor da venda: R$ {sale.valor}</p>

      {percentual > 0 ? (
        <div className="sales-list__sale-commission">
          <p className="sales-list__sale-commission-percentage">
            Comissão: {percentual}%
          </p>

          <p className="sales-list__sale-comission-value">
            Valor da comissão: R$ {comissao.toFixed(2)}
          </p>
        </div>
      ) : (
        <p className="sales-list__sale-no-commission">
          Sem comissão para esta venda
        </p>
      )}
    </li>
  );
};

export default Sales;
