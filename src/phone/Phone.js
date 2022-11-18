import "./Phone.css"

export default function Phone({state, onPhoneAnswered}) {
    return (<div className="phone-area"><button disabled={state !== "PONDERING_OFFER"} className="phone" onClick={onPhoneAnswered}>☎</button></div>);
}