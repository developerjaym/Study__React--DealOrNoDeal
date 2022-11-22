import "./Suitcase.css";
import format from "../utility/NumberFormatter"
export default function Suitcase({ suitcase, onSuitcaseChosen, over }) {

  return (
    <div
      id={`suitcase${suitcase.number}`}
      className={`suitcase ${
        suitcase.firstChoice ? "suitcase--first-choice" : ""
      } ${suitcase.open ? "suitcase--open expand" : "suitcase--closed"}` } onClick={(e) => onSuitcaseChosen(suitcase.number)}
    >
        {(suitcase.open && !suitcase.firstChoice) || over
          ? `$${format(suitcase.amount)}`
          : '?'}
    </div>
  );
}
