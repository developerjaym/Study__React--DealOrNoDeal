const shuffled = arr => {
    let shuffledArray = [];
    while(arr.length) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      let randomElement = arr[randomIndex];
      shuffledArray.push(randomElement);
      arr.splice(randomIndex, 1);
    }
    return shuffledArray;
  };

export default function suitcaseRandomizer() {
    const amounts = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
    const shuffledAmounts = shuffled(shuffled(amounts));
    const cases = [
        {
          number: 1,
          model: 'lucy',
          open: false
        },
        {
          number: 2,
          model: 'lucy',
          open: false
        },
        {
          number: 3,
          model: 'lucy',
          open: false
        },
        {
          number: 4,
          model: 'lucy',
          open: false
        },
        {
          number: 5,
          model: 'lucy',
          open: false
        },
        {
          number: 6,
          model: 'lucy',
          open: false
        },
        {
          number: 7,
          model: 'lucy',
          open: false
        },
        {
          number: 8,
          model: 'lucy',
          open: false
        },
        {
          number: 9,
          model: 'lucy',
          open: false
        },
        {
          number: 10,
          model: 'lucy',
          open: false
        },
        {
          number: 11,
          model: 'lucy',
          open: false
        },
        {
          number: 12,
          model: 'lucy',
          open: false
        },
        {
          number: 13,
          model: 'lucy',
          open: false
        },
        {
          number: 14,
          model: 'lucy',
          open: false
        },
        {
          number: 15,
          model: 'lucy',
          open: false
        },
        {
          number: 16,
          model: 'lucy',
          open: false
        },
        {
          number: 17,
          model: 'lucy',
          open: false
        },
        {
          number: 18,
          model: 'lucy',
          open: false
        },
        {
          number: 19,
          model: 'lucy',
          open: false
        },
        {
          number: 20,
          model: 'lucy',
          open: false
        },
        {
          number: 21,
          model: 'lucy',
          open: false
        },
        {
          number: 22,
          model: 'lucy',
          open: false
        },
        {
          number: 23,
          model: 'lucy',
          open: false
        },
        {
          number: 24,
          model: 'lucy',
          open: false
        },
        {
          number: 25,
          model: 'lucy',
          open: false
        },
        {
          number: 26,
          model: 'lucy',
          open: false
        },
      ]
      return cases.map((c, i) => {return {...c, amount: shuffledAmounts[i]}});
}