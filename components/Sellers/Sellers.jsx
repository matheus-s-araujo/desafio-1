import "./Sellers.css";
import Sales from "../Sales/Sales";

const Sellers = ({ allSales }) => {
  return (
    <div className="seller_performance">
      <h2 className="seller_name">{allSales.vendedor}</h2>

      <ul className="sales-list">
        {allSales.vendas.map((sale, index) => (
          <Sales sale={sale} index={index} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Sellers;
