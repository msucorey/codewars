
/**
John and his wife Ann have decided to go to Codewars.

On first day Ann will do one kata and John - he wants to know how it is working - 0 kata.

Let us call a(n) - and j(n) - the number of katas done by Ann - and John - at day n. We have a(0) = 1 and in the same manner j(0) = 0.

They have chosen the following rules:

On day n the number of katas done by Ann should be n minus the number of katas done by John at day t, t being equal to the number of katas done by Ann herself at day n - 1.

On day n the number of katas done by John should be n minus the number of katas done by Ann at day t, t being equal to the number of katas done by John himself at day n - 1.

Whoops! I think they need to lay out a little clearer exactly what there're getting themselves into!

Could you write:
1) two functions ann and john (parameter n) giving the list of the numbers of katas Ann and John should take on the first n days (see first examples below)?
2) The total number of katas taken by ann function sum_ann(n) and john function sum_john(n) - on the first n days?

@see https://www.codewars.com/kata/57591ef494aba64d14000526
 */

const johnMemo = {};
const annMemo = {};

const johnDay = n => {
  if (n === 0) return 0;

  if (!johnMemo[n]) johnMemo[n] = n - annDay(johnDay(n - 1));

  return johnMemo[n];
}

const annDay = n => {
  if (n === 0) return 1;

  if (!annMemo[n]) annMemo[n] = n - johnDay(annDay(n - 1));

  return annMemo[n];
}

const ann = n => {
  const result = [];

  for (let i = 0; i < n; i++) result.push(annDay(i));

  return result;
}

const john = n => {
  const result = [];

  for (let i = 0; i < n; i++) result.push(johnDay(i));

  return result;
}

const sumJohn = n => john(n).reduce((accum, next) => accum + next);

const sumAnn = n => ann(n).reduce((accum, next) => accum + next);

export { john, ann, sumJohn, sumAnn };
