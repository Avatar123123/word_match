


export const wordData = [
  { firstWord: 'Apple', secondWord: 'Seed' },
  { firstWord: 'Banana', secondWord: 'Yellow' },
  { firstWord: 'Books', secondWord: 'Pages' },
  { firstWord: 'Sugar', secondWord: 'Glucose' }
];

export let firstWordList = wordData.map(({ firstWord }) => firstWord);
export let secondWordList = wordData.map(({ secondWord }) => secondWord);

firstWordList.sort();
secondWordList.sort();