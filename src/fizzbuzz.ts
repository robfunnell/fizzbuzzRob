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