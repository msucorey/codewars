import React from 'react';
import { factorial } from '../../util/util';

// TODO write test

const numCards = 71;
const numDisasterCards = 4;
const numNonDisasterCards = numCards - numDisasterCards;
const numCardsInHand = 10;
const numPlayers = 6;

const singlePermOddsOf1DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards - 9) * factorial(numDisasterCards) / factorial (numDisasterCards - 1) * factorial(numCards - 10) / factorial(numCards);
const singlePermOddsOf2DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards - 8) * factorial(numDisasterCards) / factorial (numDisasterCards - 2) * factorial(numCards - 10) / factorial(numCards);
const singlePermOddsOf3DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards - 7) * factorial(numDisasterCards) / factorial (numDisasterCards - 3) * factorial(numCards - 10) / factorial(numCards);
const singlePermOddsOf4DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards - 6) * factorial(numDisasterCards) * factorial(numCards - 10) / factorial(numCards);

const numCombs91Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 1) / factorial(1);
const numCombs82Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 2) / factorial(2);
const numCombs73Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 3) / factorial(3);
const numCombs64Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 4) / factorial(4);

const overallOddsOf1DC = singlePermOddsOf1DC * numCombs91Mix;
const overallOddsOf2DC = singlePermOddsOf2DC * numCombs82Mix;
const overallOddsOf3DC = singlePermOddsOf3DC * numCombs73Mix;
const overallOddsOf4DC = singlePermOddsOf4DC * numCombs64Mix;

const overallOddsOf0DC = 1 - overallOddsOf1DC - overallOddsOf2DC - overallOddsOf3DC - overallOddsOf4DC;

const anyPlayerOddsOf1DC = 1 - (1 - overallOddsOf1DC) ** numPlayers;
const anyPlayerOddsOf2DC = 1 - (1 - overallOddsOf2DC) ** numPlayers;
const anyPlayerOddsOf3DC = 1 - (1 - overallOddsOf3DC) ** numPlayers;
const anyPlayerOddsOf4DC = 1 - (1 - overallOddsOf4DC) ** numPlayers;

console.log('overallOddsOf0DC', overallOddsOf0DC);
console.log('overallOddsOf1DC', overallOddsOf1DC);
console.log('overallOddsOf2DC', overallOddsOf2DC);
console.log('overallOddsOf3DC', overallOddsOf3DC);
console.log('overallOddsOf4DC', overallOddsOf4DC);
console.log('anyPlayerOddsOf1DC', anyPlayerOddsOf1DC);
console.log('anyPlayerOddsOf2DC', anyPlayerOddsOf2DC);
console.log('anyPlayerOddsOf3DC', anyPlayerOddsOf3DC);
console.log('anyPlayerOddsOf4DC', anyPlayerOddsOf4DC);

const HistoryOfTheWorld = () => <div className="about">{overallOddsOf3DC}</div>;

export default HistoryOfTheWorld;