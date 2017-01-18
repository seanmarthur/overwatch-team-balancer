export default class Player {
    constructor(battleTag, data) {
        this.BattleTag = battleTag;
        if(data) {
            var {
                us: {
                    stats: {
                        competitive: {
                            overall_stats: {
                                avatar: avatar,
                                comprank: sr,
                                tier: tier
                            }
                        }
                    }
                }
            } = data;
            this.AvatarUrl = avatar;
            this.SR = sr
            this.Tier = tier;
        }
    }
}