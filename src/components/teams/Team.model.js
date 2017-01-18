export default class Team {
    constructor(name) {
        this.Name = name;
        this.Players = [];
    }
    get averageSR() {
        if(this.Players.length === 0) {
            return 0;
        }
        let tot = 0;
        this.Players.forEach(p => {
            tot += p.SR;
        });
        return Math.round(tot/this.Players.length);
    }
    get teamRank() {
        if(this.averageSR < 1500) {
            return "bronze";
        }
        if(this.averageSR < 2000) {
            return "silver";
        }
        if(this.averageSR < 2500) {
            return "gold";
        }
        if(this.averageSR < 3000) {
            return "platinum";
        }
        if(this.averageSR < 3500) {
            return "diamond";
        }
        if(this.averageSR < 4000) {
            return "master";
        }
        return "grandmaster";
    }
    get full() {
        return this.Players.length >= 6;
    }
    addPlayer (player) {
        if(this.Players.length < 6) {
            this.Players.push(player);
            return true;
        }
        return false;
    }

    hasPlayer (player) {
        return _.some(this.Players, {BattleTag: player.BattleTag});
    }
}