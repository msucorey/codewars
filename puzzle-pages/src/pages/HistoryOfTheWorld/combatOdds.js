const combatOdds = ({ numAttDice = 2, numDefDice = 1, attBonus = 0, defBonus = 0, attWinTies = false }) => {
  const facesOfSixSidedDie = [1, 2, 3, 4, 5, 6]
  const ad1 = [...facesOfSixSidedDie];
  const ad2 = [...facesOfSixSidedDie];
  const ad3 = numAttDice === 3 ? [...facesOfSixSidedDie] : [0];
  const dd1 = [...facesOfSixSidedDie];
  const dd2 = numDefDice > 1 ? [...facesOfSixSidedDie] : [0];
  const dd3 = numDefDice === 3 ? [...facesOfSixSidedDie] : [0];

  let numCases = 0;
  let attWinCount = 0;
  let tieCount = 0;
  let defWinCount = 0;

  for (let a1 of ad1) {
    for (let a2 of ad2) {
      for (let a3 of ad3) {
        for (let d1 of dd1) {
          for (let d2 of dd2) {
            for (let d3 of dd3) {
              numCases++;
              const attackerBestDie = Math.max(a1, a2, a3) + attBonus;
              const defenderBestDie = Math.max(d1, d2, d3) + defBonus;
              switch (true) {
                case attackerBestDie > defenderBestDie:
                  attWinCount++;
                  break;
                case attackerBestDie < defenderBestDie:
                  defWinCount++;
                  break;
                case attWinTies:
                  attWinCount++;
                  break;
                default:
                  tieCount++;
                  break;
              }
            }
          }
        }
      }
    }
  }
  const attOdds = attWinCount / numCases;
  const tieOdds = tieCount / numCases;
  const defOdds = defWinCount / numCases;
  console.log(attOdds.toFixed(2), tieOdds.toFixed(2), defOdds.toFixed(2), `| ${numAttDice}${attBonus ? ' +1 to roll': ' '}${attWinTies ? ' winning ties ' : ' '}vs. ${numDefDice} ${defBonus ? '+1 to roll' : ''}`);

}

for (let numAttDice of [2, 3]) {
  for (let numDefDice of [1, 2, 3]) {
    console.log('*********', numAttDice, ' ATTACKING ', numDefDice, '*********');
    for (let attBonus of [0, 1]) {
      for (let defBonus of [0, 1]) {
        for (let attWinTies of [false, true]) {
          combatOdds({ numAttDice, numDefDice, attBonus, defBonus, attWinTies });
        }
      }
    }
  }
}

// export default combatOdds;