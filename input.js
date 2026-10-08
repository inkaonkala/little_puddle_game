export class Input {

    constructor(player) {
        this.player = player;
        this.keys = {};

        window.addEventListener("keydown", (event) => {
            this.keys[event.code] = true;

            if (["ArrowLeft", "ArrowRight", "Space"].includes(event.code)) {
                event.preventDefault();
            }

            if (event.code === "Space" && !event.repeat) {
                this.player.jump();
            }
        });

        window.addEventListener("keyup", (event) => {
            this.keys[event.code] = false;
        });

        window.addEventListener("blur", () => {
            this.keys = {};
        });
    }

    update() {
        if (this.keys["ArrowLeft"]) {
            this.player.move_left();
        }

        if (this.keys["ArrowRight"]) {
            this.player.move_right();
        }
    }
}