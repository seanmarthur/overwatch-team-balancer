import templateUrl from './player.html';
import './player.scss';
class controller {
    constructor() {
        
    }
}

export default {
    templateUrl,
    controller,
    bindings: {
        player: '<',
        team: '<',
        onRemove: '&'
    }
}
