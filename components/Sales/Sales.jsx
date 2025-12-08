import "./Sales.css";
import { commissionCalculate } from '../../src/utils/commissionCalculate'


const Sales = ({ sale, index }) => {
  const { percentual, comissao } = commissionCalculate(sale.valor);

  return (
    <li key={index} className="sales-list__sale">
      <div className="sales-info sales-list__sale-value"> 
        <p className="sales-info__text">Venda</p> 
        <p className="sales-info__text">R$ {sale.valor}</p> 
      </div>

      {percentual > 0 ? (
        <div className="sales-list__sale-commission">
          <div className="sales-info sales-list__sale-commission-percentage">
            <p className="sales-info__text">Comissão</p> 
            <p className="sales-info__text">{percentual}%</p> 
          </div>

          <div className="sales-info sales-list__sale-comission-value">
            <p className="sales-info__text">Ganho</p> 
            <p className="sales-info__text">R$ {comissao.toFixed(2)}</p> 
          </div>
        </div>
      ) : (
        <div className="sales-info sales-list__sale-no-commission">
          <p>Sem comissão para esta venda</p>
        </div>
      )}
    </li>
  );
};

export default Sales;
