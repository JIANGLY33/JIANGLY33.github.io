class Game {
    constructor() {
        this.setup();
    }

    setup() {
        this.initSize();
        this.initScenes();
    }

    initData() {
        this.data = config.data();
        this.data.end = false;
    }

    //初始化界面大小
    initSize() {
        const el = $('#app');
        //从配置文件中读取界面大小
        style(
            el, {
                width: config.game.w + 'px',
                height: config.game.h + 'px',
            }
        );
    }

    //初始化各个场景
    //初始化一个场景需要传入Div标签元素和Game对象
    initScenes() {
        this.scenes = {
            start: new Start('#start', this),
            play: new Play('#play', this),
            over: new Over('#over', this),
            rank: new Rank('#rank', this),
        }
    }

    //切换场景
    toggleScene(scene) {
      //若当前场景与要切换的场景相同则无需切换
        if (this.scene === this.scenes[scene]) {
            return;
        }
        Object.keys(this.scenes).map(key => {
            this.scenes[key].hidden();
        });
        this.scene && this.scene.uninstall();
        this.scene = this.scenes[scene];
        this.scene.show();
        this.scene.setup();
    }

    start() {
        this.toggleScene('start');
    }

    play() {
        this.toggleScene('play');
    }

    over() {
        this.toggleScene('over');
    }

    rank() {
        this.toggleScene('rank');
    }

}
