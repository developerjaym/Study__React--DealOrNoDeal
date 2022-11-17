import Suitcase from "./Suitcase";
import "./SuitcaseList.css";

export default function SuitcaseList({ suitcases, onSuitcaseChosen, over }) {
  return (
    <div className="suitcase-list">
      {suitcases.map((suitcase) => (
        <Suitcase
          over={over}
          key={suitcase.number}
          suitcase={suitcase}
          onSuitcaseChosen={onSuitcaseChosen}
        />
      ))}
    </div>
  );
}
