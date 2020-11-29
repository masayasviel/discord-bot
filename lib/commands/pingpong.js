const CommandBase = require('../command-base');

/**
 * 実行されたら「pong!」と返す
 */
class Pingpong extends CommandBase {
    constructor() {
        super();
        this.name = 'ping';
        this.description = '`ping`: let\'s play pingpong!';
    }
    /**
     * @param  {...string} args 
     */
    exec(...args) {
        return 'pong!';
    }
}

module.exports = Pingpong;