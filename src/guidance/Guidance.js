import "./Guidance.css";
import format from "../utility/NumberFormatter";

export default function Guidance({
  state,
  bankerOffers,
  rules,
  roundData,
  onRestart,
}) {
  return (
    <div className="guidance">
      {state === "PONDERING_OFFER" ? (
        `The Banker's calling. Answer the phone. ☟`
      ) : state === "OVER" ? (
        <>
          {`
            You won
            $${format(bankerOffers.find((offer) => offer.accepted).amount)}!
        `}{" "}
          <button className="reset-link" onClick={onRestart}>
            Restart
          </button>
        </>
      ) : (
        `Choose ${
          rules[Number(roundData.number)].canChoose - roundData.suitcasesChosen
        } box(es)`
      )}
      {
        state !== "OVER" ?
        <details className="guidance-details">
        <summary className="guidance-summary">
          ?
        </summary>
        <ul>
          <li>There are 26 boxes above, each with 1 cent to 1 million dollars inside.</li>
          <li>To begin, you select one box. That golden box is yours.</li>
          <li>Each round, you will reveal the contents of other boxes.</li>
          <li>At the end of each round, the banker will offer to buy your golden box.</li>
          <li>You can take the banker's offer and end the game OR keep playing.</li>
        </ul>
      </details>
      : null
      }
    </div>
  );
}
