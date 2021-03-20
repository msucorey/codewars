/**
Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

@see https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/
 */

const beeramid = (bonus: number, price: number) => {
  let allTheBeersIhaveLeft = Math.floor(bonus / price);
  let currentBeeramidHeight = 0;
  let thereMayBeEnoughForAnotherLevel = true;

  while (allTheBeersIhaveLeft && thereMayBeEnoughForAnotherLevel) {
    const numberOfCansItWouldTakeToBuildTheNextLevel = (currentBeeramidHeight + 1) ** 2;

    if (allTheBeersIhaveLeft >= numberOfCansItWouldTakeToBuildTheNextLevel) {
      allTheBeersIhaveLeft -= numberOfCansItWouldTakeToBuildTheNextLevel;
      currentBeeramidHeight++;
    } else thereMayBeEnoughForAnotherLevel = false;
  }

  return currentBeeramidHeight;
}

export { beeramid };
