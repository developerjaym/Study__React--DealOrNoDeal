import { useState } from "react";
import "./App.css";
import Banker from "./banker/Banker";
import Guidance from "./guidance/Guidance";
import Header from "./header/Header";
import Phone from "./phone/Phone";
import SuitcaseList from "./suitcases/SuitcaseList";
import initialStateSupplier from "./utility/InitialStateSupplier";
import RULES from "./utility/Rules";
import SOUND from "./phone/phone.wav";
import Share from "./share/Share";

function App() {
  const [game, setGame] = useState(initialStateSupplier());
  const [bankerVisible, setBankerVisible] = useState(false);

  const onSuitcaseChosen = (num) => {
    const suitcase = game.suitcases.find((suitcase) => suitcase.number === num);
    if (game.state === "PONDERING_OFFER") {
      return;
    }
    if (suitcase.open) {
      return;
    } else if (
      game.roundData.suitcasesChosen >=
      RULES[Number(game.roundData.number)].canChoose
    ) {
      return;
    } else if (game.roundData.number === 0) {
      suitcase.firstChoice = true;
      suitcase.open = true;
    } else {
      suitcase.open = true;
    }

    const suitcasesChosen = game.roundData.suitcasesChosen + 1;
    let state = game.state;
    const bankerOffers = [...game.bankerOffers];
    if (suitcasesChosen === RULES[Number(game.roundData.number)].canChoose) {
      state = "PONDERING_OFFER";
      new Audio(SOUND).play();
    }
    setGame({
      ...game,
      bankerOffers,
      state,
      suitcases: [...game.suitcases],
      roundData: {
        ...game.roundData,
        suitcasesChosen,
      },
    });
  };

  const onOfferResponse = (offer) => {
    setBankerVisible(false);
    const bankerOffers = [...game.bankerOffers, offer];
    if (offer.accepted) {
      setGame({
        ...game,
        bankerOffers,
        state: "OVER",
      });
    } else {
      const round = game.roundData.number + 1;
      setGame({
        ...game,
        bankerOffers,
        state: "CHOOSING",
        roundData: {
          number: round,
          suitcasesChosen: 0,
        },
      });
    }
  };

  return (
    <>
      <div className="App slide-in">
        <Header />
        <SuitcaseList
          over={game.state === "OVER" || game.roundData.number === 8}
          suitcases={game.suitcases}
          onSuitcaseChosen={onSuitcaseChosen}
        />

        <Guidance
          state={game.state}
          bankerOffers={game.bankerOffers}
          roundData={game.roundData}
          rules={RULES}
          onRestart={() => setGame(initialStateSupplier())}
        />
        {game.state !== "OVER" ? (
          <Phone
            state={game.state}
            onPhoneAnswered={() => setBankerVisible(true)}
          />
        ) : (
          <Share game={game} />
        )}
      </div>
      {bankerVisible & (game.state !== "OVER") ? (
        <Banker
          over={game.state === "OVER" || game.roundData.number === 7}
          state={game.state}
          amounts={game.suitcases
            .filter((suitcase) => !suitcase.open || suitcase.firstChoice)
            .map((suitcase) => suitcase.amount)}
          onOfferResponse={onOfferResponse}
        />
      ) : null}
    </>
  );
}

export default App;
