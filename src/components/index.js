import shell from './shell/shell.component';

import rankIcon from './rankIcon/rankIcon.component';

import playerService from './players/player.service';
import player from './players/player.component';
import playerInput from './players/playerInput.component';

import team from './teams/team.component';
import teamBalanceService from './teams/teamBalance.service';

import lobby from './lobby/lobby.component';

export default angular.module('ow.components', [])
    .component('shell', shell)
    .component('rankIcon', rankIcon)
    .service('playerService', playerService)
    .component('player', player)
    .component('playerInput', playerInput)
    .component('team', team)
    .service('teamBalanceService', teamBalanceService)
    .component('lobby', lobby)
    .name;