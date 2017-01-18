
export default class teamBalanceService {
    /* @ngInject*/
    constructor() {
        Object.assign(this, {});

    }

    balance(team1, team2) {
        let flip = Math.random() > 0.5;
        // Gather all players, sort by SR (index 0 = highest SR)
        let p = [].concat(team1.Players).concat(team2.Players).sort((a, b) => b.SR - a.SR);
        let t1 = [];
        let t2 = [];
        // Randomly assign the top player to a team, then iterate over the players, assigning to each team in turn
        let countPlayers = team1.Players.length + team2.Players.length;
        for(let x = 0; x < countPlayers; x+=2) {
            if(flip) {
                t1.push(p.shift());
                t1.push(p.pop());
            }
            else {
                t2.push(p.shift());
                t2.push(p.pop());
            }
            flip = !flip;
        }
        team1.Players = t1;
        team2.Players = t2;
    }

}