


export const wordData = [
  { firstWord: 'Apple', secondWord: 'Seed' },
  { firstWord: 'Banana', secondWord: 'Yellow' },
  { firstWord: 'Books', secondWord: 'Pages' },
  { firstWord: 'Sugar', secondWord: 'Glucose' }
];

// export let firstWordList = [];
// export let secondWordList = [];

// for (let i = 0; i < wordData.length; i++) {
//     const item = wordData[i];
  
//     if (item.firstWord) {
//       firstWordList.push(item.firstWord);
//     }
  
//     if (item.secondWord) {
//       secondWordList.push(item.secondWord);
//     }
//   }


//   firstWordList.sort();
//   secondWordList.sort();
  
export let firstWordList = wordData.map(({ firstWord }) => firstWord);
export let secondWordList = wordData.map(({ secondWord }) => secondWord);

firstWordList.sort();
secondWordList.sort();