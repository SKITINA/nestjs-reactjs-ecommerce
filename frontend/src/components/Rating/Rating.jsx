import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating, color }) => {
  return (
    <div>
      <span>
        <FontAwesomeIcon style={{ color }} icon={rating >= 1 ? faStar : rating >= 0.5 ? faStarHalf : ["far", "star"]} />
      </span>
      <span>
        <FontAwesomeIcon style={{ color }} icon={rating >= 2 ? faStar : rating >= 1.5 ? faStarHalf : ["far", "star"]} />
      </span>
      <span>
        <FontAwesomeIcon style={{ color }} icon={rating >= 3 ? faStar : rating >= 2.5 ? faStarHalf : ["far", "star"]} />
      </span>
      <span>
        <FontAwesomeIcon style={{ color }} icon={rating >= 4 ? faStar : rating >= 3.5 ? faStarHalf : ["far", "star"]} />
      </span>
      <span>
        <FontAwesomeIcon style={{ color }} icon={rating >= 5 ? faStar : rating >= 4.5 ? faStarHalf : ["far", "star"]} />
      </span>
    </div>
  );
};

export default Rating;
