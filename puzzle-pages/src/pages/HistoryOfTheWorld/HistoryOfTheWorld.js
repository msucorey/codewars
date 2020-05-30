import * as React from 'react';
import { factorial } from '../../util/util';

// TODO write test

const numCards = 49;
const numDisasterCards = 4;
const numNonDisasterCards = numCards - numDisasterCards;
const numCardsInHand = 7;
const numPlayers = 6;

const singlePermOddsOf1DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards + 1 - numCardsInHand) * factorial(numDisasterCards) / factorial (numDisasterCards - 1) * factorial(numCards - numCardsInHand) / factorial(numCards);
const singlePermOddsOf2DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards + 2 - numCardsInHand) * factorial(numDisasterCards) / factorial (numDisasterCards - 2) * factorial(numCards - numCardsInHand) / factorial(numCards);
const singlePermOddsOf3DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards + 3 - numCardsInHand) * factorial(numDisasterCards) / factorial (numDisasterCards - 3) * factorial(numCards - numCardsInHand) / factorial(numCards);
const singlePermOddsOf4DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards + 4 - numCardsInHand) * factorial(numDisasterCards) * factorial(numCards - numCardsInHand) / factorial(numCards);

const numCombs61Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 1) / factorial(1);
const numCombs52Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 2) / factorial(2);
const numCombs43Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 3) / factorial(3);
const numCombs34Mix = numCombs43Mix;

const oddsOf1DC = singlePermOddsOf1DC * numCombs61Mix;
const oddsOf2DC = singlePermOddsOf2DC * numCombs52Mix;
const oddsOf3DC = singlePermOddsOf3DC * numCombs43Mix;
const oddsOf4DC = singlePermOddsOf4DC * numCombs34Mix;

const oddsOf0DC = 1 - oddsOf1DC - oddsOf2DC - oddsOf3DC - oddsOf4DC;

const anyPlayerOddsOf0DC = 1 - (1 - oddsOf0DC) ** numPlayers;
const anyPlayerOddsOf1DC = 1 - (1 - oddsOf1DC) ** numPlayers;
const anyPlayerOddsOf2DC = 1 - (1 - oddsOf2DC) ** numPlayers;
const anyPlayerOddsOf3DC = 1 - (1 - oddsOf3DC) ** numPlayers;
const anyPlayerOddsOf4DC = 1 - (1 - oddsOf4DC) ** numPlayers;

console.log('oddsOf0DC', oddsOf0DC);
console.log('oddsOf1DC', oddsOf1DC);
console.log('oddsOf2DC', oddsOf2DC);
console.log('oddsOf3DC', oddsOf3DC);
console.log('oddsOf4DC', oddsOf4DC);
console.log('anyPlayerOddsOf0DC', anyPlayerOddsOf0DC);
console.log('anyPlayerOddsOf1DC', anyPlayerOddsOf1DC);
console.log('anyPlayerOddsOf2DC', anyPlayerOddsOf2DC);
console.log('anyPlayerOddsOf3DC', anyPlayerOddsOf3DC);
console.log('anyPlayerOddsOf4DC', anyPlayerOddsOf4DC);

const HistoryOfTheWorld = () => <div className="about">{oddsOf3DC}</div>;

export default HistoryOfTheWorld;