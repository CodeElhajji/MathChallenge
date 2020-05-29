new Vue({
    el: "#app",
    data: {
        palyername: '',
        inputpalyername: '',
        level: 1,
        Fnumber: Math.floor((Math.random() * 100)),
        snumber: Math.floor((Math.random() * 10)),
        inputvalue: '',
        userrepence: '',
        mathtype: "*",
        alertfalse: false,
        alerttrue: false,
        alertrequared: false,
        Chanse: 3
    },
    methods: {
        chekinput: function () {
            if (this.Fnumber * this.snumber == this.inputvalue) {
                var bravo = new Audio('../son/bravo.mp3'); // path to file
                // bravo.play();
                this.userrepence = this.inputvalue, this.alertfalse = false, this.alerttrue = true, this.level = this.level + 1, this.snumber = Math.floor((Math.random() * 10)), this.Fnumber = Math.floor((Math.random() * 100)), this.inputvalue = ''
            } else {
                var oops = new Audio('../son/false.mp3'); // path to file
                // oops.play();
                this.alertfalse = true, this.alerttrue = false, this.Chanse = this.Chanse - 1
                if (this.Chanse < 1) {
                    window.location.replace("./gameover.html");
                    this.palyername = null,
                        this.inputpalyername = '',
                        this.level = 1,
                        this.Fnumber = Math.floor((Math.random() * 100)),
                        this.snumber = Math.floor((Math.random() * 10)),
                        this.inputvalue = '',
                        this.userrepence = '',
                        this.alertfalse = false,
                        this.alerttrue = false,
                        this.alertrequared = false,
                        this.Chanse = 3
                }
            };
        },
        startgame() {
            if (this.inputpalyername != '') {
                this.palyername = this.inputpalyername
                this.alertrequared = false
                var timing = new Audio('../son/temps.mp3'); // path to file
                // timing.play();
            } else {
                this.alertrequared = true
            }

        }
    },
});