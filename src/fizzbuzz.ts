export function fizzbuzz(testNumber: number) {
  let thing = '';
  if (testNumber % 3 === 0) {
    thing += 'fizz';
  }
  if (testNumber % 5 === 0) {
    thing += 'buzz';
  }
  return thing || testNumber;
}

export function fizzbuzzRange(rangeNumber: number) {
  let numberArray = [];
  let counter = 1;
  while (counter <= rangeNumber) {
    numberArray.push(counter);
    counter++;
  }
  const fizzbuzzArray = numberArray.map(number => {
    return fizzbuzz(number);
  });
  return fizzbuzzArray;
};