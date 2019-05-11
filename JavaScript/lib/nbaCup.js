'use strict';

function nbaCup(resultSheet, toFind) {
  if (toFind === '') return '';

  var gameScores = resultSheet.split(',');
  var teamRecords = {};

  var isFloat = function isFloat(number) {
    return number % 1 !== 0;
  };

  gameScores.forEach(function (gameScore) {
    var elements = gameScore.split(' ');
    var firstScore = null,
        secondScore = null;

    elements.forEach(function (element) {
      if (!isNaN(element)) {
        if (firstScore) {
          secondScore = +element;
        } else {
          firstScore = +element;
        }
      }
    });
    var scoreError = isFloat(firstScore) || isFloat(secondScore);
    var firstTeam = gameScore.split(firstScore)[0].trim();
    var secondTeam = gameScore.split(firstScore)[1].split(secondScore)[0].trim();
    [firstTeam, secondTeam].forEach(function (team) {
      if (!teamRecords[team]) {
        teamRecords[team] = {
          wins: 0,
          draws: 0,
          losses: 0,
          scored: 0,
          conceded: 0,
          points: 0,
          error: scoreError && gameScore || null
        };
      }
    });
    var addUpTeamPoints = function addUpTeamPoints(team, pointsFor, pointsAgainst) {
      teamRecords[team].scored += pointsFor;
      teamRecords[team].conceded += pointsAgainst;
    };
    var tallyWinsLosses = function tallyWinsLosses(winningTeam, losingTeam) {
      var tie = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (tie) {
        teamRecords[winningTeam].draws += 1;
        teamRecords[losingTeam].draws += 1;
        teamRecords[winningTeam].points += 1;
        teamRecords[losingTeam].points += 1;
      } else {
        teamRecords[winningTeam].wins += 1;
        teamRecords[winningTeam].points += 3;
        teamRecords[losingTeam].losses += 1;
      }
    };
    addUpTeamPoints(firstTeam, firstScore, secondScore);
    addUpTeamPoints(secondTeam, secondScore, firstScore);
    if (firstScore > secondScore) {
      tallyWinsLosses(firstTeam, secondTeam);
    } else {
      tallyWinsLosses(secondTeam, firstTeam, firstScore === secondScore);
    }
  });

  var teamToFind = teamRecords[toFind];

  if (teamToFind) {
    if (teamToFind.error) return 'Error(float number):' + teamToFind.error;
    var wins = teamToFind.wins,
        draws = teamToFind.draws,
        losses = teamToFind.losses,
        scored = teamToFind.scored,
        conceded = teamToFind.conceded,
        points = teamToFind.points;

    return toFind + ':W=' + wins + ';D=' + draws + ';L=' + losses + ';Scored=' + scored + ';Conceded=' + conceded + ';Points=' + points;
  }
  return toFind + ':This team didn\'t play!';
}

var r1 = 'Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,' + 'Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94,' + 'Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106,' + 'Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95,' + 'Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94,' + 'Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95,' + 'Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,';
var r2 = 'San Antonio Spurs 111 Houston Rockets 86,Chicago Bulls 103 Dallas Mavericks 102,Minnesota Timberwolves 112 Milwaukee Bucks 108,' + 'New Orleans Pelicans 93 Miami Heat 90,Boston Celtics 81 Philadelphia 76ers 65,Detroit Pistons 115 Atlanta Hawks 87,' + 'Toronto Raptors 92 Washington Wizards 82,Orlando Magic 86 Memphis Grizzlies 76,Los Angeles Clippers 115 Portland Trail Blazers 109,' + 'Los Angeles Lakers 97 Golden State Warriors 136,Utah Jazz 98 Denver Nuggets 78,Boston Celtics 99 New York Knicks 85,' + 'Indiana Pacers 98 Charlotte Hornets 86,Dallas Mavericks 87 Phoenix Suns 99,Atlanta Hawks 81 Memphis Grizzlies 82,' + 'Miami Heat 110 Washington Wizards 105,Detroit Pistons 94 Charlotte Hornets 99,Orlando Magic 110 New Orleans Pelicans 107,' + 'Los Angeles Clippers 130 Golden State Warriors 95,Utah Jazz 102 Oklahoma City Thunder 113,San Antonio Spurs 84 Phoenix Suns 104,' + 'Chicago Bulls 103 Indiana Pacers 94,Milwaukee Bucks 106 Minnesota Timberwolves 88,Los Angeles Lakers 104 Portland Trail Blazers 102,' + 'Houston Rockets 120 New Orleans Pelicans 100,Boston Celtics 111 Brooklyn Nets 105,Charlotte Hornets 94 Chicago Bulls 86,Cleveland Cavaliers 103 Dallas Mavericks 97';
var teams = 'Los Angeles Clippers,Dallas Mavericks,New York Knicks,NYK,Atlanta Hawks,Indiana Pacers,Memphis Grizzlies,' + 'Los Angeles Lakers,Minnesota Timberwolves,Phoenix Suns,Portland Trail Blazers,New Orleans Pelicans,' + 'Sacramento Kings,Los Angeles Clippers,Houston Rockets,Denver Nuggets,Cleveland Cavaliers,Milwaukee Bucks,' + 'Oklahoma City Thunder, San Antonio Spurs,Boston Celtics,Philadelphia 76ers,Brooklyn Nets,Chicago Bulls,' + 'Detroit Pistons,Utah Jazz,Miami Heat,Charlotte Hornets,Toronto Raptors,Orlando Magic,Washington Wizards,' + 'Golden State Warriors,Dallas Maver';
var r = r1 + r2;

console.log(r);
console.log(teams);
console.log(nbaCup(r, 'Boston Celtics'));

// Test.describe("nbaCup",function() {
// Test.it("Basic tests",function() {    
//     Test.assertEquals(nbaCup(r, "Boston Celtics"),
//                 "Boston Celtics:W=4;D=0;L=0;Scored=403;Conceded=350;Points=12");
//     Test.assertEquals(nbaCup(r, "Boston Celt"),
//                 "Boston Celt:This team didn't play!");
// })})