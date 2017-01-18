import templateUrl from './playerInput.html';
class controller {
    /* @ngInject*/
    constructor(playerService) {
        Object.assign(this, {playerService});
        this.searching = false;
        this.noneFound = false;
    }
    addPlayer(battleTag) {
        this.searching = true;
        this.playerService.getPlayer(battleTag).then(player => {
            if(player !== null) {
                this.onLookup({player});
                this.battleTag = '';
                this.noneFound = false;
            }
            else {
                this.noneFound = true;
            }
            this.searching = false;
        })
    }
}

export default {
    templateUrl,
    controller,
    bindings: {
        onLookup: '&',
        inputDisabled: '<'
    }
}
