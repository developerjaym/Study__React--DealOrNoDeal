import "./Banker.css";
import format from "../utility/NumberFormatter";

export default function Banker({ state, amounts, onOfferResponse, over }) {
  const randomCoefficient =
    0.9 -
    Math.random() *
      Math.random() *
      Math.random() *
      Math.random() *
      Math.random() *
      Math.random() *
      Math.random() *
      Math.random() *
      Math.random();
  const offerAmount =
    amounts.length === 26
      ? 5000
      : amounts.length === 1
      ? amounts[0]
      : Math.ceil(
          (amounts.reduce((pre, cur) => pre + cur, 0.0) / amounts.length) *
            randomCoefficient
        );

  const onYes = (e) => {
    onOfferResponse({
      amount: offerAmount,
      accepted: true,
    });
  };
  const onNo = (e) => {
    onOfferResponse({
      amount: offerAmount,
      accepted: false,
    });
  };
  return (
    <div className="banker expand">
      <h2 className="banker__header">BANKER</h2>
      <div className="banker__offer">
      <div className="banker__offer-header">
        The Offer
      </div>
      <div className="banker__offer-amount">
        {state === "PONDERING_OFFER" ? `$${format(offerAmount)}` : null}
      </div>
      </div>
      <menu className="banker-offer__menu">
        <button
          className="menu-button menu-button--positive"
          disabled={state !== "PONDERING_OFFER"}
          title="Accept this offer and end the game."
          onClick={onYes}
        >
          👍
        </button>
        <button
          className="menu-button menu-button--negative"
          disabled={state !== "PONDERING_OFFER" || over}
          title="Decline this offer and keep playing."
          onClick={onNo}
        >
          👎
        </button>
      </menu>
    </div>
  );
}
