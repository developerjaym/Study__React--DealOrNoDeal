import "./Guidance.css"
import format from "../utility/NumberFormatter"

export default function Guidance({state, bankerOffers, rules, roundData, onRestart}) {
   return (<div className="guidance">
        {state === "PONDERING_OFFER"
          ? `Accept ${roundData.number !== 7 ? 'or Decline' : ''}`
          : state === "OVER"
          ? (<>{`
            You won
            $${format(bankerOffers.find((offer) => offer.accepted).amount)}!
        `}  <button className="reset-link" onClick={onRestart}>Restart</button></>)
          : `Choose ${
              rules[Number(roundData.number)].canChoose -
              roundData.suitcasesChosen
            } case(s)`}
      </div>)
}