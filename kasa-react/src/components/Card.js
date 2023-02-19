import { useNavigate } from "react-router-dom";

const Card = ({ logement }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${logement.id}`);
  };
  return (
    <article onClick={handleClick} className="card">
      <h2 className="card__title">{logement.title}</h2>
      <img src={logement.cover} alt="location" />
    </article>
  );
};

export default Card;
