export default class Player {
    constructor(battleTag, data) {
        this.BattleTag = battleTag;
        if(data) {
            var avatar, sr, tier;
            if(data.us) {
                var {
                    stats: {
                        competitive: {
                            overall_stats: {
                                avatar: avatar,
                                comprank: sr,
                                tier: tier
                            }
                        }
                    }
                } = data.us;
            }
            else if(data.eu) {
                var {
                    stats: {
                        competitive: {
                            overall_stats: {
                                avatar: avatar,
                                comprank: sr,
                                tier: tier
                            }
                        }
                    }
                } = data.eu;
            }
            else if(data.kr) {
                var {
                    stats: {
                        competitive: {
                            overall_stats: {
                                avatar: avatar,
                                comprank: sr,
                                tier: tier
                            }
                        }
                    }
                } = data.kr;
            }

            this.AvatarUrl = avatar;
            this.SR = sr;
            this.Tier = tier;
        }
    }
}