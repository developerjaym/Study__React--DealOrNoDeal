import "./Banker.css";
import format from "../utility/NumberFormatter"


export default function Banker({ state, amounts, onOfferResponse, over }) {
  const offerAmount = amounts.length === 26 ? 5000 : amounts.length === 1 ? amounts[0] : Math.ceil((amounts.reduce((pre, cur) => pre + cur, 0.00) / amounts.length) * 0.75);

  const onYes = e => {
    onOfferResponse({
        amount: offerAmount,
        accepted: true
    })
  }
  const onNo = e => {
    onOfferResponse({
        amount: offerAmount,
        accepted: false
    })
  }
  return (
    <div className="banker">
    <h2 className="banker__header">BANKER</h2>
      <div className="banker__offer">
        {state === "PONDERING_OFFER" ? `$${format(offerAmount)}` : null}
      </div>
      <menu  className="banker-offer__menu">
        <button className="menu-button menu-button--positive" disabled={state !== "PONDERING_OFFER"} onClick={onYes}>👍</button><button  className="menu-button menu-button--negative" disabled={state !== "PONDERING_OFFER" || over} onClick={onNo}>👎</button>
      </menu>
    </div>
  );
}
