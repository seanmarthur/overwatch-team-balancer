import templateUrl from './lobby.html';
import testData from '../players/testData.json';
import Player from '../players/Player.model';
import Team from '../teams/Team.model';
class controller {
    /* @ngInject*/
    constructor(teamBalanceService) {
        Object.assign(this, {teamBalanceService});

        this.Team1 = new Team("The Meme Team");
        this.Team1.Color = 'blue';

        this.Team2 = new Team("The Weeb Team");
        this.Team2.Color = 'red';

        this.teamFlag = true;
    }
    playerFound (player) {
        this.addPlayerToTeam(player);
    }
    loadTestData () {
        let testPlayers = _.sampleSize(Object.keys(testData), 12);

        _.map(testPlayers, (battleTag) => new Player(battleTag, testData[battleTag]))
            .forEach(this.addPlayerToTeam, this);
    }
    addPlayerToTeam (player) {
        if(!this.Team1.hasPlayer(player) && !this.Team2.hasPlayer(player)) {
            // Flip between adding to each team. If a team is full, add to the other team.
            if(this.teamFlag) {
                let added = this.Team1.addPlayer(player);
                if(!added) {
                    this.Team2.addPlayer(player)
                }
            }
            else {
                let added = this.Team2.addPlayer(player);
                if(!added) {
                    this.Team1.addPlayer(player)
                }
            }
            // Flip so next player goes into other team
            this.teamFlag = !this.teamFlag;
        }
    }
}

export default {
    templateUrl,
    controller
}
