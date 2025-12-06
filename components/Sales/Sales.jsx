import "./Sales.css";

function commissionCalculate(value) {
  if (value < 100) {
    return {
      percentual: 0,
      comissao: 0,
    };
  }

  if (value < 500) {
    return {
      percentual: 1,
      comissao: value * 0.01,
    };
  }

  return {
    percentual: 5,
    comissao: value * 0.05,
  };
}

const Sales = ({ sale, index }) => {
  const { percentual, comissao } = commissionCalculate(sale.valor);

  return (
    <li key={index} className="sales-list__sale">
      <p className="sales-list__sale-value">Valor: R$ {sale.valor}</p>

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
