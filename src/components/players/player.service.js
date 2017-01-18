import testData from './testData.json';

import Player from './Player.model';

export default class playerService {
    /* @ngInject*/
    constructor($q, $http) {
        Object.assign(this, {$q, $http});

        this.endPointBase = 'https://owapi.net/api/v3/u/';
    }

    getPlayer (battleTag) {
        let parsedTag = this.parseBattleTag(battleTag);
        return (testData[parsedTag] ? this.$q.when({data: testData[parsedTag]}) : this.$http.get(`${this.endPointBase}${parsedTag}/stats`, {
            cache: true
        }))
            .then(response => new Player(battleTag, response.data))
            .catch(() => null);
    }

    parseBattleTag (tag) {
        return tag.replace("#", "-");
    }
}