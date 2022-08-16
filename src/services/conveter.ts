const numbers = [
  {eng: 'e', mm: 'E'},
  {eng: '0', mm: '၀'},
  {eng: '1', mm: '၁'},
  {eng: '2', mm: '၂'},
  {eng: '3', mm: '၃'},
  {eng: '4', mm: '၄'},
  {eng: '5', mm: '၅'},
  {eng: '6', mm: '၆'},
  {eng: '7', mm: '၇'},
  {eng: '8', mm: '၈'},
  {eng: '9', mm: '၉'},
];

export const convertToMyanmar = (input: string) => {
  return input
    .split('')
    .map(num => {
      const result = numbers.find(val => val.eng === num);
      return result ? result.mm : num;
    })
    .join('');
};
