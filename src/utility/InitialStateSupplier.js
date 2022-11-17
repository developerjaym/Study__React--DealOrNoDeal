import suitcaseRandomizer from "./SuitcaseRandomizer";

export default function initialStateSupplier() {
    return {
        state: "CHOOSING",
        roundData: {
          number: 0,
          suitcasesChosen: 0,
        },
        player: {
          name: "Jay",
        },
        bankerOffers: [],
        suitcases: suitcaseRandomizer(),
      }
}