import "./Portfolio.scss";

const Portfolio = ({ title, description, children }) => {
  return (
    <div className="portfolio">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="cards-container">{children}</div>
    </div>
  );
};

export default Portfolio;
