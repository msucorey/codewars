const combatOdds = ({ numAttDice, numDefDice, attBonus, defBonus, attWinTies }) => {
  console.log('let us calculate some odds');
    const facesOfSixSidedDie = [1, 2, 3, 4, 5, 6]
  const ad1 = [...facesOfSixSidedDie];
    const ad2 = [...facesOfSixSidedDie];
    const ad3 = numAttDice === 3 ? [...facesOfSixSidedDie] : [0];
    const dd1 = [...facesOfSixSidedDie];
    const dd2 = numDefDice === 2 ? [...facesOfSixSidedDie] : [0];
    const dd3 = numDefDice === 3 ? [...facesOfSixSidedDie] : [0];

    let attWinCount = 0;
    let tieCount = 0;
    let defWinCount = 0;

    for (a1 in ad1) {
      for (a2 in ad2) {
        for (a3 in ad3) {
          for (d1 in dd1) {
            for (d2 in dd2) {
              for (d3 in dd3) {
                console.log('a1', a1);
              }
            }
          }
        }
      }
    }
}

combatOdds({ numAttDice: 1, numDefDice: 1 })

// export default combatOdds;