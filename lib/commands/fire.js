const CommandBase = require('../command-base');

class Fire extends CommandBase {
    constructor() {
        super();
        this.name = 'fire';
        this.description = '`fire`: ignite the stove';
    }
    /**
     * @param  {...string} args 
     */
    exec(...args) {
      const fire = (s) => ((Math.random() * 7) | 0) > 0 ? fire(s + "ﾁ") : s + "\\ボ\/";
      const rnd = (Math.random() * 7) | 0;
      return rnd !== 0 ? "エッチコンロ点火！w\n" + fire("ｴ") : ":loser:ﾊｧ……ﾊｧ……敗北者……？";
    }
}

module.exports = Fire;