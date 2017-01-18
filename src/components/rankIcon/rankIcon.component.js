import icons from './icons.json';
import templateUrl from './rankIcon.html';
import './rankIcon.scss';
class controller {
    constructor() {
        this.icons = icons;
    }
}

export default {
    templateUrl,
    controller,
    bindings: {
        sr: '<',
        rank: '<'
    }
}
