const CommandBase = require('../command-base');
const regex = /^\d+[Dd]\d+$/;

/**
 * 実行されたらダイスを振る
 */
class Dice extends CommandBase {
    constructor() {
        super();
        this.name = 'dice';
        this.description = '`dice [input]`: Roll the dice for the given [input]';
    }
    /**
     * @param  {...string} args 
     */
    exec(...args) {
        const roll = args[0];
        if(regex.test(roll)) {
            const [times, num] = roll.split(/[dD]/).map(e=>+e);
            if (times > 10 || num > 110) return `The number is too large`;
            if (times <= 0 || num <= 0) return `cannot use 0`;
            const res = [];
            for (let i = 0;i < times;i++) {
                res.push(Math.ceil(Math.random()*num));
            }
            return res.join(' ');
        } else {
            return 'Follow the format (exp. 1d6 or 1D6)';
        }
    }
}

module.exports = Dice;