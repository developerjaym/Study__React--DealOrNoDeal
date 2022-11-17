import { useState } from "react";
import "./App.css";
import Banker from "./banker/Banker";
import Guidance from "./guidance/Guidance";
import Header from "./header/Header";
import SuitcaseList from "./suitcases/SuitcaseList";
import initialStateSupplier from "./utility/InitialStateSupplier";
import RULES from "./utility/Rules";

function App() {
  const [game, setGame] = useState(initialStateSupplier());

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
    <div className="App">
      <Header />

      <Banker
        over={game.state === "OVER" || game.roundData.number === 7}
        state={game.state}
        amounts={game.suitcases
          .filter((suitcase) => !suitcase.open || suitcase.firstChoice)
          .map((suitcase) => suitcase.amount)}
        onOfferResponse={onOfferResponse}
      />
      <div className="app__audience"></div>

      <Guidance
        state={game.state}
        bankerOffers={game.bankerOffers}
        roundData={game.roundData}
        rules={RULES}
        onRestart={() => setGame(initialStateSupplier())}
      />

      <SuitcaseList
        over={game.state === "OVER" || game.roundData.number === 8}
        suitcases={game.suitcases}
        onSuitcaseChosen={onSuitcaseChosen}
      />
    </div>
  );
}

export default App;
