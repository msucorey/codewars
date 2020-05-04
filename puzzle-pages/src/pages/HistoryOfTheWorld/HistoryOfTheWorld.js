import React from 'react';
import { factorial } from '../../util/util';

// TODO write test

const numCards = 71;
const numDisasterCards = 4;
const numNonDisasterCards = numCards - numDisasterCards;
const numCardsInHand = 10;
const numPlayers = 6;

const singlePermOddsOf3DC = factorial(numNonDisasterCards) / factorial(numNonDisasterCards - 7) * factorial(numDisasterCards) / factorial (numDisasterCards - 3) * factorial(numCards - 10) / factorial(numCards);

const numCombs73Mix = factorial(numCardsInHand) / factorial(numCardsInHand - 3) / factorial(3);

const overallOddsOf3DC = singlePermOddsOf3DC * numCombs73Mix;

const anyPlayerOddsOf3DC = 1 - (1 - overallOddsOf3DC) ** numPlayers;

console.log('overallOddsOf3DC', overallOddsOf3DC);
console.log('anyPlayerOddsOf3DC', anyPlayerOddsOf3DC);

const HistoryOfTheWorld = () => <div className="about">{overallOddsOf3DC}</div>;

export default HistoryOfTheWorld;