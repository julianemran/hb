(this.webpackJsonpweb = this.webpackJsonpweb || []).push([[0], {
    195: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = n.p + "static/media/boop.5113a00f.mp3"
    },
    617: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = n.p + "static/media/victory.58c08d6a.mp3"
    },
    618: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = n.p + "static/media/reveal.c34bbaa1.mp3"
    },
    619: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = n.p + "static/media/go.60dd916f.mp3"
    },
    684: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = n.p + "static/media/blipLow.7e6a4078.mp3"
    },
    685: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = n.p + "static/media/blipHigh.88e651f8.mp3"
    },
    741: function(e, t, n) {
        "use strict";
        n.r(t);
        n(342),
        n(352);
        var c = n(1)
          , a = n.n(c)
          , r = n(4)
          , o = n(25)
          , i = n(10)
          , s = n(6)
          , l = n(8)
          , u = n(16)
          , d = n(17)
          , b = n(7)
          , h = n(18)
          , m = function() {
            function e() {
                Object(s.a)(this, e),
                this.audioCtx = void 0,
                this.cmp = void 0,
                this.notes = [],
                this.audioCtx = new (window.AudioContext || window.webkitAudioContext),
                this.cmp = this.audioCtx.createDynamicsCompressor(),
                this.cmp.threshold.setValueAtTime(-10, this.audioCtx.currentTime),
                this.cmp.knee.setValueAtTime(0, this.audioCtx.currentTime),
                this.cmp.ratio.setValueAtTime(100, this.audioCtx.currentTime),
                this.cmp.attack.setValueAtTime(.1, this.audioCtx.currentTime),
                this.cmp.release.setValueAtTime(.25, this.audioCtx.currentTime),
                this.cmp.connect(this.audioCtx.destination)
            }
            return Object(l.a)(e, [{
                key: "playNote",
                value: function(e) {
                    var t = 16.3516 * Math.pow(2, (e + 48) / 12);
                    this.notes.push(new p(t,{
                        a: .008,
                        d: 10
                    },this.audioCtx,this.cmp)),
                    this.notes = this.notes.filter((function(e) {
                        return !e.done
                    }
                    ))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.cmp.disconnect(),
                    this.audioCtx.close(),
                    this.notes.forEach((function(e) {
                        return e.destroy
                    }
                    )),
                    this.notes = []
                }
            }]),
            e
        }()
          , p = function() {
            function e(t, n, c, a) {
                var r = this;
                Object(s.a)(this, e),
                this.oscillator = void 0,
                this.volume = void 0,
                this.done = !1,
                this.oscillator = c.createOscillator(),
                this.oscillator.type = "triangle",
                this.oscillator.frequency.setValueAtTime(t, c.currentTime),
                this.oscillator.start(),
                this.volume = c.createGain(),
                this.volume.gain.setValueAtTime(1e-5, c.currentTime),
                this.volume.gain.linearRampToValueAtTime(.1, c.currentTime + n.a),
                this.volume.gain.exponentialRampToValueAtTime(1e-5, c.currentTime + n.d),
                this.volume.gain.linearRampToValueAtTime(1e-5, c.currentTime + n.d + .1),
                this.volume.connect(a),
                setTimeout((function() {
                    return r.destroy()
                }
                ), 1e3 * n.d),
                this.oscillator.connect(this.volume)
            }
            return Object(l.a)(e, [{
                key: "destroy",
                value: function() {
                    this.done = !0,
                    this.volume.disconnect(),
                    this.oscillator.disconnect()
                }
            }]),
            e
        }()
          , f = n(39)
          , O = n.n(f)
          , j = n(166)
          , g = n.n(j)
          , y = {
            reactiontime: [{
                id: 0,
                count: 32
            }, {
                id: 25,
                count: 22
            }, {
                id: 50,
                count: 18
            }, {
                id: 75,
                count: 7
            }, {
                id: 100,
                count: 80
            }, {
                id: 125,
                count: 690
            }, {
                id: 150,
                count: 4593
            }, {
                id: 175,
                count: 12677
            }, {
                id: 200,
                count: 15342
            }, {
                id: 225,
                count: 14149
            }, {
                id: 250,
                count: 9769
            }, {
                id: 275,
                count: 5539
            }, {
                id: 300,
                count: 2813
            }, {
                id: 325,
                count: 1597
            }, {
                id: 350,
                count: 925
            }, {
                id: 375,
                count: 640
            }, {
                id: 400,
                count: 424
            }, {
                id: 425,
                count: 273
            }, {
                id: 450,
                count: 231
            }, {
                id: 475,
                count: 164
            }, {
                id: 500,
                count: 130
            }, {
                id: 525,
                count: 108
            }, {
                id: 550,
                count: 94
            }, {
                id: 575,
                count: 94
            }, {
                id: 600,
                count: 67
            }, {
                id: 625,
                count: 48
            }, {
                id: 650,
                count: 55
            }, {
                id: 675,
                count: 57
            }, {
                id: 700,
                count: 36
            }, {
                id: 725,
                count: 41
            }, {
                id: 750,
                count: 28
            }, {
                id: 775,
                count: 36
            }, {
                id: 800,
                count: 34
            }, {
                id: 825,
                count: 21
            }, {
                id: 850,
                count: 26
            }, {
                id: 875,
                count: 18
            }, {
                id: 900,
                count: 25
            }, {
                id: 925,
                count: 20
            }, {
                id: 950,
                count: 17
            }, {
                id: 975,
                count: 0
            }],
            memory: [{
                id: 0,
                count: 0
            }, {
                id: 1,
                count: 74
            }, {
                id: 2,
                count: 24
            }, {
                id: 3,
                count: 11
            }, {
                id: 4,
                count: 8
            }, {
                id: 5,
                count: 11
            }, {
                id: 6,
                count: 159
            }, {
                id: 7,
                count: 362
            }, {
                id: 8,
                count: 817
            }, {
                id: 9,
                count: 5117
            }, {
                id: 10,
                count: 5268
            }, {
                id: 11,
                count: 4526
            }, {
                id: 12,
                count: 3631
            }, {
                id: 13,
                count: 2691
            }, {
                id: 14,
                count: 3735
            }, {
                id: 15,
                count: 1302
            }, {
                id: 16,
                count: 592
            }, {
                id: 17,
                count: 288
            }, {
                id: 18,
                count: 166
            }, {
                id: 19,
                count: 195
            }, {
                id: 20,
                count: 71
            }, {
                id: 21,
                count: 56
            }, {
                id: 22,
                count: 42
            }, {
                id: 23,
                count: 25
            }, {
                id: 24,
                count: 11
            }, {
                id: 25,
                count: 9
            }, {
                id: 26,
                count: 14
            }, {
                id: 27,
                count: 13
            }, {
                id: 28,
                count: 4
            }, {
                id: 29,
                count: 2
            }, {
                id: 30,
                count: 6
            }, {
                id: 31,
                count: 10
            }, {
                id: 32,
                count: 1
            }, {
                id: 33,
                count: 1
            }, {
                id: 34,
                count: 0
            }, {
                id: 35,
                count: 0
            }, {
                id: 36,
                count: 0
            }, {
                id: 37,
                count: 0
            }, {
                id: 38,
                count: 1
            }, {
                id: 39,
                count: 0
            }],
            "verbal-memory": [{
                id: 0,
                count: 3216
            }, {
                id: 10,
                count: 2591
            }, {
                id: 20,
                count: 3405
            }, {
                id: 30,
                count: 3660
            }, {
                id: 40,
                count: 3285
            }, {
                id: 50,
                count: 2649
            }, {
                id: 60,
                count: 2069
            }, {
                id: 70,
                count: 1515
            }, {
                id: 80,
                count: 1145
            }, {
                id: 90,
                count: 890
            }, {
                id: 100,
                count: 643
            }, {
                id: 110,
                count: 462
            }, {
                id: 120,
                count: 337
            }, {
                id: 130,
                count: 252
            }, {
                id: 140,
                count: 181
            }, {
                id: 150,
                count: 114
            }, {
                id: 160,
                count: 103
            }, {
                id: 170,
                count: 85
            }, {
                id: 180,
                count: 61
            }, {
                id: 190,
                count: 53
            }, {
                id: 200,
                count: 26
            }, {
                id: 210,
                count: 33
            }, {
                id: 220,
                count: 17
            }, {
                id: 230,
                count: 16
            }, {
                id: 240,
                count: 13
            }, {
                id: 250,
                count: 18
            }, {
                id: 260,
                count: 11
            }, {
                id: 270,
                count: 6
            }, {
                id: 280,
                count: 4
            }, {
                id: 290,
                count: 0
            }],
            "number-memory": [{
                id: 0,
                count: 0
            }, {
                id: 1,
                count: 328
            }, {
                id: 2,
                count: 79
            }, {
                id: 3,
                count: 77
            }, {
                id: 4,
                count: 123
            }, {
                id: 5,
                count: 326
            }, {
                id: 6,
                count: 858
            }, {
                id: 7,
                count: 2431
            }, {
                id: 8,
                count: 4396
            }, {
                id: 9,
                count: 5461
            }, {
                id: 10,
                count: 4265
            }, {
                id: 11,
                count: 2798
            }, {
                id: 12,
                count: 1365
            }, {
                id: 13,
                count: 658
            }, {
                id: 14,
                count: 364
            }, {
                id: 15,
                count: 184
            }, {
                id: 16,
                count: 113
            }, {
                id: 17,
                count: 61
            }, {
                id: 18,
                count: 45
            }, {
                id: 19,
                count: 19
            }, {
                id: 20,
                count: 14
            }, {
                id: 21,
                count: 39
            }, {
                id: 22,
                count: 22
            }, {
                id: 23,
                count: 8
            }, {
                id: 24,
                count: 13
            }, {
                id: 25,
                count: 8
            }, {
                id: 26,
                count: 6
            }, {
                id: 27,
                count: 6
            }, {
                id: 28,
                count: 3
            }, {
                id: 29,
                count: 1
            }, {
                id: 30,
                count: 4
            }, {
                id: 31,
                count: 1
            }, {
                id: 32,
                count: 4
            }, {
                id: 33,
                count: 2
            }, {
                id: 34,
                count: 1
            }, {
                id: 35,
                count: 1
            }, {
                id: 36,
                count: 0
            }, {
                id: 37,
                count: 0
            }, {
                id: 38,
                count: 0
            }, {
                id: 39,
                count: 0
            }],
            typing: [{
                id: 0,
                count: 379
            }, {
                id: 10,
                count: 847
            }, {
                id: 20,
                count: 2105
            }, {
                id: 30,
                count: 3133
            }, {
                id: 40,
                count: 3524
            }, {
                id: 50,
                count: 3290
            }, {
                id: 60,
                count: 2820
            }, {
                id: 70,
                count: 2105
            }, {
                id: 80,
                count: 1620
            }, {
                id: 90,
                count: 1022
            }, {
                id: 100,
                count: 672
            }, {
                id: 110,
                count: 349
            }, {
                id: 120,
                count: 178
            }, {
                id: 130,
                count: 56
            }, {
                id: 140,
                count: 22
            }, {
                id: 150,
                count: 13
            }, {
                id: 160,
                count: 4
            }, {
                id: 170,
                count: 2
            }, {
                id: 180,
                count: 2
            }, {
                id: 190,
                count: 0
            }, {
                id: 200,
                count: 0
            }, {
                id: 210,
                count: 0
            }, {
                id: 220,
                count: 1
            }, {
                id: 230,
                count: 0
            }, {
                id: 240,
                count: 0
            }, {
                id: 250,
                count: 0
            }, {
                id: 260,
                count: 0
            }, {
                id: 270,
                count: 0
            }, {
                id: 280,
                count: 0
            }, {
                id: 290,
                count: 0
            }, {
                id: 300,
                count: 1
            }, {
                id: 310,
                count: 0
            }, {
                id: 320,
                count: 0
            }, {
                id: 330,
                count: 0
            }, {
                id: 340,
                count: 1
            }, {
                id: 350,
                count: 0
            }, {
                id: 360,
                count: 1
            }, {
                id: 370,
                count: 1
            }, {
                id: 380,
                count: 0
            }, {
                id: 390,
                count: 0
            }],
            aim: [{
                id: 0,
                count: 20
            }, {
                id: 50,
                count: 23
            }, {
                id: 100,
                count: 7
            }, {
                id: 150,
                count: 5
            }, {
                id: 200,
                count: 9
            }, {
                id: 250,
                count: 337
            }, {
                id: 300,
                count: 3327
            }, {
                id: 350,
                count: 10988
            }, {
                id: 400,
                count: 13222
            }, {
                id: 450,
                count: 12046
            }, {
                id: 500,
                count: 8554
            }, {
                id: 550,
                count: 6249
            }, {
                id: 600,
                count: 3886
            }, {
                id: 650,
                count: 2315
            }, {
                id: 700,
                count: 1242
            }, {
                id: 750,
                count: 802
            }, {
                id: 800,
                count: 543
            }, {
                id: 850,
                count: 405
            }, {
                id: 900,
                count: 283
            }, {
                id: 950,
                count: 195
            }, {
                id: 1e3,
                count: 137
            }, {
                id: 1050,
                count: 101
            }, {
                id: 1100,
                count: 86
            }, {
                id: 1150,
                count: 55
            }, {
                id: 1200,
                count: 40
            }, {
                id: 1250,
                count: 30
            }, {
                id: 1300,
                count: 30
            }, {
                id: 1350,
                count: 23
            }, {
                id: 1400,
                count: 15
            }, {
                id: 1450,
                count: 15
            }, {
                id: 1500,
                count: 7
            }, {
                id: 1550,
                count: 9
            }, {
                id: 1600,
                count: 12
            }, {
                id: 1650,
                count: 9
            }, {
                id: 1700,
                count: 9
            }, {
                id: 1750,
                count: 3
            }, {
                id: 1800,
                count: 9
            }, {
                id: 1850,
                count: 3
            }, {
                id: 1900,
                count: 1
            }, {
                id: 1950,
                count: 0
            }],
            chimp: [{
                id: 0,
                count: 0
            }, {
                id: 1,
                count: 0
            }, {
                id: 2,
                count: 0
            }, {
                id: 3,
                count: 0
            }, {
                id: 4,
                count: 417
            }, {
                id: 5,
                count: 312
            }, {
                id: 6,
                count: 402
            }, {
                id: 7,
                count: 963
            }, {
                id: 8,
                count: 2899
            }, {
                id: 9,
                count: 5410
            }, {
                id: 10,
                count: 5739
            }, {
                id: 11,
                count: 4951
            }, {
                id: 12,
                count: 2700
            }, {
                id: 13,
                count: 1283
            }, {
                id: 14,
                count: 744
            }, {
                id: 15,
                count: 414
            }, {
                id: 16,
                count: 311
            }, {
                id: 17,
                count: 175
            }, {
                id: 18,
                count: 157
            }, {
                id: 19,
                count: 94
            }, {
                id: 20,
                count: 70
            }, {
                id: 21,
                count: 65
            }, {
                id: 22,
                count: 28
            }, {
                id: 23,
                count: 27
            }, {
                id: 24,
                count: 13
            }, {
                id: 25,
                count: 21
            }, {
                id: 26,
                count: 18
            }, {
                id: 27,
                count: 6
            }, {
                id: 28,
                count: 6
            }, {
                id: 29,
                count: 5
            }, {
                id: 30,
                count: 1
            }, {
                id: 31,
                count: 1
            }, {
                id: 32,
                count: 0
            }, {
                id: 33,
                count: 1
            }, {
                id: 34,
                count: 0
            }, {
                id: 35,
                count: 0
            }, {
                id: 36,
                count: 0
            }, {
                id: 37,
                count: 0
            }, {
                id: 38,
                count: 0
            }, {
                id: 39,
                count: 0
            }],
            sequence: [{
                id: 0,
                count: 0
            }, {
                id: 1,
                count: 762
            }, {
                id: 2,
                count: 1447
            }, {
                id: 3,
                count: 623
            }, {
                id: 4,
                count: 602
            }, {
                id: 5,
                count: 1016
            }, {
                id: 6,
                count: 2045
            }, {
                id: 7,
                count: 3294
            }, {
                id: 8,
                count: 4142
            }, {
                id: 9,
                count: 4131
            }, {
                id: 10,
                count: 3775
            }, {
                id: 11,
                count: 3262
            }, {
                id: 12,
                count: 2659
            }, {
                id: 13,
                count: 2074
            }, {
                id: 14,
                count: 1577
            }, {
                id: 15,
                count: 1194
            }, {
                id: 16,
                count: 827
            }, {
                id: 17,
                count: 595
            }, {
                id: 18,
                count: 399
            }, {
                id: 19,
                count: 329
            }, {
                id: 20,
                count: 247
            }, {
                id: 21,
                count: 166
            }, {
                id: 22,
                count: 132
            }, {
                id: 23,
                count: 109
            }, {
                id: 24,
                count: 90
            }, {
                id: 25,
                count: 48
            }, {
                id: 26,
                count: 59
            }, {
                id: 27,
                count: 34
            }, {
                id: 28,
                count: 32
            }, {
                id: 29,
                count: 26
            }, {
                id: 30,
                count: 27
            }, {
                id: 31,
                count: 17
            }, {
                id: 32,
                count: 18
            }, {
                id: 33,
                count: 6
            }, {
                id: 34,
                count: 12
            }, {
                id: 35,
                count: 14
            }, {
                id: 36,
                count: 12
            }, {
                id: 37,
                count: 11
            }, {
                id: 38,
                count: 10
            }, {
                id: 39,
                count: 5
            }, {
                id: 40,
                count: 5
            }, {
                id: 41,
                count: 6
            }, {
                id: 42,
                count: 2
            }, {
                id: 43,
                count: 4
            }, {
                id: 44,
                count: 4
            }, {
                id: 45,
                count: 3
            }, {
                id: 46,
                count: 1
            }, {
                id: 47,
                count: 2
            }, {
                id: 48,
                count: 1
            }, {
                id: 49,
                count: 3
            }, {
                id: 50,
                count: 3
            }, {
                id: 51,
                count: 3
            }, {
                id: 52,
                count: 1
            }, {
                id: 53,
                count: 1
            }, {
                id: 54,
                count: 1
            }, {
                id: 55,
                count: 0
            }, {
                id: 56,
                count: 0
            }, {
                id: 57,
                count: 0
            }, {
                id: 58,
                count: 0
            }, {
                id: 59,
                count: 0
            }]
        }
          , v = "/api/v4";
        var w = g()((function(e) {
            return O.a.get("/api/v4/users/" + e)
        }
        ));
        function k() {
            return O.a.delete("/api/v4/session")
        }
        function x(e) {
            return O.a.post("/api/v4/scores", e)
        }
        var C = g()((function(e) {
            return O.a.get(v + "/users/".concat(e, "/scores"))
        }
        ), {
            maxAge: 5e3
        });
        function T(e, t) {
            return O.a.get(v + "/users/".concat(e, "/tests/").concat(t, "/scores"))
        }
        var I, N = g()((function(e) {
            return Promise.resolve({
                data: y[e]
            })
        }
        ));
        !function(e) {
            e[e.SPLASH = 0] = "SPLASH",
            e[e.PLAYING = 1] = "PLAYING",
            e[e.WAITINGFORANSWER = 2] = "WAITINGFORANSWER",
            e[e.CORRECT = 3] = "CORRECT",
            e[e.INCORRECT = 4] = "INCORRECT"
        }(I || (I = {}));
        var S, M, R = function() {
            function e(t) {
                Object(s.a)(this, e),
                this.onTestChanged = t,
                this.state = I.SPLASH,
                this.hilightedNotes = {},
                this.wrongNotes = {},
                this.rightNotes = {},
                this.synth = void 0,
                this.rootNote = 0,
                this.answerNote = 0,
                this.score = 0,
                this.attempts = 0,
                this.stopped = !1,
                this.saving = !1,
                this.doneSaving = !1
            }
            return Object(l.a)(e, [{
                key: "start",
                value: function() {
                    var e = this;
                    this.synth || (this.synth = new m),
                    this.state = I.PLAYING,
                    this.rootNote = 0,
                    this.answerNote = Math.floor(1 + 12 * Math.random()),
                    setTimeout((function() {
                        e.stopped || (e.resetNotes(),
                        e.hilightedNotes = {
                            0: !0
                        },
                        e.synth.playNote(e.rootNote),
                        e.onTestChanged())
                    }
                    ), 300),
                    setTimeout((function() {
                        e.stopped || (e.synth.playNote(e.answerNote),
                        e.state = I.WAITINGFORANSWER,
                        e.onTestChanged())
                    }
                    ), 800),
                    this.onTestChanged()
                }
            }, {
                key: "resetNotes",
                value: function() {
                    this.hilightedNotes = {},
                    this.rightNotes = {},
                    this.wrongNotes = {}
                }
            }, {
                key: "keyDown",
                value: function(e) {
                    var t = this;
                    this.synth || (this.synth = new m),
                    this.synth.playNote(e),
                    this.state === I.WAITINGFORANSWER && (e === this.answerNote ? (this.score += 1,
                    this.attempts += 1,
                    this.state = I.CORRECT,
                    this.rightNotes = Object(h.a)({}, this.answerNote, !0)) : (this.attempts += 1,
                    this.state = I.INCORRECT,
                    this.rightNotes = Object(h.a)({}, this.answerNote, !0),
                    this.wrongNotes = Object(h.a)({}, e, !0)),
                    setTimeout((function() {
                        t.stopped || (t.resetNotes(),
                        t.onTestChanged(),
                        setTimeout((function() {
                            t.stopped || t.start()
                        }
                        ), 500))
                    }
                    ), 1e3)),
                    this.onTestChanged()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.synth && this.synth.destroy(),
                    this.stopped = !0
                }
            }, {
                key: "save",
                value: function() {
                    this.saving || (x({
                        testId: "interval-trainer",
                        score: this.score / this.attempts * 100
                    }).then(this.onDoneSaving.bind(this)),
                    this.saving = !0,
                    this.onTestChanged())
                }
            }, {
                key: "onDoneSaving",
                value: function() {
                    this.doneSaving = !0,
                    this.onTestChanged()
                }
            }]),
            e
        }(), A = n(77), E = n.n(A), P = n(92), L = n(128), H = n(340), D = n(0), q = "#333", z = "#2B87D1", B = "#ff9345", F = "#ce2636", V = "#4BDB6A", W = "#45b1ff", _ = "#fff", G = "#f2f2f2", U = "black", Z = "#4d9bf0", Y = "#1e81ec", K = "#136ac8", X = "#ffd154", J = "(min-width:500px)", Q = "(min-width:700px)", $ = "10px", ee = "20px", te = 1010, ne = ["children", "height"];
        var ce = Object(b.a)("div", {
            target: "e19owgy70"
        })("width:100%;margin-bottom:20px;> *{margin-bottom:20px;&:last-of-type{margin-bottom:0px;}}@media ", Q, "{display:flex;> *{margin-right:20px;margin-bottom:0px;&:last-child{margin-right:0px;}}}")
          , ae = Object(D.b)("display:block;flex:1;line-height:1;color:", q, " !important;text-decoration:none !important;background:white;padding:20px 0;@media ", Q, "{box-shadow:0 2px 5px rgba(0,0,0,0.1);border-radius:5px;padding:30px;}")
          , re = Object(b.a)("div", {
            target: "e19owgy71"
        })(ae, "")
          , oe = Object(b.a)(i.a, {
            target: "e19owgy72"
        })(ae, " img{width:80px;height:80px;margin:10px 0 30px;}h3{font-weight:bold;font-size:24px;}p{margin:20px 0 10px;line-height:1.4;}transition:transform 0.2s ease-in-out,box-shadow 0.2s ease-in-out;&:hover{transform:translateY(-10px);box-shadow:0 12px 15px rgba(0,0,0,0.07);}")
          , ie = Object(b.a)("div", {
            target: "e19owgy73"
        })({
            name: "1oen1ps",
            styles: "p{margin:15px 0px;line-height:1.7;&:last-child{margin-bottom:0px;}}"
        })
          , se = Object(b.a)("div", {
            target: "e19owgy74"
        })("margin:0 auto;max-width:", te, "px;position:relative;padding:", $, ";@media ", J, "{padding:", ee, ";}")
          , le = Object(b.a)("div", {
            target: "e19owgy75"
        })("margin:0 auto;max-width:", te, "px;padding:0 ", $, ";position:relative;@media ", J, "{padding:0 ", ee, ";}")
          , ue = Object(b.a)(se, {
            target: "e19owgy76"
        })({
            name: "16rwid9",
            styles: "color:#a0a0a0;text-align:right;font-size:14px;line-height:1.7;padding-bottom:30px;a{display:inline-block;}"
        })
          , de = Object(b.a)("div", {
            target: "e19owgy77"
        })("background:", z, ";position:relative;cursor:pointer;color:white;overflow:auto;user-select:none;overflow:hidden;text-align:center;a{color:white;text-decoration:underline;}h1{font-size:6vh;@media ", J, "{font-size:80px;}}h2{font-size:4vh;@media ", J, "{font-size:24px;}}p{font-size:18px;line-height:1.5;}")
          , be = Object(b.a)("div", {
            target: "e19owgy78"
        })({
            name: "1qvtbrk",
            styles: "& + &{margin:30px 0 0 0;}"
        })
          , he = Object(b.a)("div", {
            target: "e19owgy79"
        })("display:flex;flex-direction:column;justify-content:center;margin:0 auto;max-width:", te, "px;height:calc(100vh - 150px);position:relative;padding:", $, ";@media ", J, "{padding:", ee, ";height:540px;}")
          , me = a.a.forwardRef((function(e, t) {
            var n = e.children
              , c = e.height
              , a = Object(H.a)(e, ne);
            return Object(D.c)(de, Object(L.a)({
                ref: t
            }, a, {
                "data-test": !0
            }), Object(D.c)(he, {
                style: {
                    height: c
                }
            }, n))
        }
        ))
          , pe = Object(D.d)(S || (S = Object(P.a)(["\n  0% {\n    background: ", ";\n  }\n  20% {\n    background: #ff6666;\n  }\n  100% {\n    background: ", ";\n  }\n"])), z, z)
          , fe = Object(D.d)(M || (M = Object(P.a)(["\n  0% {\n    background: ", ";\n  }\n  50% {\n    background: #3eb8ff;\n  }\n  100% {\n    background: ", ";\n  }\n"])), z, z)
          , Oe = Object(D.b)("animation:", fe, " 0.5s linear;")
          , je = Object(D.b)("animation:", pe, " 0.5s linear;")
          , ge = {
            name: "16iqw5x",
            styles: "font-size:24px;"
        };
        function ye(e) {
            return Object(D.c)(a.a.Fragment, null, Object(D.c)("div", {
                css: ge
            }, e.label), Object(D.c)("h1", {
                css: Object(D.b)(e.type && "secondary" === e.type ? "font-size: 40px !important; " : "", "")
            }, e.value))
        }
        var ve = Object(D.b)("padding:12px 30px;color:", q, " !important;background:", X, ";text-decoration:none !important;display:inline-block;border:none;border-radius:3px;transition:background 0.1s linear;font-weight:bold;cursor:pointer;font-size:inherit;font-family:inherit;line-height:inherit;&:hover{background:white;}&.secondary{background:rgba(255,255,255,0.5);&:hover{background:white;}}&:disabled{background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.3) !important;cursor:unset;}")
          , we = Object(b.a)("button", {
            target: "e19owgy710"
        })(ve, "")
          , ke = Object(b.a)(i.a, {
            target: "e19owgy711"
        })(ve, "")
          , xe = Object(b.a)("input", {
            target: "e19owgy712"
        })("appearance:none;border:none;color:white !important;cursor:pointer;padding:12px;background:", Z, ";border-bottom:4px solid ", Y, ";&:hover{background:", Y, ";border-bottom:4px solid ", K, ";}&:disabled{background:#bbb;border-color:#999;cursor:default;}")
          , Ce = Object(b.a)("span", {
            target: "e19owgy713"
        })({
            name: "v9w44u",
            styles: "color:red;font-size:12px;"
        })
          , Te = {
            name: "dd6wi1",
            styles: "font-size:28px;margin:0px 15px;"
        }
          , Ie = {
            name: "yuq7ce",
            styles: "margin-right:10px;opacity:0.6;"
        };
        function Ne(e) {
            return Object(D.c)("span", {
                css: Te
            }, Object(D.c)("span", {
                css: Ie
            }, e.label), Object(D.c)("span", null, e.value))
        }
        var Se = "black"
          , Me = "#27aae1"
          , Re = "#ef4136"
          , Ae = Object(b.a)(me, {
            target: "eo8b5gy0"
        })(".keyboard{.white-key{fill:white;stroke:", Se, ";&:hover{opacity:0.8;}&.down{fill:", Me, ";}&.right{fill:", Me, ";}&.wrong{fill:", Re, ";}}.black-key{fill:", "black", ";stroke:", Se, ";&:hover{opacity:0.5;}&.down{opacity:", Me, ";}&.right{fill:", Me, ";}&.wrong{fill:", Re, ";}}}")
          , Ee = function(e) {
            Object(u.a)(n, e);
            var t = Object(d.a)(n);
            function n(e) {
                var c;
                return Object(s.a)(this, n),
                (c = t.call(this, e)).state = {
                    game: new R((function() {
                        return c.forceUpdate()
                    }
                    ))
                },
                c
            }
            return Object(l.a)(n, [{
                key: "componentWillUnmount",
                value: function() {
                    this.state.game.destroy()
                }
            }, {
                key: "containerClasses",
                value: function() {
                    return "anim-" + I[this.state.game.state].toLowerCase()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.state.game;
                    function n(e) {
                        return E()({
                            down: t.hilightedNotes[e],
                            wrong: t.wrongNotes[e],
                            right: t.rightNotes[e]
                        })
                    }
                    return Object(D.c)(Ae, {
                        className: "test-standard  " + this.containerClasses()
                    }, Object(D.c)("div", {
                        className: "test-standard-inner inner anim-slide-fade-in"
                    }, t.state === I.SPLASH && Object(D.c)("div", null, Object(D.c)(be, null, Object(D.c)("h1", null, "Interval Trainer"), Object(D.c)("h2", null, "Train your ear to hear musical intervals.")), Object(D.c)(be, null, Object(D.c)(we, {
                        onClick: function() {
                            return t.start()
                        }
                    }, "Start"))), t.state !== I.SPLASH && Object(D.c)("div", null, Object(D.c)(be, null, Object(D.c)("p", null, "Identify the top note in the interval."), Object(D.c)("h2", null, Object(D.c)("span", {
                        className: "faint-label"
                    }, t.score, " / ", t.attempts, " ="), " ", t.attempts > 0 ? (t.score / t.attempts * 100).toFixed() : 0, "%")), Object(D.c)(be, {
                        className: "keyboard"
                    }, Object(D.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 217 91"
                    }, Object(D.c)("polygon", {
                        className: "white-key " + n(0),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(0)
                        },
                        points: "18.5 54.5 18.5 0.5 0.5 0.5 0.5 90.5 27.5 90.5 27.5 54.5 18.5 54.5"
                    }), Object(D.c)("polygon", {
                        className: "white-key " + n(2),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(2)
                        },
                        points: "45.5 54.5 45.5 0.5 36.5 0.5 36.5 54.5 27.5 54.5 27.5 90.5 54.5 90.5 54.5 54.5 45.5 54.5"
                    }), Object(D.c)("polygon", {
                        className: "white-key " + n(4),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(4)
                        },
                        points: "63.5 54.5 63.5 0.5 81.5 0.5 81.5 90.5 54.5 90.5 54.5 54.5 63.5 54.5"
                    }), Object(D.c)("polygon", {
                        className: "white-key " + n(5),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(5)
                        },
                        points: "99.5 54.5 99.5 0.5 81.5 0.5 81.5 90.5 108.5 90.5 108.5 54.5 99.5 54.5"
                    }), Object(D.c)("polygon", {
                        className: "white-key " + n(7),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(7)
                        },
                        points: "126.5 54.5 126.5 0.5 117.5 0.5 117.5 54.5 108.5 54.5 108.5 90.5 135.5 90.5 135.5 54.5 126.5 54.5"
                    }), Object(D.c)("polygon", {
                        className: "white-key " + n(9),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(9)
                        },
                        points: "153.5 54.5 153.5 0.5 144.5 0.5 144.5 54.5 135.5 54.5 135.5 90.5 162.5 90.5 162.5 54.5 153.5 54.5"
                    }), Object(D.c)("polygon", {
                        className: "white-key " + n(11),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(11)
                        },
                        points: "171.5 54.5 171.5 0.5 189.5 0.5 189.5 90.5 162.5 90.5 162.5 54.5 171.5 54.5"
                    }), Object(D.c)("rect", {
                        className: "white-key " + n(12),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(12)
                        },
                        x: "189.5",
                        y: "0.5",
                        width: "27",
                        height: "90"
                    }), Object(D.c)("rect", {
                        className: "black-key " + n(1),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(1)
                        },
                        x: "18.5",
                        y: "0.5",
                        width: "18",
                        height: "54"
                    }), Object(D.c)("rect", {
                        className: "black-key " + n(3),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(3)
                        },
                        x: "45.5",
                        y: "0.5",
                        width: "18",
                        height: "54"
                    }), Object(D.c)("rect", {
                        className: "black-key " + n(6),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(6)
                        },
                        x: "99.5",
                        y: "0.5",
                        width: "18",
                        height: "54"
                    }), Object(D.c)("rect", {
                        className: "black-key " + n(8),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(8)
                        },
                        x: "126.5",
                        y: "0.5",
                        width: "18",
                        height: "54"
                    }), Object(D.c)("rect", {
                        className: "black-key " + n(10),
                        onMouseDown: function(t) {
                            return e.state.game.keyDown(10)
                        },
                        x: "153.5",
                        y: "0.5",
                        width: "18",
                        height: "54"
                    }))), Object(D.c)(be, null, t.attempts < 25 ? Object(D.c)(we, {
                        className: "disabled"
                    }, "Try ", 25, " notes to save your score (or go as long as you like)") : Object(D.c)(we, {
                        onClick: function() {
                            return t.save()
                        }
                    }, "Save")), this.state.game.doneSaving && Object(D.c)(o.a, {
                        push: !0,
                        to: "/dashboard/interval"
                    }))))
                }
            }]),
            n
        }(a.a.Component)
          , Pe = n(24)
          , Le = n(26)
          , He = n(61)
          , De = n.n(He)
          , qe = n(13)
          , ze = !1
          , Be = !0
          , Fe = n(339);
        function Ve(e, t, n) {
            for (var c = [], a = e < t, r = n ? a ? t + 1 : t - 1 : t, o = e; a ? o < r : o > r; a ? o++ : o--)
                c.push(o);
            return c
        }
        var We = function(e) {
            Object(u.a)(n, e);
            var t = Object(d.a)(n);
            function n(e) {
                return Object(s.a)(this, n),
                t.call(this, "Unreachable case: ".concat(e))
            }
            return n
        }(Object(Fe.a)(Error))
          , _e = function(e) {
            e.stopPropagation(),
            e.preventDefault()
        }
          , Ge = n(331)
          , Ue = n.n(Ge);
        function Ze() {
            return Object(D.c)("div", {
                style: {
                    paddingBottom: 20
                }
            })
        }
        function Ye(e) {
            var t = c.useRef(null);
            return c.useEffect((function() {
                var n = t.current;
                return function(e) {
                    try {
                        window.top.__vm_add = window.top.__vm_add || [],
                        window.top.__vm_add.push(e)
                    } catch (t) {}
                }(n),
                function() {
                    e.rich ? function(e) {
                        try {
                            window.top.__vm_remove_category = window.top.__vm_remove_category || [],
                            window.top.__vm_remove_category.push(e)
                        } catch (t) {}
                    }("richmedia_all") : function(e) {
                        try {
                            window.top.__vm_remove = window.top.__vm_remove || [],
                            window.top.__vm_remove.push(e)
                        } catch (t) {}
                    }(n)
                }
            }
            ), [e.rich]),
            e.placementId ? Object(D.c)("div", null, Object(D.c)("div", {
                className: "vm-placement",
                "data-id": e.placementId,
                ref: t
            })) : null
        }
        function Ke() {
            var e = function() {
                var e = a.a.useState(window.innerWidth)
                  , t = Object(r.a)(e, 2)
                  , n = t[0]
                  , c = t[1];
                return a.a.useEffect((function() {
                    function e() {
                        c(window.innerWidth)
                    }
                    return window.addEventListener("resize", e),
                    function() {
                        window.removeEventListener("resize", e)
                    }
                }
                ), []),
                n <= 768
            }();
            return Object(D.c)("div", {
                style: {
                    paddingBottom: 20
                }
            }, e ? Object(D.c)(Ye, {
                key: "mobile",
                placementId: "64ad60654830060ea37bca7a"
            }) : Object(D.c)(Ye, {
                key: "desktop",
                placementId: "64ad605089d72c06fba628de"
            }))
        }
        var Xe = {
            randSeed: Math.random()
        };
        function Je() {
            return ze ? Object(D.c)(Ze, null) : Be ? Object(D.c)(Ke, null) : null
        }
        function Qe() {
            var e = Object(o.g)();
            return ze ? Object(D.c)(se, {
                key: e.location.pathname
            }, Object(D.c)(Ze, null)) : Be ? Object(D.c)(Ke, {
                key: e.location.pathname
            }) : null
        }
        function $e() {
            return null
        }
        var et, tt, nt, ct, at = n(3), rt = n(19), ot = n(57), it = n(47), st = ["title", "titleId"];
        function lt() {
            return (lt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var c in n)
                        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ut(e, t) {
            if (null == e)
                return {};
            var n, c, a = function(e, t) {
                if (null == e)
                    return {};
                var n, c, a = {}, r = Object.keys(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function dt(e, t) {
            var n = e.title
              , a = e.titleId
              , r = ut(e, st);
            return c.createElement("svg", lt({
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": a
            }, r), n ? c.createElement("title", {
                id: a
            }, n) : null, et || (et = c.createElement("rect", {
                width: 58,
                height: 58,
                rx: 10,
                fill: "currentcolor"
            })), tt || (tt = c.createElement("rect", {
                x: 70,
                width: 58,
                height: 58,
                rx: 10,
                fill: "currentcolor"
            })), nt || (nt = c.createElement("rect", {
                y: 70,
                width: 58,
                height: 58,
                rx: 10,
                fill: "currentcolor"
            })), ct || (ct = c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z",
                fill: "currentcolor"
            })))
        }
        var bt, ht = c.forwardRef(dt), mt = (n.p,
        {
            testId: "memory",
            title: "Visual Memory",
            description: "Remember an increasingly large board of squares.",
            units: "points",
            scoreColumnTitle: "Level",
            scoreRowSuffix: "",
            url: "/tests/memory",
            higherIsBetter: !0,
            icon: ht,
            decimalPlaces: 1
        }), pt = ["title", "titleId"];
        function ft() {
            return (ft = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var c in n)
                        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ot(e, t) {
            if (null == e)
                return {};
            var n, c, a = function(e, t) {
                if (null == e)
                    return {};
                var n, c, a = {}, r = Object.keys(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function jt(e, t) {
            var n = e.title
              , a = e.titleId
              , r = Ot(e, pt);
            return c.createElement("svg", ft({
                width: 100,
                height: 128,
                viewBox: "0 0 100 128",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": a
            }, r), n ? c.createElement("title", {
                id: a
            }, n) : null, bt || (bt = c.createElement("path", {
                d: "M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z",
                fill: "currentcolor"
            })))
        }
        var gt, yt = c.forwardRef(jt), vt = (n.p,
        {
            testId: "reactiontime",
            title: "Reaction Time",
            description: "Test your visual reflexes.",
            units: "ms",
            scoreColumnTitle: "Time",
            scoreRowSuffix: "ms",
            url: "/tests/reactiontime",
            higherIsBetter: !1,
            icon: yt,
            decimalPlaces: 0
        }), wt = ["title", "titleId"];
        function kt() {
            return (kt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var c in n)
                        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function xt(e, t) {
            if (null == e)
                return {};
            var n, c, a = function(e, t) {
                if (null == e)
                    return {};
                var n, c, a = {}, r = Object.keys(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function Ct(e, t) {
            var n = e.title
              , a = e.titleId
              , r = xt(e, wt);
            return c.createElement("svg", kt({
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": a
            }, r), n ? c.createElement("title", {
                id: a
            }, n) : null, gt || (gt = c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 0C8.95431 0 0 8.95431 0 20V108C0 119.046 8.95431 128 20 128H108C119.046 128 128 119.046 128 108V20C128 8.95431 119.046 0 108 0H20ZM76.9347 58.1152C77.6244 58.8068 78.4359 59.1525 79.3691 59.1525H102.922C103.856 59.1525 104.647 58.8068 105.296 58.1152C105.986 57.4237 106.331 56.6102 106.331 55.6746V54.2712C106.331 53.3356 105.986 52.522 105.296 51.8305C104.647 51.139 103.856 50.7932 102.922 50.7932H89.5938C89.5532 50.7932 89.5329 50.7729 89.5329 50.7322C89.5329 50.6915 89.5532 50.6508 89.5938 50.6102C96.1262 45.078 100.508 40.7051 102.74 37.4915C105.012 34.2373 106.148 30.8203 106.148 27.2407C106.148 23.0915 104.809 19.8576 102.131 17.539C99.4938 15.1797 95.7204 14 90.811 14C87.4028 14 83.8525 14.4881 80.1603 15.4644C79.146 15.7491 78.3345 16.3186 77.7259 17.1729C77.1173 17.9864 76.813 18.922 76.813 19.9797V22.5424C76.813 23.3559 77.1578 23.9864 77.8476 24.4339C78.5374 24.8814 79.2677 24.9627 80.0386 24.678C83.6903 23.2949 86.7739 22.6034 89.2895 22.6034C93.428 22.6034 95.4973 24.4746 95.4973 28.2169C95.4973 30.9017 94.3815 33.6475 92.1499 36.4542C89.9589 39.261 85.4552 43.3491 78.6388 48.7186C76.813 50.1424 75.9 51.9932 75.9 54.2712V55.6746C75.9 56.6102 76.2449 57.4237 76.9347 58.1152ZM22.4066 32.6712C23.0557 32.9966 23.6643 32.9356 24.2324 32.4882L33.1181 26.0204H33.2398V55.6746C33.2398 56.6102 33.5847 57.4237 34.2744 58.1153C34.9642 58.8068 35.7757 59.1526 36.7089 59.1526H40.5431C41.4763 59.1526 42.2878 58.8068 42.9776 58.1153C43.6673 57.4237 44.0122 56.6102 44.0122 55.6746V18.0882C44.0122 17.1526 43.6673 16.339 42.9776 15.6475C42.2878 14.956 41.4763 14.6102 40.5431 14.6102H36.7089C34.3556 14.6102 32.266 15.2814 30.4402 16.6238L24.2932 21.139C22.4268 22.4814 21.4936 24.3119 21.4936 26.6305V31.0848C21.4936 31.817 21.7979 32.3458 22.4066 32.6712ZM24.4691 77.2068C23.5359 77.2068 22.7244 76.861 22.0346 76.1695C21.3449 75.478 21 74.6644 21 73.7288V72.3254C21 71.3898 21.3449 70.5763 22.0346 69.8848C22.7244 69.1932 23.5359 68.8475 24.4691 68.8475H47.1702C48.1034 68.8475 48.9149 69.1932 49.6047 69.8848C50.2944 70.5763 50.6393 71.3898 50.6393 72.3254V73.7288C50.6393 76.0475 49.7467 77.939 47.9614 79.4034L38.7714 87.0305V87.0915C38.7714 87.1322 38.7917 87.1526 38.8323 87.1526H39.5626C43.0925 87.1526 45.9124 88.2509 48.0223 90.4475C50.1727 92.6441 51.2479 95.6136 51.2479 99.3559C51.2479 104.075 49.8075 107.695 46.9268 110.217C44.046 112.739 39.9075 114 34.5111 114C31.2652 114 27.9787 113.614 24.6517 112.841C23.6779 112.597 22.8664 112.068 22.2172 111.254C21.6086 110.4 21.3043 109.444 21.3043 108.386V106.312C21.3043 105.498 21.6289 104.868 22.2781 104.42C22.9678 103.932 23.7185 103.81 24.5299 104.054C28.0193 105.193 31.0624 105.763 33.6591 105.763C36.0124 105.763 37.8382 105.214 39.1366 104.115C40.4349 103.017 41.0841 101.492 41.0841 99.539C41.0841 97.5458 40.3335 96.1424 38.8323 95.3288C37.331 94.5153 34.5314 94.0881 30.4335 94.0475C29.5003 94.0475 28.6888 93.722 27.999 93.0712C27.3093 92.3797 26.9644 91.5661 26.9644 90.6305V90.5085C26.9644 88.2305 27.8367 86.339 29.5814 84.8339L38.2237 77.3288V77.2678C38.2237 77.2271 38.2034 77.2068 38.1628 77.2068H24.4691ZM76.813 77.4508C77.5027 77.939 78.2533 78.0813 79.0648 77.8779C82.8788 76.9017 86.3884 76.4135 89.5938 76.4135C93.9757 76.4135 96.1667 77.7559 96.1667 80.4407C96.1667 81.2135 95.9233 81.9661 95.4364 82.6983C94.9495 83.4305 94.4221 84.0407 93.854 84.5288C93.3266 85.0169 92.5151 85.6678 91.4196 86.4813C90.0401 87.4983 88.9852 88.3322 88.2548 88.983C87.5245 89.5932 86.6927 90.5491 85.7595 91.8508C84.8263 93.1118 84.1771 94.4339 83.812 95.8169C83.5685 96.7118 83.7714 97.5051 84.4206 98.1966C85.0698 98.8881 85.8812 99.2339 86.855 99.2339H89.472C91.2167 99.2339 92.6571 98.1356 93.7932 95.939C94.1583 95.2474 94.6858 94.5559 95.3756 93.8644C96.0653 93.1322 96.6536 92.6034 97.1405 92.2779C97.6274 91.9118 98.3983 91.3424 99.4532 90.5695C100.711 89.7152 101.644 89.044 102.253 88.5559C102.902 88.0271 103.653 87.2746 104.505 86.2983C105.397 85.322 106.026 84.244 106.391 83.0644C106.797 81.8847 107 80.5424 107 79.0373C107 75.8237 105.6 73.2203 102.801 71.2271C100.001 69.2339 96.1059 68.2373 91.1153 68.2373C87.3013 68.2373 83.3048 68.6237 79.1257 69.3966C78.1519 69.5593 77.3404 70.0474 76.6912 70.861C76.0826 71.6339 75.7783 72.5288 75.7783 73.5457V75.3763C75.7783 76.2305 76.1232 76.922 76.813 77.4508ZM89.9589 104.237H86.3073C85.3741 104.237 84.5626 104.583 83.8728 105.275C83.2236 105.966 82.899 106.78 82.899 107.715V109.912C82.899 110.847 83.2236 111.661 83.8728 112.353C84.5626 113.044 85.3741 113.39 86.3073 113.39H89.9589C90.8921 113.39 91.7036 113.044 92.3934 112.353C93.0831 111.661 93.428 110.847 93.428 109.912V107.715C93.428 106.78 93.0831 105.966 92.3934 105.275C91.7036 104.583 90.8921 104.237 89.9589 104.237Z",
                fill: "currentcolor"
            })))
        }
        var Tt, It, Nt = c.forwardRef(Ct), St = (n.p,
        {
            testId: "number-memory",
            title: "Number Memory",
            description: "Remember the longest number you can.",
            units: "digits",
            scoreColumnTitle: "Digits",
            scoreRowSuffix: "pts",
            url: "/tests/number-memory",
            higherIsBetter: !0,
            icon: Nt,
            decimalPlaces: 1
        }), Mt = ["title", "titleId"];
        function Rt() {
            return (Rt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var c in n)
                        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function At(e, t) {
            if (null == e)
                return {};
            var n, c, a = function(e, t) {
                if (null == e)
                    return {};
                var n, c, a = {}, r = Object.keys(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function Et(e, t) {
            var n = e.title
              , a = e.titleId
              , r = At(e, Mt);
            return c.createElement("svg", Rt({
                width: 100,
                height: 131,
                viewBox: "0 0 100 131",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": a
            }, r), n ? c.createElement("title", {
                id: a
            }, n) : null, Tt || (Tt = c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M100 5C100 2.23857 97.7614 0 95 0H5C2.23858 0 0 2.23858 0 5V126C0 128.761 2.23858 131 5 131H96C98.2091 131 100 129.209 100 127C100 124.791 98.2091 123 96 123H14.5477C11.7863 123 9.54774 120.761 9.54774 118V106C9.54774 103.239 11.7863 101 14.5477 101H95C97.7614 101 100 98.7614 100 96V5ZM75.1237 80C78.2046 80 80.5524 77.2406 80.0592 74.1995L72.1114 25.1995C71.7188 22.7787 69.6283 21 67.1759 21H61.5314C59.8921 21 58.3568 21.8036 57.4227 23.1508L23.4431 72.1507C21.1437 75.4666 23.5168 80 27.5519 80H28.7769C30.4488 80 32.0101 79.1644 32.9374 77.7732L39.8159 67.4536C40.7432 66.0624 42.3045 65.2268 43.9764 65.2268H62.5724C65.082 65.2268 67.2028 67.0871 67.5298 69.5752L68.3284 75.6516C68.6554 78.1397 70.7762 80 73.2858 80H75.1237ZM55.2419 58.4441C51.2439 58.4441 48.8629 53.9845 51.0871 50.6624L55.3569 44.285C57.9299 40.4418 63.8931 41.852 64.4723 46.4405L65.2773 52.818C65.6542 55.8042 63.3265 58.4441 60.3166 58.4441H55.2419Z",
                fill: "currentcolor"
            })), It || (It = c.createElement("rect", {
                x: 16,
                y: 108,
                width: 78,
                height: 8,
                rx: 4,
                fill: "currentcolor"
            })))
        }
        var Pt, Lt, Ht = c.forwardRef(Et), Dt = (n.p,
        {
            testId: "verbal-memory",
            title: "Verbal Memory",
            description: "Keep as many words in short term memory as possible.",
            units: "points",
            scoreColumnTitle: "Points",
            scoreRowSuffix: "pts",
            url: "/tests/verbal-memory",
            higherIsBetter: !0,
            icon: Ht,
            decimalPlaces: 1
        }), qt = ["title", "titleId"];
        function zt() {
            return (zt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var c in n)
                        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Bt(e, t) {
            if (null == e)
                return {};
            var n, c, a = function(e, t) {
                if (null == e)
                    return {};
                var n, c, a = {}, r = Object.keys(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function Ft(e, t) {
            var n = e.title
              , a = e.titleId
              , r = Bt(e, qt);
            return c.createElement("svg", zt({
                width: 125,
                height: 127,
                viewBox: "0 0 125 127",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": a
            }, r), n ? c.createElement("title", {
                id: a
            }, n) : null, Pt || (Pt = c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.3278 2.28093C19.2495 0.858591 20.8289 0 22.5238 0H101.929C103.598 0 105.158 0.833566 106.086 2.22191L123.314 28.0032C124.413 29.6478 125 31.5813 125 33.5593V122C125 124.761 122.761 127 120 127H5C2.23858 127 0 124.761 0 122V33.5209C0 31.591 0.558439 29.7023 1.60795 28.0827L18.3278 2.28093ZM17.5238 21.9102V75.2696L10 94.9366V33.5208L17.5238 21.9102ZM12.2662 117H112.652L98.5261 81.1934H25.9644L12.2662 117ZM27.5238 71.1934H96.9286V10H27.5238V71.1934ZM106.929 21.4811L115 33.5593V95.7018L106.929 75.2428V21.4811Z",
                fill: "currentcolor"
            })), Lt || (Lt = c.createElement("path", {
                d: "M77.3883 53.2029C77.7091 55.1944 76.1711 57 74.1539 57V57C72.5085 57 71.1184 55.7796 70.9054 54.148L70.7384 52.8685C70.4298 50.505 68.416 48.737 66.0325 48.737H58.6308C56.9534 48.737 55.3877 49.5781 54.4617 50.9768L51.3823 55.628C50.8151 56.4848 49.856 57 48.8285 57V57C46.3613 57 44.9067 54.2318 46.3062 52.1999L64.2397 26.1637C65.1728 24.8091 66.7381 24 68.383 24V24C70.8375 24 72.9705 25.7815 73.3609 28.2047L77.3883 53.2029ZM62.3364 39.1553C60.6899 41.6312 62.4649 44.9433 65.4383 44.9433V44.9433C67.6795 44.9433 69.4133 42.9785 69.1345 40.7547V40.7547C68.705 37.3285 64.2485 36.28 62.3364 39.1553V39.1553Z",
                fill: "currentcolor"
            })))
        }
        var Vt, Wt, _t, Gt = c.forwardRef(Ft), Ut = (n.p,
        {
            testId: "typing",
            title: "Typing",
            description: "How many words per minute can you type?",
            units: "WPM",
            scoreColumnTitle: "WPM",
            scoreRowSuffix: "",
            url: "/tests/typing",
            higherIsBetter: !0,
            icon: Gt,
            decimalPlaces: 0
        }), Zt = ["title", "titleId"];
        function Yt() {
            return (Yt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var c in n)
                        Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Kt(e, t) {
            if (null == e)
                return {};
            var n, c, a = function(e, t) {
                if (null == e)
                    return {};
                var n, c, a = {}, r = Object.keys(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (c = 0; c < r.length; c++)
                    n = r[c],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function Xt(e, t) {
            var n = e.title
              , a = e.titleId
              , r = Kt(e, Zt);
            return c.createElement("svg", Yt({
                width: 128,
                height: 128,
                viewBox: "0 0 128 128",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": a
            }, r), n ? c.createElement("title", {
                id: a
            }, n) : null, Vt || (Vt = c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M64 118C93.8234 118 118 93.8234 118 64C118 34.1766 93.8234 10 64 10C34.1766 10 10 34.1766 10 64C10 93.8234 34.1766 118 64 118ZM64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z",
                fill: "currentcolor"
            })), Wt || (Wt = c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M64 97C82.2254 97 97 82.2254 97 64C97 45.7746 82.2254 31 64 31C45.7746 31 31 45.7746 31 64C31 82.2254 45.7746 97 64 97ZM64 107C87.7482 107 107 87.7482 107 64C107 40.2518 87.7482 21 64 21C40.2518 21 21 40.2518 21 64C21 87.7482 40.2518 107 64 107Z",
                fill: "currentcolor"
            })), _t || (_t = c.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M64 76C70.6274 76 76 70.6274 76 64C76 57.3726 70.6274 52 64 52C57.3726 52 52 57.3726 52 64C52 70.6274 57.3726 76 64 76ZM64 86C76.1503 86 86 76.1503 86 64C86 51.8497 76.1503 42 64 42C51.8497 42 42 51.8497 42 64C42 76.1503 51.8497 86 64 86Z",
                fill: "currentcolor"
            })))
        }
        var Jt = c.forwardRef(Xt)
          , Qt = (n.p,
        {
            testId: "chimp",
            title: "Chimp Test",
            description: "Are you smarter than a chimpanzee?",
            units: "points",
            scoreColumnTitle: "Points",
            scoreRowSuffix: "pts",
            url: "/tests/chimp",
            higherIsBetter: !0,
            icon: ht,
            decimalPlaces: 1
        })
          , $t = {
            testId: "sequence",
            title: "Sequence Memory",
            description: "Remember an increasingly long pattern of button presses.",
            units: "points",
            scoreColumnTitle: "Level",
            scoreRowSuffix: "",
            url: "/tests/sequence",
            higherIsBetter: !0,
            icon: ht,
            decimalPlaces: 1
        }
          , en = {
            reactiontime: vt,
            memory: mt,
            "number-memory": St,
            "verbal-memory": Dt,
            typing: Ut,
            aim: {
                testId: "aim",
                title: "Aim Trainer",
                description: "How quickly can you hit all the targets?",
                units: "ms",
                scoreColumnTitle: "Time",
                scoreRowSuffix: "ms",
                url: "/tests/aim",
                higherIsBetter: !1,
                icon: Jt,
                decimalPlaces: 0
            },
            chimp: Qt,
            sequence: $t
        }
          , tn = ["reactiontime", "memory", "number-memory", "verbal-memory", "typing", "aim", "chimp", "sequence"];
        function nn(e, t) {
            return e ? e.toFixed(en[t].decimalPlaces) : "?"
        }
        function cn(e) {
            if (!e)
                return null;
            var t = e.map((function(e) {
                return e.score
            }
            ))
              , n = t.reduce((function(e, t) {
                return e + t
            }
            ), 0) / t.length;
            return !n || isNaN(n) ? null : n
        }
        function an(e, t, n) {
            if (!t || !n)
                return null;
            var c = t.map((function(e) {
                return e.score
            }
            ))
              , a = c.reduce((function(e, t) {
                return e + t
            }
            ), 0) / c.length;
            if (isNaN(a))
                return null;
            var r = function(e, t) {
                var n, c = 0, a = 0, r = Object(rt.a)(t);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var o = n.value;
                        c += o.count,
                        e > o.id && (a += o.count)
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                return a / c
            }(a, n);
            return en[e].higherIsBetter || (r = 1 - r),
            r
        }
        ot.b.register(ot.a, ot.g, ot.h, ot.f, ot.e, ot.c, ot.d);
        var rn = {
            name: "r11xyi",
            styles: ".big-number{font-size:80px;line-height:1;font-weight:bold;}.units{font-size:24px;}.percentile{margin:10px 0 0 0;}.go-to-test{margin:10px 0 0 0;}"
        };
        function on(e) {
            var t = a.a.useState(null)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1]
              , s = a.a.useState(null)
              , l = Object(r.a)(s, 2)
              , u = l[0]
              , d = l[1];
            if (a.a.useEffect((function() {
                T(e.userId, e.testId).then((function(e) {
                    return o(e.data)
                }
                )),
                N(e.testId).then((function(e) {
                    return d(e.data)
                }
                ))
            }
            ), [e.userId, e.testId]),
            !c || !u)
                return Object(D.c)(re, null, Object(D.c)(it.a, null));
            var b = e.testId
              , h = c.slice(0, 5)
              , m = an(b, h, u);
            return Object(D.c)(re, {
                style: {
                    textAlign: "center"
                },
                css: rn
            }, Object(D.c)("h2", null, en[b].title), Object(D.c)("div", {
                className: "big-number"
            }, nn(cn(h), e.testId)), Object(D.c)("div", {
                className: "units"
            }, en[b].units), Object(D.c)("div", {
                className: "percentile"
            }, Object(D.c)("b", null, (100 * (m || 0)).toFixed(2), "% percentile")), Object(D.c)("div", {
                className: "go-to-test"
            }, Object(D.c)(i.a, {
                to: "/tests/" + b
            }, Object(D.c)(Le.a, {
                icon: Pe.i,
                style: {
                    marginRight: 8
                }
            }), "Play")))
        }
        function sn(e) {
            var t = Object(c.useRef)(null);
            return Object(c.useEffect)((function() {
                var n = [e.scores].map((function(t) {
                    return {
                        label: e.label,
                        backgroundColor: "rgba(43, 135, 209, 0.2)",
                        borderColor: "rgba(43, 135, 209, 1)",
                        data: t.map((function(e) {
                            return e.score
                        }
                        )),
                        fill: !0
                    }
                }
                ))
                  , c = new ot.b(t.current,{
                    type: "line",
                    data: {
                        labels: e.scores.map((function(e) {
                            return ""
                        }
                        )),
                        datasets: n
                    },
                    options: {
                        animation: void 0,
                        maintainAspectRatio: !1,
                        scales: {
                            y: {
                                beginAtZero: !0
                            }
                        }
                    }
                });
                return function() {
                    c.destroy()
                }
            }
            ), [e.scores, e.label]),
            Object(D.c)("canvas", {
                ref: t,
                className: "hb-chart"
            })
        }
        function ln(e) {
            var t = Object(c.useRef)(null);
            return Object(c.useEffect)((function() {
                if (e.seriesList && 0 !== e.seriesList.length) {
                    var n = e.seriesList;
                    if (!(n.length > 0 && n.some((function(e) {
                        return !Array.isArray(e.data)
                    }
                    )))) {
                        var c = n.map((function(e) {
                            var t = Math.max.apply(null, e.data.map((function(e) {
                                return e.count
                            }
                            )));
                            return Object(at.a)(Object(at.a)({}, e), {}, {
                                data: e.data.map((function(e) {
                                    return {
                                        id: e.id,
                                        count: 0 === t ? 0 : e.count / t
                                    }
                                }
                                ))
                            })
                        }
                        ))
                          , a = c.map((function(e) {
                            return Object(at.a)(Object(at.a)({}, e), {}, {
                                cubicInterpolationMode: "monotone",
                                fill: !0,
                                data: e.data.map((function(e) {
                                    return e.count
                                }
                                ))
                            })
                        }
                        ))
                          , r = new ot.b(t.current,{
                            type: "line",
                            data: {
                                labels: c[0].data.map((function(t) {
                                    return "" + t.id + e.seriesList[0].units
                                }
                                )),
                                datasets: a
                            },
                            options: {
                                animation: !1,
                                maintainAspectRatio: !1,
                                plugins: {
                                    legend: {
                                        display: a.length > 1
                                    }
                                },
                                scales: {
                                    y: {
                                        display: !1,
                                        min: 0,
                                        max: 1.1
                                    },
                                    x: {
                                        ticks: {
                                            autoSkip: !1
                                        }
                                    }
                                }
                            }
                        });
                        return function() {
                            r.destroy()
                        }
                    }
                }
            }
            ), [e.seriesList]),
            Object(D.c)("canvas", {
                ref: t,
                className: "hb-chart"
            })
        }
        function un(e) {
            var t = Object(c.useState)()
              , n = Object(r.a)(t, 2)
              , a = n[0]
              , o = n[1];
            return Object(c.useEffect)((function() {
                N(e.testId).then((function(t) {
                    var n = en[e.testId];
                    if (n) {
                        var c = t.data.slice(e.startIdx || 0, e.endIdx);
                        o([{
                            data: c,
                            label: n.title + " (" + n.units + ")",
                            backgroundColor: "rgba(43, 135, 209, 0.2)",
                            borderColor: "rgba(43, 135, 209, 1)",
                            units: n.scoreRowSuffix
                        }])
                    }
                }
                ))
            }
            ), [e.testId, e.startIdx, e.endIdx]),
            Object(D.c)("div", {
                style: {
                    position: "relative",
                    height: 350,
                    paddingTop: 20
                }
            }, Object(D.c)(ln, {
                seriesList: a || []
            }))
        }
        function dn(e, t) {
            a.a.useEffect((function() {
                if (void 0 !== e.delay) {
                    var n = window.setTimeout(t, e.delay);
                    return function() {
                        window.clearTimeout(n)
                    }
                }
            }
            ), [e, t])
        }
        function bn(e) {
            var t = en[e.testId];
            return Object(D.c)(a.a.Fragment, null, Object(D.c)(be, null, Object(D.c)(t.icon, {
                style: {
                    width: 80,
                    height: 80
                },
                fill: "currentcolor"
            })), Object(D.c)(be, null, Object(D.c)(ye, {
                label: e.label,
                value: e.displayScore
            })), Object(D.c)(pn, {
                testId: e.testId,
                score: e.score,
                onReset: e.onReset
            }))
        }
        var hn = {
            name: "114hb8t",
            styles: "margin:5px 5px 0;"
        }
          , mn = {
            name: "114hb8t",
            styles: "margin:5px 5px 0;"
        };
        function pn(e) {
            var t = function() {
                var e = Object(o.g)()
                  , t = a.a.useState(!1)
                  , n = Object(r.a)(t, 2)
                  , c = n[0]
                  , i = n[1]
                  , s = a.a.useState(!1)
                  , l = Object(r.a)(s, 2)
                  , u = l[0]
                  , d = l[1]
                  , b = a.a.useCallback((function(t) {
                    c || (i(!0),
                    x(t).then((function(t) {
                        i(!1),
                        d(!0),
                        e.push("/dashboard")
                    }
                    )))
                }
                ), [c, e]);
                return {
                    isSaving: c,
                    isDoneSaving: u,
                    save: b
                }
            }().save;
            return Object(D.c)(be, null, Object(D.c), Object(D.c)(we, {
                css: mn,
                onClick: e.onReset
            }, "Try again"))
        }
        var fn = n(215);
        function On(e, t) {
            var n = a.a.useState((function() {
                var e = localStorage.getItem("volume");
                return !e || "true" === e
            }
            ))
              , c = Object(r.a)(n, 2)
              , o = c[0]
              , i = c[1]
              , s = a.a.useRef(o);
            s.current = o,
            a.a.useEffect((function() {
                localStorage.setItem("volume", "" + o)
            }
            ), [o]),
            a.a.useEffect((function() {
                o && Object.keys(t).forEach((function(e) {
                    new fn.Howl({
                        src: t[e]
                    })
                }
                ))
            }
            ), [o, t]),
            a.a.useEffect((function() {
                if (e && s.current) {
                    var n = t[e.type];
                    new fn.Howl({
                        src: (null === n || void 0 === n ? void 0 : n.default) || n,
                        rate: e.pitch || 1,
                        volume: e.volume || 1
                    }).play()
                }
            }
            ), [e, t]);
            var l = Object(D.c)(gn, {
                on: o,
                onToggle: function() {
                    return i((function(e) {
                        return !e
                    }
                    ))
                }
            });
            return {
                soundEnabled: o,
                setSoundEnabled: i,
                volumeEl: l
            }
        }
        var jn = {
            name: "1oy5bcg",
            styles: "z-index:1;position:absolute;bottom:20px;left:20px;opacity:0.3;&:hover{opacity:1;}"
        };
        function gn(e) {
            return Object(D.c)(Le.a, {
                onClick: function(t) {
                    e.onToggle()
                },
                icon: e.on ? Pe.l : Pe.k,
                size: "2x",
                title: "Toggle sound effects on and off",
                css: jn
            })
        }
        function yn(e, t) {
            return (e % t + t) % t
        }
        var vn = [0, 2, 4, 5, 7, 9, 11];
        function wn(e) {
            for (var t = vn[yn(e, vn.length)] + 12 * Math.floor(e / vn.length); t > 24; )
                t -= 12;
            return Math.pow(2, t / 12)
        }
        var kn, xn = {
            phase: "splash",
            remainingLives: 3,
            lastAnswerCorrect: !0,
            stageNum: 1,
            stage: Nn([[!1]])
        };
        function Cn(e, t) {
            switch (t.type) {
            case "initStage":
                var n = ~~Math.sqrt(9 + 3 * e.stageNum)
                  , c = 2 + e.stageNum;
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "preflip",
                    delay: 500,
                    stage: Nn(Tn(n, n, c)),
                    sound: void 0
                });
            case "clickedSquare":
                if ("usertest" !== e.phase)
                    return e;
                var a = t.x
                  , r = t.y;
                if (!0 === e.stage.userAnswers[r][a])
                    return e;
                var o = e.stage.userAnswers.map((function(e) {
                    return e.map((function(e) {
                        return e
                    }
                    ))
                }
                ));
                o[r][a] = !0;
                var i = !0 === e.stage.actualAnswers[r][a]
                  , s = Object(at.a)(Object(at.a)({}, e.stage), {}, {
                    userAnswers: o
                })
                  , l = Sn(s)
                  , u = l.numFalsePositives >= 3
                  , d = i ? {
                    type: "boop",
                    pitch: wn(l.correctAnswerCount - 1),
                    volume: .2
                } : {
                    type: "boop",
                    pitch: wn(-3),
                    volume: .2
                };
                return l.hasWonYet && (d = {
                    type: "victory",
                    volume: .25
                }),
                u && (d = {
                    type: "boop",
                    volume: .25,
                    pitch: wn(-4)
                }),
                l.hasWonYet || u ? Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "levelrecap",
                    delay: 500,
                    stage: s,
                    lastAnswerCorrect: !u,
                    sound: d
                }) : Object(at.a)(Object(at.a)({}, e), {}, {
                    stage: s,
                    sound: d
                });
            case "tick":
                switch (e.phase) {
                case "preflip":
                    return Object(at.a)(Object(at.a)({}, e), {}, {
                        phase: "flipped",
                        delay: 1200,
                        sound: {
                            type: "reveal",
                            volume: .2
                        }
                    });
                case "flipped":
                    return Object(at.a)(Object(at.a)({}, e), {}, {
                        phase: "usertest",
                        delay: void 0,
                        sound: {
                            type: "go",
                            volume: .2
                        }
                    });
                case "levelrecap":
                    return Object(at.a)(Object(at.a)({}, e), {}, {
                        phase: "postrecap",
                        delay: 500,
                        sound: void 0
                    });
                case "postrecap":
                    if (Sn(e.stage).hasWonYet)
                        return Cn(Object(at.a)(Object(at.a)({}, e), {}, {
                            stageNum: e.stageNum + 1,
                            sound: void 0
                        }), {
                            type: "initStage"
                        });
                    var b = e.remainingLives - 1;
                    return b <= 0 ? Object(at.a)(Object(at.a)({}, e), {}, {
                        remainingLives: b,
                        phase: "gameover",
                        delay: void 0,
                        sound: void 0
                    }) : Cn(Object(at.a)(Object(at.a)({}, e), {}, {
                        remainingLives: b,
                        sound: void 0
                    }), {
                        type: "initStage"
                    });
                default:
                    return e
                }
            case "reset":
                return xn
            }
        }
        function Tn(e, t, n) {
            if (n > e * t)
                throw new Error("IT CANNOT BE DONE!!!!");
            for (var c = In(e, t), a = 0; a < n; ) {
                var r = ~~(Math.random() * e)
                  , o = ~~(Math.random() * t);
                c[r][o] || (c[r][o] = !0,
                a++)
            }
            return c
        }
        function In(e, t) {
            return Ve(0, e, !1).map((function(e) {
                return Ve(0, t, !1).map((function(e) {
                    return !1
                }
                ))
            }
            ))
        }
        function Nn(e) {
            var t = e.length
              , n = e[0].length;
            return {
                actualAnswers: e,
                userAnswers: In(t, n),
                blankBoard: In(t, n)
            }
        }
        function Sn(e) {
            for (var t = e.actualAnswers, n = e.userAnswers, c = 0, a = !0, r = 0, o = 0; o < t.length; o++)
                for (var i = t[o], s = 0; s < i.length; s++) {
                    var l = i[s];
                    l !== n[o][s] && (!0 === n[o][s] ? c++ : a = !1),
                    !0 === l && l === n[o][s] && r++
                }
            return {
                numFalsePositives: c,
                hasWonYet: a,
                correctAnswerCount: r
            }
        }
        var Mn = {
            boop: n(195),
            victory: n(617),
            reveal: n(618),
            go: n(619)
        }
          , Rn = "60px"
          , An = Object(b.a)("div", {
            target: "eut2yre0"
        })({
            name: "hvbk5q",
            styles: "position:relative;transform:translateZ(0px);"
        })
          , En = Object(D.d)(kn || (kn = Object(P.a)(["\n  0% {\n    transform: translateX(0px);\n  }\n  20% {\n    transform: translateX(-3px);\n  }\n  40% {\n    transform: translateX(3px);\n  }\n  60% {\n    transform: translateX(-3px)\n  }\n  80% {\n    transform: translateX(3px)\n  }\n  100% {\n    transform: translateX(0px)\n  }\n"])))
          , Pn = Object(b.a)("div", {
            target: "eut2yre1"
        })("cursor:pointer;display:inline-block;vertical-align:top;width:", Rn, ";height:", Rn, ";background:#000066;opacity:0.15;border-radius:10px;border:4px solid rgba(0,0,0,0);background-clip:padding-box !important;backface-visibility:visible;transform:rotateX(0deg) translateZ(1px);transition:transform ease-out 0.3s;z-index:1;&.active{opacity:1;background:white;transform:rotateX(180deg) translateZ(1px);}&:active:not(.active){background:rgba(255,255,255,0.5);}&.error{background:rgba(0,0,0,0.5);animation:", En, " 0.3s ease-out;}")
          , Ln = function() {
            var e = a.a.useReducer(Cn, xn)
              , t = Object(r.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , o = a.a.useCallback((function() {
                return c({
                    type: "tick"
                })
            }
            ), []);
            dn(n, o);
            var i = On(n.sound, Mn).volumeEl;
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Visual Memory Test"), Object(D.c)("meta", {
                name: "keywords",
                content: "memory test, short term memory, memory game, memorization"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Memory Test: How good is your memory."
            }), Object(D.c)("meta", {
                property: "og:site_name",
                content: "Human Benchmark"
            }), Object(D.c)("meta", {
                property: "og:type",
                content: "game"
            }), Object(D.c)("meta", {
                property: "og:title",
                content: "Memory Test"
            }), Object(D.c)("meta", {
                property: "og:description",
                content: "Compete for the best memory in the world."
            }), Object(D.c)("meta", {
                property: "og:url",
                content: "http://www.humanbenchmark.com/tests/memory"
            })), Object(D.c)(me, {
                className: "memory-test",
                css: Object(D.b)("levelrecap" === n.phase ? n.lastAnswerCorrect ? Oe : je : "", ";")
            }, i, Object(D.c)("div", {
                className: "anim-slide-fade-in"
            }, "splash" === n.phase && Object(D.c)("div", null, Object(D.c)(be, null, Object(D.c)(mt.icon, {
                color: "white",
                className: "pulse-faint hero-icon"
            }), Object(D.c)("h1", null, "Visual Memory Test"), Object(D.c)("h2", null, "Memorize the squares.")), Object(D.c)(be, null, Object(D.c)(we, {
                onMouseDown: function() {
                    return c({
                        type: "initStage"
                    })
                }
            }, "Start"))), "splash" !== n.phase && "gameover" !== n.phase && Object(D.c)(be, null, Object(D.c)(be, null, Object(D.c)(Ne, {
                label: "Level",
                value: "" + n.stageNum
            }), Object(D.c)(Ne, {
                label: "Lives",
                value: De()(3).map((function(e) {
                    return Object(D.c)(Le.a, {
                        key: e,
                        icon: Pe.g,
                        style: {
                            marginRight: 5,
                            opacity: e < n.remainingLives - ("levelrecap" !== n.phase && "postrecap" !== n.phase || n.lastAnswerCorrect ? 0 : 1) ? 1 : .3
                        }
                    })
                }
                ))
            })), Object(D.c)(be, null, Object(D.c)(An, null, Bn(n).map((function(e, t) {
                return Object(D.c)("div", {
                    key: t
                }, e.map((function(e, a) {
                    return Object(D.c)(Pn, {
                        key: a,
                        className: E()(Dn(n, a, t)),
                        onMouseDown: function() {
                            return c({
                                type: "clickedSquare",
                                x: a,
                                y: t
                            })
                        },
                        onTouchStart: function() {
                            return c({
                                type: "clickedSquare",
                                x: a,
                                y: t
                            })
                        },
                        onTouchEnd: _e,
                        style: Hn(n)
                    })
                }
                )))
            }
            ))))), "gameover" === n.phase && Object(D.c)(bn, {
                testId: "memory",
                label: "Visual Memory",
                score: n.stageNum,
                displayScore: "Level " + n.stageNum,
                onReset: function() {
                    return c({
                        type: "reset"
                    })
                }
            }))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h1", null, "Statistics"), Object(D.c)(un, {
                testId: "memory",
                endIdx: 25
            }))))))
        };
        function Hn(e) {
            var t = Math.min(400, window.innerWidth - 50)
              , n = e.stage.actualAnswers[0].length
              , c = Math.floor(t / n - 1);
            return {
                width: c + "px",
                height: c + "px",
                borderWidth: c / 16 + "px",
                borderRadius: c / 8 + "px"
            }
        }
        function Dn(e, t, n) {
            return {
                active: qn(e, t, n),
                error: zn(e, t, n)
            }
        }
        function qn(e, t, n) {
            return !0 === Bn(e)[n][t]
        }
        function zn(e, t, n) {
            switch (e.phase) {
            case "usertest":
            case "levelrecap":
                return !0 === e.stage.userAnswers[n][t] && !1 === e.stage.actualAnswers[n][t];
            default:
                return !1
            }
        }
        function Bn(e) {
            switch (e.phase) {
            case "flipped":
                return e.stage.actualAnswers;
            case "usertest":
            case "levelrecap":
                return e.stage.userAnswers;
            default:
                return e.stage.blankBoard
            }
        }
        var Fn = function(e) {
            var t = a.a.useState(0)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1];
            return a.a.useEffect((function() {
                window.setTimeout((function() {
                    o(1)
                }
                ), e.delayMs)
            }
            )),
            Object(D.c)("div", {
                style: {
                    opacity: c,
                    transition: e.fadeTimeMs / 1e3 + "s linear"
                }
            }, e.children)
        }
          , Vn = {
            phase: "splash",
            level: 0,
            currentAnswer: "",
            userAnswer: "",
            timeLimit: 0,
            timerStartedAt: new Date
        };
        function Wn(e, t) {
            switch (t.type) {
            case "next":
                var n = e.level + 1
                  , c = n
                  , a = "".concat(Math.floor(9 * Math.random() + 1))
                  , r = Ve(0, c - 1, !1).map((function(e) {
                    return "".concat(Math.floor(10 * Math.random()))
                }
                ));
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "question",
                    level: n,
                    currentAnswer: a + r.join(""),
                    timeLimit: 800 * c + 1e3,
                    timerStartedAt: new Date
                });
            case "prompt":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "prompt"
                });
            case "answer":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "showanswer",
                    userAnswer: t.answer
                });
            case "reset":
                return Vn;
            default:
                throw new We(t)
            }
        }
        var _n = Object(b.a)(me, {
            target: "e12yaanm0"
        })({
            name: "12aqdc8",
            styles: 'input[type="text"]{background:rgba(0,0,100,0.2);border-radius:3px;text-align:center;font-size:48px;width:100%;outline-style:none;box-shadow:none;border-color:transparent;appearance:none;&::-ms-clear{display:none;}}.big-number{font-size:100px;word-wrap:break-word;line-height:1;&.smaller{font-size:60px;}}.answers{.label{font-size:50%;}}.actual-answer,.user-answer,.level{margin:0px 0px 15px 0;font-size:40px;}.level{font-size:60px;margin:30px 0;}.wrong{color:black;text-decoration:line-through;}.number-timer-container{background:rgba(0,0,0.3,0.1);width:100px;margin:8px auto 0;.number-timer-bar{height:4px;background:white;}}'
        });
        function Gn() {
            var e = a.a.useRef(null)
              , t = a.a.useReducer(Wn, Vn)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1]
              , i = a.a.useState()
              , s = Object(r.a)(i, 2)
              , l = s[0]
              , u = s[1]
              , d = c.userAnswer === c.currentAnswer
              , b = function(t) {
                t.preventDefault(),
                l && (o({
                    type: "answer",
                    answer: l
                }),
                u(void 0),
                e.current && e.current.focus())
            };
            a.a.useEffect((function() {
                if ("question" === c.phase) {
                    var e = window.setTimeout((function() {
                        return o({
                            type: "prompt"
                        })
                    }
                    ), c.timeLimit);
                    return function() {
                        window.clearTimeout(e)
                    }
                }
            }
            ), [c.phase, c.timeLimit]);
            var h = "showanswer" === c.phase ? d ? "anim-correct" : "anim-incorrect" : c.phase.toLowerCase();
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Number Memory Test"), Object(D.c)("meta", {
                name: "keywords",
                content: "number memory test, verbal short term memory, verbal memory game, memorization"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Number Memory Test: How many numbers can you remember?"
            }), Object(D.c)("meta", {
                property: "og:site_name",
                content: "Human Benchmark"
            }), Object(D.c)("meta", {
                property: "og:type",
                content: "game"
            }), Object(D.c)("meta", {
                property: "og:title",
                content: "Number Memory Test"
            }), Object(D.c)("meta", {
                property: "og:description",
                content: "Number Memory Test: How many numbers can you remember?"
            }), Object(D.c)("meta", {
                property: "og:url",
                content: "https://humanbenchmark.com/tests/number-memory"
            })), Object(D.c)(_n, {
                className: "number-memory-test " + h,
                ref: e,
                onKeyDown: function(e) {
                    13 === e.which && "showanswer" === c.phase && d && o({
                        type: "next"
                    })
                },
                tabIndex: 1
            }, Object(D.c)("div", {
                className: "anim-slide-fade-in"
            }, "splash" === c.phase && Object(D.c)("div", null, Object(D.c)(be, null, Object(D.c)(St.icon, {
                color: "white",
                className: "pulse-faint hero-icon"
            })), Object(D.c)(be, null, Object(D.c)("h1", null, "Number Memory"), Object(D.c)("h2", null, "The average person can remember 7 numbers at once. Can you do more?")), Object(D.c)(be, null, Object(D.c)(we, {
                onClick: function() {
                    return o({
                        type: "next"
                    })
                }
            }, "Start"))), "question" === c.phase && Object(D.c)("div", null, Object(D.c)("div", {
                className: "big-number " + (c.level > 30 ? "smaller" : "")
            }, c.currentAnswer), Object(D.c)("div", {
                className: "number-timer-container"
            }, Object(D.c)(Un, {
                className: "number-timer-bar",
                widthPercentFn: function() {
                    return 1 - ((new Date).getTime() - c.timerStartedAt.getTime()) / c.timeLimit
                }
            }))), "prompt" === c.phase && Object(D.c)("div", null, Object(D.c)("form", {
                onSubmit: b
            }, Object(D.c)(be, null, Object(D.c)("h2", null, "What was the number?"), Object(D.c)("div", {
                className: "save-hint faint-label"
            }, Object(D.c)("span", null, "Press enter to submit"), "\xa0")), Object(D.c)(be, null, Object(D.c)("input", {
                autoFocus: !0,
                onChange: function(e) {
                    return u(e.target.value)
                },
                pattern: "[0-9]*",
                type: "text"
            })), Object(D.c)(be, null, Object(D.c)(we, {
                onClick: b
            }, "Submit")))), "showanswer" === c.phase && Object(D.c)("div", {
                className: "showanswer"
            }, Object(D.c)("div", {
                className: "answers"
            }, Object(D.c)(Fn, {
                delayMs: 0,
                fadeTimeMs: 1e3
            }, Object(D.c)("div", {
                className: "actual-answer"
            }, Object(D.c)("div", {
                className: "label faint-label"
            }, "Number"), Object(D.c)("div", {
                className: "number"
            }, c.currentAnswer))), Object(D.c)(Fn, {
                delayMs: 300,
                fadeTimeMs: 1e3
            }, Object(D.c)("div", {
                className: "user-answer"
            }, Object(D.c)("div", {
                className: "label faint-label"
            }, "Your answer"), Object(D.c)("div", {
                className: "number"
            }, c.userAnswer.split("").map((function(e, t) {
                return Object(D.c)("span", {
                    key: t,
                    className: (n = t,
                    c.userAnswer[n] === c.currentAnswer[n] ? "" : "wrong")
                }, e);
                var n
            }
            ))))), Object(D.c)(Fn, {
                delayMs: 600,
                fadeTimeMs: 1e3
            }, Object(D.c)("div", {
                className: "level"
            }, Object(D.c)("span", null, "Level"), " ", Object(D.c)("span", {
                className: "number"
            }, c.level)))), Object(D.c)(Fn, {
                delayMs: 900,
                fadeTimeMs: 1e3
            }, c.currentAnswer === c.userAnswer ? Object(D.c)(we, {
                onClick: function() {
                    return o({
                        type: "next"
                    })
                }
            }, "NEXT") : Object(D.c)(pn, {
                testId: "number-memory",
                score: c.level,
                onReset: function() {
                    return o({
                        type: "reset"
                    })
                }
            }))))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h2", null, "Statistics"), Object(D.c)(un, {
                testId: "number-memory",
                endIdx: 20
            }))))))
        }
        var Un = function(e) {
            var t = a.a.useRef(null);
            return a.a.useEffect((function() {
                !function n() {
                    if (t.current) {
                        var c = "width: " + 100 * e.widthPercentFn() + "%";
                        t.current && t.current.setAttribute("style", c),
                        requestAnimationFrame(n)
                    }
                }()
            }
            )),
            Object(D.c)("div", {
                className: e.className,
                ref: t
            }, e.children)
        }
          , Zn = n(12)
          , Yn = {
            phase: "splash",
            trials: []
        }
          , Kn = Yn;
        function Xn(e, t) {
            switch (t.type) {
            case "click":
                switch (e.phase) {
                case "splash":
                    return Object(at.a)(Object(at.a)({}, e), {}, {
                        currentTrial: Jn(),
                        phase: "waiting"
                    });
                case "waiting":
                    return Object(at.a)(Object(at.a)({}, e), {}, {
                        phase: "scold"
                    });
                case "go":
                    var n = new Date;
                    return Object(at.a)(Object(at.a)({}, e), {}, {
                        trials: [].concat(Object(Zn.a)(e.trials), [Object(at.a)(Object(at.a)({}, e.currentTrial), {}, {
                            clickedTime: n,
                            result: n.getTime() - e.currentTrial.turnedGreenTime.getTime()
                        })]),
                        currentTrial: void 0,
                        phase: e.trials.length + 1 >= 5 ? "score" : "result"
                    });
                case "scold":
                case "result":
                    return Object(at.a)(Object(at.a)({}, e), {}, {
                        currentTrial: Jn(),
                        phase: "waiting"
                    });
                case "score":
                    return e;
                default:
                    throw new We(e.phase)
                }
            case "enterGoPhase":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "go",
                    currentTrial: Object(at.a)(Object(at.a)({}, e.currentTrial), {}, {
                        turnedGreenTime: new Date
                    })
                });
            case "reset":
                return Yn
            }
        }
        function Jn() {
            return {
                timeWaited: ~~(1 * (2500 + 2500 * Math.random()))
            }
        }
        function Qn(e) {
            var t, n = 0, c = Object(rt.a)(e.trials);
            try {
                for (c.s(); !(t = c.n()).done; ) {
                    n += t.value.result
                }
            } catch (a) {
                c.e(a)
            } finally {
                c.f()
            }
            return n / e.trials.length || 0
        }
        var $n = Object(b.a)(me, {
            target: "e18o0sx0"
        })("cursor:pointer;user-select:none;touch-callout:none;-webkit-touch-callout:none;.fa{color:#fff;}.hilight{color:#fede0b;}.progress{font-size:24px;.tries,.average{display:inline;font-size:18px;}.average{margin-right:30px;}}&.view-splash{background:", z, ";}&.view-waiting{background:", F, ";}&.view-go{background:", V, ";}&.view-result,&.view-saving{background:", z, ";}&.view-leaderboard{background:", z, ";}&.view-scold{background:", z, ";}");
        function ec() {
            var e = a.a.useReducer(Xn, Kn)
              , t = Object(r.a)(e, 2)
              , n = t[0]
              , c = t[1];
            a.a.useEffect((function() {
                if ("waiting" === n.phase) {
                    var e = window.setTimeout((function() {
                        c({
                            type: "enterGoPhase"
                        })
                    }
                    ), n.currentTrial.timeWaited);
                    return function() {
                        window.clearTimeout(e)
                    }
                }
            }
            ), [n.currentTrial, n.phase]);
            var o = function() {
                return c({
                    type: "click"
                })
            };
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Reaction Time Test"), Object(D.c)("meta", {
                name: "keywords",
                content: "reaction time, human benchmark, reaction, time, flash, game, reflex, test, human, benchmark, latency, framerate, computer, monitor, visual, stop, go, red, light, green"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Reaction Time Test: The simple, accurate online reaction time tester."
            }), Object(D.c)("meta", {
                property: "og:site_name",
                content: "Human Benchmark"
            }), Object(D.c)("meta", {
                property: "og:type",
                content: "game"
            }), Object(D.c)("meta", {
                property: "og:title",
                content: "Reaction Time Test"
            }), Object(D.c)("meta", {
                property: "og:description",
                content: "Reaction Time Test: The simple, accurate online reaction time tester."
            }), Object(D.c)("meta", {
                property: "og:url",
                content: "https://humanbenchmark.com/tests/reactiontime"
            })), Object(D.c)($n, {
                onMouseDown: o,
                onTouchStart: o,
                onTouchEnd: _e,
                className: "view-" + n.phase,
                style: {
                    cursor: "score" !== n.phase ? "pointer" : "default"
                }
            }, Object(D.c)("div", {
                className: "anim-slide-fade-in"
            }, "splash" === n.phase && Object(D.c)(be, null, Object(D.c)(be, null, Object(D.c)(vt.icon, {
                fill: "currentcolor",
                className: "hero-icon pulse-faint"
            })), Object(D.c)(be, null, Object(D.c)(Fn, {
                delayMs: 0,
                fadeTimeMs: 1e3
            }, Object(D.c)("h1", null, "Reaction Time Test")), Object(D.c)(Fn, {
                delayMs: 300,
                fadeTimeMs: 1e3
            }, Object(D.c)("h2", null, "When the red box turns green, click as quickly as you can."), Object(D.c)("h2", null, "Click anywhere to start.")))), "waiting" === n.phase && Object(D.c)(be, null, Object(D.c)("h1", null, Object(D.c)(Le.a, {
                icon: Pe.e
            }), Object(D.c)("div", null, "Wait for green")), Object(D.c)("h2", null, "\xa0")), "go" === n.phase && Object(D.c)(be, null, Object(D.c)("h1", null, Object(D.c)(Le.a, {
                icon: Pe.e
            }), Object(D.c)("div", null, "Click!")), Object(D.c)("h2", null, "\xa0")), "result" === n.phase && Object(D.c)(be, null, Object(D.c)("h1", null, Object(D.c)(Le.a, {
                icon: Pe.d
            }), Object(D.c)("div", null, n.trials.length > 0 && n.trials[n.trials.length - 1].result, " ", "ms")), Object(D.c)("h2", null, "Click to keep going")), "scold" === n.phase && Object(D.c)(be, null, Object(D.c)("h1", null, Object(D.c)(Le.a, {
                icon: Pe.f
            }), Object(D.c)("div", null, "Too soon!")), Object(D.c)("h2", null, "Click to try again.")), "score" === n.phase && Object(D.c)(bn, {
                testId: "reactiontime",
                displayScore: Qn(n).toFixed() + "ms",
                label: "Reaction Time",
                onReset: function() {
                    return c({
                        type: "reset"
                    })
                },
                score: Qn(n)
            }))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h2", null, "Statistics"), Object(D.c)(un, {
                testId: "reactiontime",
                endIdx: 20
            }))))))
        }
        var tc = n(105)
          , nc = n.n(tc)
          , cc = ["Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony. Then everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them. But when the world needed him most, he vanished. A hundred years passed and my brother and I discovered the new Avatar, an airbender named Aang, and although his airbending skills are great, he still has a lot to learn before he's ready to save anyone. But I believe Aang can save the world.", "Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes. The first little pig was very lazy. He didn't want to work at all and he built his house out of straw. The second little pig worked a little bit harder but he was somewhat lazy too and he built his house out of sticks. Then, they sang and danced and played together the rest of the day.", "The third little pig worked hard all day and built his house with bricks. It was a sturdy house complete with a fine fireplace and chimney. It looked like it could withstand the strongest winds. The next day, a wolf happened to pass by the lane where the three little pigs lived; and he saw the straw house, and he smelled the pig inside. He thought the pig would make a mighty fine meal and his mouth began to water.", "So he huffed and he puffed and he blew the house down! The wolf was greedy and he tried to catch both pigs at once, but he was too greedy and got neither! His big jaws clamped down on nothing but air and the two little pigs scrambled away as fast as their little hooves would carry them. The wolf chased them down the lane and he almost caught them. But they made it to the brick house and slammed the door closed before the wolf could catch them.", "But this was too much. The wolf danced about with rage and swore he would come down the chimney and eat up the little pig for his supper. But while he was climbing on to the roof the little pig made up a blazing fire and put on a big pot full of water to boil. Then, just as the wolf was coming down the chimney, the little piggy pulled off the lid, and plop! In fell the wolf into the scalding water.", "To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her gender. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position.", "From time to time I heard some vague account of his doings: of his summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which he had accomplished so delicately and successfully for the reigning family of Holland.", "The landlady informed me that he had left the house shortly after eight o'clock in the morning. I sat down beside the fire, however, with the intention of awaiting him, however long he might be. I was already deeply interested in his inquiry, for, though it was surrounded by none of the grim and strange features which were associated with the two crimes which I have already recorded, still, the nature of the case and the exalted station of his client gave it a character of its own.", "Indeed, apart from the nature of the investigation which my friend had on hand, there was something in his masterly grasp of a situation, and his keen, incisive reasoning, which made it a pleasure to me to study his system of work, and to follow the quick, subtle methods by which he disentangled the most inextricable mysteries. So accustomed was I to his invariable success that the very possibility of his failing had ceased to enter into my head.", "It was a smart little landau which rattled up to the door of Briony Lodge. As it pulled up, one of the loafing men at the corner dashed forward to open the door in the hope of earning a copper, but was elbowed away by another loafer, who had rushed up with the same intention. A fierce quarrel broke out, which was increased by the two guardsmen, who took sides with one of the loungers, and by the scissors-grinder, who was equally hot upon the other side.", "The summer evenings were long. It was not dark, yet. Presently Tom checked his whistle. A stranger was before him - a boy a shade larger than himself. A newcomer of any age or either gender was an impressive curiosity in the poor little shabby village of St. Petersburg. This boy was well dressed, too well dressed on a weekday. This was simply astounding. His cap was a dainty thing, his close-buttoned blue cloth roundabout was new and natty, and so were his pantaloons.", 'The new boy went off brushing the dust from his clothes, sobbing, snuffling, and occasionally looking back and shaking his head and threatening what he would do to Tom the "next time he caught him out." To which Tom responded with jeers, and started off in high feather, and as soon as his back was turned the new boy snatched up a stone, threw it and hit him between the shoulders and then turned tail and ran like an antelope. Tom chased the traitor home, and thus found out where he lived.', "When someone thinks of Australia, they tend to picture hot deserts and dangerous animals. But the country is also home to some of the cutest creatures on the planet. The koala is one of them, a tiny, fluffy bear that looks like it wouldn't hurt a fly. It feeds entirely on leaves, and even though it chooses plants with a lot of proteins, it's still not enough for an active lifestyle. This is why koalas sleep up to twenty hours a day. They just don't have the energy to do anything else!", "Giraffes are the tallest animals on Earth, and their neck is the reason why. This beautiful part of their body has many different purposes, from spotting predators to reaching the sweetest leaves, even being used to duel with other giraffes. Neck fighting can be intense, going from gently rubbing against another male to establish who's in charge, to swinging heads like a mace and hitting hard. But it's all in good sport! Giraffes will make up after most fights, rarely getting hurt in a serious way.", "It's impossible to think of flamingos without picturing a bright splash of pink. But where do they get their signature color? The answer lies in their diet. The flamingo feeds mainly on shrimps and insects, scraping them from the mud with its hook-shaped beak. These can contain a pigment that gives its feathers that particular shade of pink. Their shade changes depending on what they feed on, with the American flamingo being one of the brightest and flashiest.", "If you've never met a moose, it's hard to picture the sheer size of these animals. They're taller than a horse, even without their giant antlers. They can weigh over 1000 lbs, and can run as fast as 35 miles per hour. Fortunately, they're not interested in humans! Leave them alone and they'll leave you alone, munching on weeds, branches, and any plant they can find in ponds and rivers. They're excellent swimmers, and can even eat underwater without any difficulty.", "Whales are not fish, and they must regularly get back to the surface to breathe. There are many types of whales, each with their own characteristics and vastly different sizes. The most famous by far is the blue whale, the largest animal to have ever lived on this planet. Longer than a tennis court, it also holds the record for the most powerful call in the animal kingdom, which is louder than a jet engine."];
        function ac() {
            return {
                correctString: nc()(cc),
                textInput: ""
            }
        }
        function rc(e, t) {
            switch (t.type) {
            case "startGame":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    startTime: new Date
                });
            case "key":
                var n = e.textInput + t.key;
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    textInput: n,
                    startTime: e.startTime ? e.startTime : new Date,
                    endTime: n.length === e.correctString.length ? new Date : void 0
                });
            case "delete":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    textInput: e.textInput.slice(0, -1)
                });
            case "reset":
                return ac()
            }
        }
        function oc(e) {
            var t = e.textInput.length
              , n = e.textInput.split("").filter((function(t, n) {
                return e.correctString[n] === t
            }
            )).length
              , c = e.endTime || new Date
              , a = e.startTime ? c.getTime() - e.startTime.getTime() : 0
              , r = e.startTime ? n / t : 0
              , o = e.startTime ? n / 5 / a * 1e3 * 60 : 0;
            return a < .1 && (o = 0),
            {
                charactersTyped: t,
                correctCharactersTyped: n,
                timeElapsed: a,
                accuracy: r,
                wpm: o
            }
        }
        var ic, sc = Object(b.a)(me, {
            target: "e1q0za6r0"
        })("@keyframes cursorBlink{0%,50%{border-left:2px solid black;}51%,100%{border-left:2px solid transparent;}}.letters{font-size:18px;background:rgba(255,255,255,0.8);padding:20px;border-radius:10px;line-height:1.6;cursor:text;span{&.incomplete{color:", q, ";}&.right{background:rgba(35,222,35,0.5);color:", q, ";}&.wrong{background:rgba(255,0,0,0.5);color:white;}}&:focus{span.current{border-left:2px solid black;margin-left:-2px;animation:1s cursorBlink infinite;}}&:focus,&:hover{background:rgba(255,255,255,0.9);}}");
        function lc() {
            var e = a.a.useReducer(rc, ac())
              , t = Object(r.a)(e, 2)
              , n = t[0]
              , o = t[1]
              , i = Object(c.useState)(new Date)
              , s = Object(r.a)(i, 2)[1]
              , l = Object(c.useRef)(null);
            Object(c.useEffect)((function() {
                l.current && l.current.focus()
            }
            ), []),
            Object(c.useEffect)((function() {
                var e = window.setInterval((function() {
                    return s(new Date)
                }
                ), 100);
                return function() {
                    window.clearInterval(e)
                }
            }
            ));
            var u = oc(n);
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Typing Test - WPM"), Object(D.c)("meta", {
                name: "keywords",
                content: "typing test words per minute wpm"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Typing WPM Test"
            }), Object(D.c)("meta", {
                property: "og:site_name",
                content: "Human Benchmark"
            }), Object(D.c)("meta", {
                property: "og:type",
                content: "game"
            }), Object(D.c)("meta", {
                property: "og:title",
                content: "Reaction Time Test"
            }), Object(D.c)("meta", {
                property: "og:description",
                content: "Typing WPM test."
            }), Object(D.c)("meta", {
                property: "og:url",
                content: "https://humanbenchmark.com/tests/typing"
            })), Object(D.c)(sc, null, n.endTime ? Object(D.c)(a.a.Fragment, null, Object(D.c)(bn, {
                testId: "typing",
                label: "Typing Test",
                score: oc(n).wpm,
                displayScore: u.wpm.toFixed() + "wpm",
                onReset: function() {
                    return o({
                        type: "reset"
                    })
                }
            })) : Object(D.c)(a.a.Fragment, null, Object(D.c)(be, null, Object(D.c)("h1", null, n.startTime ? u.wpm.toFixed() : "Typing Test"), Object(D.c)("h2", null, "How many words per minute can you type?")), Object(D.c)(be, {
                className: "desktop-only"
            }, Object(D.c)("div", {
                className: "letters notranslate",
                ref: l,
                onKeyDown: function(e) {
                    e.preventDefault(),
                    1 !== e.key.length || e.metaKey || e.altKey || e.ctrlKey ? "Backspace" !== e.key && "Delete" !== e.key || o({
                        type: "delete"
                    }) : o({
                        type: "key",
                        key: e.key
                    })
                },
                tabIndex: 1
            }, n.correctString.split("").map((function(e, t) {
                return Object(D.c)("span", {
                    className: uc(n, t),
                    key: e + t
                }, e)
            }
            )))), Object(D.c)(be, {
                className: "desktop-only"
            }, Object(D.c)("p", null, u.timeElapsed ? function(e) {
                var t = ~~(e / 3600)
                  , n = ~~(e % 3600 / 60)
                  , c = ~~e % 60
                  , a = "";
                return t > 0 && (a += t + ":" + (n < 10 ? "0" : "")),
                a += n + ":" + (c < 10 ? "0" : ""),
                a += "" + c
            }(u.timeElapsed / 1e3) : "Start typing to begin.")), Object(D.c)(be, {
                className: "desktop-only-warning"
            }, Object(D.c)("p", null, "This test is intended to be taken with a keyboard, please take it on a desktop or laptop. (Or make your browser window larger)")))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h2", null, "Statistics"), Object(D.c)(un, {
                testId: "typing",
                endIdx: 15
            }))))))
        }
        function uc(e, t) {
            var n = e.textInput[t]
              , c = e.correctString[t];
            return E()({
                incomplete: void 0 === n,
                right: void 0 !== n && n === c,
                wrong: void 0 !== n && n !== c,
                current: t === e.textInput.length
            })
        }
        !function(e) {
            e[e.LOADING = 0] = "LOADING",
            e[e.READY = 1] = "READY",
            e[e.PROMPT = 2] = "PROMPT",
            e[e.GAMEOVER = 3] = "GAMEOVER"
        }(ic || (ic = {}));
        var dc = {
            state: ic.LOADING,
            score: 0,
            lives: 3,
            turn: 0,
            words: [],
            currentWord: "",
            dictionary: void 0
        };
        function bc(e, t) {
            switch (t.type) {
            case "load":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    state: ic.READY,
                    dictionary: t.dictionary
                });
            case "reset":
                return Object(at.a)(Object(at.a)({}, dc), {}, {
                    state: ic.READY,
                    dictionary: e.dictionary
                });
            case "nextQuestion":
                for (var n = e.currentWord; e.currentWord === n; )
                    n = nc()(Math.random() < .5 || 0 === e.words.length ? e.dictionary : e.words);
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    state: ic.PROMPT,
                    turn: e.turn + 1,
                    currentWord: n
                });
            case "answer":
                if (e.state === ic.GAMEOVER)
                    return e;
                var c = -1 !== e.words.indexOf(e.currentWord)
                  , a = t.userResponse === c
                  , r = Object(at.a)(Object(at.a)({}, e), {}, {
                    score: a ? e.score + 1 : e.score,
                    lives: a ? e.lives : e.lives - 1,
                    words: c ? e.words : [].concat(Object(Zn.a)(e.words), [e.currentWord])
                });
                return r.lives > 0 ? bc(r, {
                    type: "nextQuestion"
                }) : Object(at.a)(Object(at.a)({}, r), {}, {
                    state: ic.GAMEOVER
                })
            }
        }
        var hc = Object(b.a)(me, {
            target: "e1uk74hg0"
        })({
            name: "1f9zcm2",
            styles: ".item{display:inline-block;font-size:24px;}.lives{margin-right:30px;}.word{font-size:300%;}.final-score{font-size:300%;}"
        });
        function mc() {
            var e = a.a.useRef(null)
              , t = a.a.useReducer(bc, dc)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1];
            return a.a.useEffect((function() {
                O.a.get("/data/wordsEn.txt").then((function(e) {
                    o({
                        type: "load",
                        dictionary: e.data.split(/\n/)
                    })
                }
                ))
            }
            ), []),
            Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Verbal Memory Test"), Object(D.c)("meta", {
                name: "keywords",
                content: "verbal memory test, verbal short term memory, verbal memory game, memorization"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Verbal Memory Test: How many words can you remember?"
            }), Object(D.c)("meta", {
                property: "og:site_name",
                content: "Human Benchmark"
            }), Object(D.c)("meta", {
                property: "og:type",
                content: "game"
            }), Object(D.c)("meta", {
                property: "og:title",
                content: "Verbal Memory Test"
            }), Object(D.c)("meta", {
                property: "og:description",
                content: "Measure your verbal memory."
            }), Object(D.c)("meta", {
                property: "og:url",
                content: "https://humanbenchmark.com/tests/verbal-memory"
            })), Object(D.c)(hc, {
                className: "verbal-memory-test " + ic[c.state].toLowerCase(),
                onKeyDown: function(e) {
                    switch (e.which) {
                    case 37:
                        o({
                            type: "answer",
                            userResponse: !0
                        });
                        break;
                    case 39:
                        o({
                            type: "answer",
                            userResponse: !1
                        })
                    }
                },
                ref: e,
                tabIndex: 1
            }, Object(D.c)("div", {
                className: "anim-slide-fade-in"
            }, (c.state === ic.LOADING || c.state === ic.READY) && Object(D.c)("div", null, Object(D.c)(be, null, Object(D.c)(Dt.icon, {
                color: "white",
                className: "pulse-faint hero-icon"
            })), Object(D.c)(be, null, Object(D.c)("h1", null, "Verbal Memory Test")), Object(D.c)(be, null, Object(D.c)("p", {
                className: "can-collapse"
            }, "You will be shown words, one at a time."), Object(D.c)("p", {
                className: "can-collapse"
            }, "If you've seen a word during the test, click", " ", Object(D.c)("span", {
                className: "button-legend"
            }, "SEEN")), Object(D.c)("p", {
                className: "can-collapse"
            }, "If it's a new word, click", " ", Object(D.c)("span", {
                className: "button-legend"
            }, "NEW"))), Object(D.c)(be, null, c.state === ic.LOADING ? Object(D.c)(we, {
                disabled: !0,
                className: "disabled"
            }, "Loading...") : Object(D.c)(we, {
                onClick: function() {
                    return o({
                        type: "nextQuestion"
                    })
                }
            }, "Start"))), c.state === ic.PROMPT && Object(D.c)("div", null, Object(D.c)(be, null, Object(D.c)("p", null, Object(D.c)("span", {
                className: "item lives"
            }, Object(D.c)("span", {
                className: "faint-label"
            }, "Lives | "), c.lives), Object(D.c)("span", {
                className: "item score"
            }, Object(D.c)("span", {
                className: "faint-label"
            }, "Score | "), c.score))), Object(D.c)(be, null, Object(D.c)("div", {
                className: "word"
            }, c.currentWord)), Object(D.c)(be, null, Object(D.c)(we, {
                onClick: function() {
                    return o({
                        type: "answer",
                        userResponse: !0
                    })
                }
            }, "SEEN"), Object(D.c)("div", {
                style: {
                    width: 30,
                    display: "inline-block"
                }
            }), Object(D.c)(we, {
                onClick: function() {
                    return o({
                        type: "answer",
                        userResponse: !1
                    })
                }
            }, "NEW"))), c.state === ic.GAMEOVER && Object(D.c)(bn, {
                testId: "verbal-memory",
                label: "Verbal Memory",
                score: c.score,
                displayScore: c.score + " words",
                onReset: function() {
                    return o({
                        type: "reset"
                    })
                }
            }))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h2", null, "Statistics"), Object(D.c)(un, {
                testId: "verbal-memory",
                endIdx: 20
            }))))))
        }
        var pc = n(332)
          , fc = n.n(pc)
          , Oc = [0, 2, 4, 5, 7, 9, 11];
        function jc(e) {
            var t = Oc[yn(e, Oc.length)] + 12 * Math.floor(e / Oc.length);
            return Math.pow(2, t / 12)
        }
        function gc() {
            return {
                state: "splash",
                level: 0,
                board: wc(4),
                currentGuess: 1,
                strikes: 0,
                hideNumbers: !1
            }
        }
        function yc(e, t) {
            switch (t.type) {
            case "begin":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    state: "normal"
                });
            case "nextLevel":
                switch (e.state) {
                case "failedLevel":
                case "beatLevel":
                    return Object(at.a)({}, yc(e, {
                        type: "newBoard"
                    }))
                }
                break;
            case "newBoard":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    board: wc(e.level + 4),
                    currentGuess: 1,
                    state: "normal",
                    hideNumbers: !1
                });
            case "click":
                var n = fc()(e.board)
                  , c = n[t.y][t.x];
                if (null == c || c.cleared)
                    return e;
                if (c.n !== e.currentGuess)
                    return e.strikes + 1 >= 3 ? Object(at.a)(Object(at.a)({}, e), {}, {
                        strikes: e.strikes + 1,
                        state: "scoreScreen",
                        sound: {
                            type: "boop",
                            pitch: jc(-4),
                            volume: .25
                        }
                    }) : Object(at.a)(Object(at.a)({}, e), {}, {
                        strikes: e.strikes + 1,
                        state: "failedLevel",
                        board: vc(),
                        sound: {
                            type: "boop",
                            pitch: jc(-3),
                            volume: .25
                        }
                    });
                c.cleared = !0;
                var a = Object(at.a)(Object(at.a)({}, e), {}, {
                    currentGuess: e.currentGuess + 1,
                    board: n,
                    hideNumbers: e.level > 0,
                    sound: {
                        type: "boop",
                        pitch: jc(e.currentGuess - 1),
                        volume: .2
                    }
                });
                return a.currentGuess > 4 + e.level ? e.level + 4 >= 40 ? Object(at.a)(Object(at.a)({}, e), {}, {
                    level: e.level + 1,
                    state: "scoreScreen"
                }) : Object(at.a)(Object(at.a)({}, e), {}, {
                    level: e.level + 1,
                    board: n,
                    state: "beatLevel",
                    sound: {
                        type: "boop",
                        pitch: jc(e.currentGuess - 1),
                        volume: .25
                    }
                }) : a;
            case "reset":
                return gc()
            }
            return e
        }
        function vc() {
            return De()(5).map((function() {
                return De()(8).map((function() {
                    return null
                }
                ))
            }
            ))
        }
        function wc(e) {
            for (var t = vc(), n = 1; n <= e; ) {
                var c = Math.floor(8 * Math.random())
                  , a = Math.floor(5 * Math.random());
                null === t[a][c] && (t[a][c] = {
                    x: c,
                    y: a,
                    n: n,
                    cleared: !1
                },
                n++)
            }
            return t
        }
        var kc = {
            boop: n(195)
        }
          , xc = {
            name: "gmuwbf",
            styles: "display:flex;align-items:center;justify-content:center;"
        };
        function Cc() {
            var e = a.a.useReducer(yc, gc())
              , t = Object(r.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , o = a.a.useCallback((function(e, t) {
                c({
                    type: "click",
                    x: e,
                    y: t
                })
            }
            ), [])
              , i = On(n.sound, kc).volumeEl;
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Chimp Test")), Object(D.c)(me, {
                onClick: function(e) {}
            }, i, Object(D.c)("div", {
                className: "desktop-only"
            }, "splash" === n.state && Object(D.c)(a.a.Fragment, null, Object(D.c)(be, null, Object(D.c)(Qt.icon, null), Object(D.c)("h1", null, Object(D.c)("span", {
                style: {
                    fontSize: "50%"
                }
            }, "Are You Smarter Than a Chimpanzee?")), Object(D.c)("p", null, "Click the squares in order according to their numbers."), Object(D.c)("p", null, "The test will get progressively harder.")), Object(D.c)(be, null, Object(D.c)(we, {
                onClick: function() {
                    return c({
                        type: "begin"
                    })
                }
            }, "Start Test"))), "normal" === n.state && Object(D.c)("div", {
                css: xc
            }, Object(D.c)("div", null, n.board.map((function(e, t) {
                return Object(D.c)(Ic, {
                    key: t,
                    row: e,
                    onClick: o,
                    hideNumbers: n.hideNumbers
                })
            }
            )))), ("failedLevel" === n.state || "beatLevel" === n.state) && Object(D.c)(a.a.Fragment, null, Object(D.c)(be, null, Object(D.c)(ye, {
                label: "NUMBERS",
                value: "" + (n.level + 4)
            })), Object(D.c)(be, null, Object(D.c)(ye, {
                label: "STRIKES",
                value: "".concat(n.strikes, " of ").concat(3),
                type: "secondary"
            })), Object(D.c)(be, null, Object(D.c)(we, {
                onClick: function() {
                    return c({
                        type: "nextLevel"
                    })
                }
            }, "Continue"))), "scoreScreen" === n.state && Object(D.c)(bn, {
                testId: "chimp",
                score: n.level + 4,
                label: "Score",
                displayScore: "" + (n.level + 4),
                onReset: function() {
                    return c({
                        type: "reset"
                    })
                }
            })), Object(D.c)("div", {
                className: "desktop-only-warning"
            }, Object(D.c)("p", null, "This test is intended to be taken with a keyboard, please take it on a desktop or laptop. (Or make your browser window larger)"))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h2", null, "Statistics"), Object(D.c)(un, {
                testId: "chimp",
                endIdx: 25
            }))))))
        }
        var Tc = {
            name: "k008qs",
            styles: "display:flex;"
        };
        function Ic(e) {
            return Object(D.c)("div", {
                css: Tc
            }, e.row.map((function(t, n) {
                return Object(D.c)(Nc, {
                    key: n,
                    cell: t,
                    hideNumber: e.hideNumbers,
                    onClick: e.onClick
                })
            }
            )))
        }
        function Nc(e) {
            return null === e.cell || e.cell.cleared ? Object(D.c)("div", {
                css: Object(D.b)("width:", 80, "px;height:", 80, "px;margin:5px;border-radius:10px;")
            }) : Object(D.c)("div", {
                css: Object(D.b)("width:", 80, "px;height:", 80, "px;margin:5px;border-radius:10px;border:5px solid rgba(255,255,255,0.1);font-size:50px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;&:hover{border-color:rgba(255,255,255,0.5);}", e.hideNumber && "background: white", ""),
                onClick: function(t) {
                    _e(t),
                    e.onClick(e.cell.x, e.cell.y)
                },
                "data-cellnumber": e.cell.n
            }, Object(D.c)("div", null, e.hideNumber || null === e.cell ? "." : e.cell.n))
        }
        function Sc(e) {
            var t = e.code
              , n = e.title;
            return Object(D.c)(a.a.Fragment, null, Object(D.c)(qe.a, null, Object(D.c)("meta", {
                "http-equiv": "Status",
                content: n
            })), Object(D.c)(se, {
                style: {
                    textAlign: "center"
                }
            },))
        }
        var Mc = function() {
            return Object(D.c)(Sc, {
                code: 404,
                title: "404 Not found"
            })
        };
        function Rc(e) {
            var t = e.strings
              , n = e.isNew;
            return Object(D.c)(oe, {
                to: t.url,
                style: {
                    textAlign: "center",
                    position: "relative"
                },
                css: Object(D.b)("svg{opacity:0.5;color:", z, ";}&:hover svg{opacity:1;color:", B, " !important;}")
            }, n && Object(D.c)("div", {
                style: {
                    position: "absolute",
                    background: "rgba(245,50,100)",
                    color: "white",
                    padding: 10,
                    borderRadius: 10,
                    right: -5,
                    top: -5
                }
            }, "New"), Object(D.c)(t.icon, {
                title: t.title,
                height: 100,
                style: {
                    padding: 20
                }
            }), Object(D.c)("h3", null, t.title), Object(D.c)("p", null, t.description))
        }
        function Ac() {
            return Object(D.c)("div", null, Object(D.c)(ce, null, Object(D.c)(Rc, {
                strings: en.reactiontime
            }), Object(D.c)(Rc, {
                strings: en.sequence,
                isNew: !0
            }), Object(D.c)(Rc, {
                strings: en.aim,
                isNew: !0
            })), Object(D.c)(ce, null, Object(D.c)(Rc, {
                strings: en["number-memory"]
            }), Object(D.c)(Rc, {
                strings: en["verbal-memory"]
            }), Object(D.c)(Rc, {
                strings: en.chimp
            })), Object(D.c)(ce, null, Object(D.c)(Rc, {
                strings: en.memory
            }), Object(D.c)(Rc, {
                strings: en.typing
            })))
        }
        function Ec() {
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark"), Object(D.c)("meta", {
                name: "keywords",
                content: "reaction time, human benchmark, reaction, time, flash, game, reflex, test, human, benchmark, stop, go, red, light, green"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Brain games and competitions."
            })), Object(D.c)(me, null, Object(D.c)("div", {
                className: "anim-slide-fade-in"
            }, Object(D.c)(be, null, Object(D.c)(yt, {
                fill: "currentcolor"
            })), Object(D.c)(be, null, Object(D.c)("h1", null, "Human Benchmark"), Object(D.c)("h2", null, "Measure your abilities with brain games and cognitive tests.")), Object(D.c)(be, null, Object(D.c)(ke, {
                to: "/tests/reactiontime"
            }, "Get Started")))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(Ac, null)))
        }
        function Pc() {
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Licensing")), Object(D.c)(se, null, Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h1", null, "Licensing"), Object(D.c)("p", null, "Our software, anonymized results dataset, and API can be licensed to third parties for research, promotions, or other purposes."), Object(D.c)("p", null, "Get in touch with us at", " ", Object(D.c)("a", {
                href: "mailto:licensing@humanbenchmark.com"
            }, "licensing@humanbenchmark.com"), " ", "for details."))))))
        }
        var Lc = a.a.createContext({
            user: void 0,
            setUser: function(e) {}
        });
        var Hc = Object(b.a)("div", {
            target: "ein39ef0"
        })({
            name: "i7bffh",
            styles: "max-width:400px;margin:0 auto;h1{text-align:center;font-size:48px;font-weight:300;margin:15px 0;}h2{font-size:18px;margin:15px 0;text-align:center;}p{margin:20px 0;}label{margin:0 0 5px;.no-placeholder &{display:block;}}input{width:100%;display:block;}.or{text-align:center;color:#888;}.login-error-message{text-align:center;color:#ff4444;border-bottom:4px solid #ff4444;background:#ffeeee;padding:4px;}"
        })
          , Dc = n(165);
        function qc(e) {
            var t, n, c = Object(o.g)(), s = a.a.useState(), l = Object(r.a)(s, 2), u = l[0], d = l[1], b = a.a.useState(!1), h = Object(r.a)(b, 2), m = h[0], p = h[1], f = Object(Dc.a)(), j = f.handleSubmit, g = f.register, y = f.errors, v = a.a.useContext(Lc).setUser, w = j((function(t) {
                
            }
            ));
            return Object(D.c)(se, null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Log in")), Object(D.c)(re, null, Object(D.c)(Hc, null, Object(D.c)("h1", null, "Log in"), Object(D.c)("h2", null, "Need an account? ", Object(D.c)(i.a, {
                to: "/signup"
            }, "Sign up")), Object(D.c)("div", {
                className: "login-error-message",
                style: {
                    visibility: u ? "visible" : "hidden"
                }
            }, u || "..."), Object(D.c)("form", {
                onSubmit: w
            }, Object(D.c)("p", null, Object(D.c)("label", {
                htmlFor: "username"
            }, "Username ", Object(D.c)(Ce, null, null === (t = y.username) || void 0 === t ? void 0 : t.message)), Object(D.c)("input", {
                type: "text",
                name: "username",
                autoComplete: "username",
                ref: g({
                    required: "Required"
                })
            })), Object(D.c)("p", null, Object(D.c)("label", {
                htmlFor: "password"
            }, "Password ", Object(D.c)(Ce, null, null === (n = y.password) || void 0 === n ? void 0 : n.message)), Object(D.c)("input", {
                type: "password",
                name: "password",
                autoComplete: "current-password",
                ref: g({
                    required: "Required"
                })
            })), Object(D.c)("p", null, Object(D.c)(xe, {
                type: "submit",
                value: "Login",
                disabled: m
            }))), Object(D.c)("h2", null, "Forgot password?", " ", Object(D.c)(i.a, {
                to: "/account/password-reset"
            }, "Reset password")))))
        }
        function zc(e) {
            var t = e.redirect
              , n = Object(o.g)()
              , c = a.a.useContext(Lc).setUser;
            return a.a.useEffect((function() {
                k().then((function(e) {
                    c(e.data),
                    n.push(t)
                }
                ))
            }
            ), [c, t, n]),
            Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Log out")), Object(D.c)(se, null, Object(D.c)("p", null, "Logging out...")))
        }
        var Bc = function(e) {
            Object(u.a)(n, e);
            var t = Object(d.a)(n);
            function n(e) {
                var c;
                return Object(s.a)(this, n),
                (c = t.call(this, e)).state = {
                    email: "",
                    disableForm: !1,
                    done: !1
                },
                c
            }
            return Object(l.a)(n, [{
                key: "render",
                value: function() {
                    var e = this;
                    return Object(D.c)(se, null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Password Reset")), Object(D.c)(re, null, Object(D.c)(Hc, null, Object(D.c)("h1", null, "Password Reset"), this.state.errorMessage && Object(D.c)("div", {
                        className: "login-error-message"
                    }, this.state.errorMessage), this.state.done && Object(D.c)("h2", null, "An email has been sent with", Object(D.c)("br", null), "password reset instructions."), !this.state.done && Object(D.c)("form", {
                        onSubmit: this.handleSubmit.bind(this)
                    }, Object(D.c)("p", null, "Enter your account email. If an account exists with this email, we'll send a password reset message your way."), Object(D.c)("p", null, Object(D.c)("label", {
                        htmlFor: "email"
                    }, "Email"), Object(D.c)("input", {
                        type: "text",
                        name: "email",
                        value: this.state.email,
                        onChange: function(t) {
                            return e.setState({
                                email: t.target.value
                            })
                        }
                    })), Object(D.c)("p", null, Object(D.c)(xe, {
                        type: "submit",
                        name: "commit",
                        value: "Request reset email",
                        disabled: this.state.disableForm
                    }))))))
                }
            }, {
                key: "handleSubmit",
                value: function(e) {
                    var t, n = this;
                    e.preventDefault(),
                    this.setState({
                        disableForm: !0
                    }),
                    (t = this.state.email,
                    O.a.put("/api/v4/account/password-reset", {
                        email: t
                    })).then((function(e) {
                        n.setState({
                            done: !0,
                            errorMessage: void 0
                        })
                    }
                    )).catch((function(e) {
                        n.setState({
                            errorMessage: e.response.data.error || "Error"
                        })
                    }
                    )).finally((function() {
                        return n.setState({
                            disableForm: !1
                        })
                    }
                    ))
                }
            }]),
            n
        }(a.a.Component)
          , Fc = function(e) {
            Object(u.a)(n, e);
            var t = Object(d.a)(n);
            function n(e) {
                var c;
                return Object(s.a)(this, n),
                (c = t.call(this, e)).state = {
                    password: "",
                    passwordConfirmation: "",
                    disableForm: !1,
                    done: !1
                },
                c
            }
            return Object(l.a)(n, [{
                key: "render",
                value: function() {
                    var e = this;
                    return Object(D.c)(se, null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Password Reset")), Object(D.c)(re, null, Object(D.c)("div", {
                        className: "user-form"
                    }, Object(D.c)("h1", null, "Password Reset"), this.state.errorMessage && Object(D.c)("div", {
                        className: "login-error-message"
                    }, this.state.errorMessage), Object(D.c)("form", {
                        onSubmit: this.handleSubmit.bind(this)
                    }, Object(D.c)("p", null, Object(D.c)("label", {
                        htmlFor: "password"
                    }, "New Password"), Object(D.c)("input", {
                        type: "password",
                        name: "password",
                        value: this.state.password,
                        onChange: function(t) {
                            return e.setState({
                                password: t.target.value
                            })
                        }
                    })), Object(D.c)("p", null, Object(D.c)("label", {
                        htmlFor: "passwordConfirmation"
                    }, "New Password confirmation"), Object(D.c)("input", {
                        type: "password",
                        name: "passwordConfirmation",
                        value: this.state.passwordConfirmation,
                        onChange: function(t) {
                            return e.setState({
                                passwordConfirmation: t.target.value
                            })
                        }
                    })), Object(D.c)("p", null, Object(D.c)(xe, {
                        type: "submit",
                        name: "commit",
                        value: "Set new password",
                        disabled: this.state.disableForm
                    })), this.state.done && Object(D.c)(o.a, {
                        push: !0,
                        to: "/login"
                    })))))
                }
            }, {
                key: "handleSubmit",
                value: function(e) {
                    var t, n, c = this;
                    if (e.preventDefault(),
                    this.state.password !== this.state.passwordConfirmation)
                        return this.setState({
                            errorMessage: "Passwords do not match"
                        }),
                        !1;
                    this.setState({
                        disableForm: !0
                    }),
                    (t = this.props.match.params.token,
                    n = this.state.password,
                    O.a.put(v + "/account/password-reset/".concat(t), {
                        password: n
                    })).then((function(e) {
                        c.setState({
                            done: !0,
                            errorMessage: void 0
                        })
                    }
                    )).catch((function(e) {
                        c.setState({
                            errorMessage: e.response.data.error || "Error"
                        })
                    }
                    )).finally((function() {
                        return c.setState({
                            disableForm: !1
                        })
                    }
                    ))
                }
            }]),
            n
        }(a.a.Component);
        function Vc(e) {
            var t, n, c, s, l = e.redirect, u = Object(o.g)(), d = a.a.useContext(Lc).setUser, b = Object(Dc.a)(), h = b.handleSubmit, m = b.register, p = b.errors, f = b.watch, j = a.a.useState(), g = Object(r.a)(j, 2), y = g[0], v = g[1], w = a.a.useState(!1), k = Object(r.a)(w, 2), x = k[0], C = k[1], T = h((function(e) {
                var t;
                v(void 0),
                C(!0),
                (t = {
                    username: e.username,
                    password: e.password,
                    email: e.email
                },
                O.a.post("/api/v4/users", t)).then((function(e) {
                    d(e.data),
                    u.push(l)
                }
                )).catch((function(e) {
                    C(!1),
                    v(e.response.data)
                }
                ))
            }
            ));
            return Object(D.c)(se, null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Sign up")), Object(D.c)(re, null, Object(D.c)(Hc, null, Object(D.c)("h1", null, "Sign up"), Object(D.c)("h2", null, "Already have an account? ", Object(D.c)(i.a, {
                to: "/login"
            }, "Log in")), Object(D.c)("div", {
                className: "login-error-message",
                style: {
                    visibility: y ? "visible" : "hidden"
                }
            }, y || "..."), Object(D.c)("form", {
                onSubmit: T
            }, Object(D.c)("p", null, Object(D.c)("label", {
                htmlFor: "user_email"
            }, "Email ", Object(D.c)(Ce, null, null === (t = p.email) || void 0 === t ? void 0 : t.message)), Object(D.c)("input", {
                type: "text",
                name: "email",
                autoComplete: "email",
                ref: m({
                    required: "Required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })
            })), Object(D.c)("p", null, Object(D.c)("label", {
                htmlFor: "user_username"
            }, "Username ", Object(D.c)(Ce, null, null === (n = p.username) || void 0 === n ? void 0 : n.message)), Object(D.c)("input", {
                type: "text",
                name: "username",
                autoComplete: "username",
                ref: m({
                    required: "Required"
                })
            })), Object(D.c)("p", null, Object(D.c)("label", {
                htmlFor: "password"
            }, "Password ", Object(D.c)(Ce, null, null === (c = p.password) || void 0 === c ? void 0 : c.message)), Object(D.c)("input", {
                type: "password",
                name: "password",
                autoComplete: "new-password",
                ref: m({
                    required: "Required",
                    minLength: {
                        value: 6,
                        message: "Must be at least 6 characters long"
                    }
                })
            })), Object(D.c)("p", null, Object(D.c)("label", {
                htmlFor: "passwordConfirmation"
            }, "Password confirmation", " ", Object(D.c)(Ce, null, null === (s = p.passwordConfirmation) || void 0 === s ? void 0 : s.message)), Object(D.c)("input", {
                type: "password",
                name: "passwordConfirmation",
                autoComplete: "new-password",
                ref: m({
                    required: "Required",
                    validate: function(e) {
                        return e === f("password") || "Passwords must match"
                    }
                })
            })), Object(D.c)("p", null, Object(D.c)(xe, {
                type: "submit",
                name: "commit",
                value: "Sign up",
                disabled: x
            }))))))
        }
        var Wc = {
            name: "1xr2t0y",
            styles: "li{margin:20px 0;}"
        };
        function _c() {
            return Object(D.c)(se, null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Reaction Time Statistics"), Object(D.c)("meta", {
                name: "keywords",
                content: "reaction time, human benchmark, reaction, time, flash, game, reflex, test, human, benchmark, stop, go, red, light, green"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Reaction Time: Statistics."
            })), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h1", null, "Reaction Time Statistics"), Object(D.c)("p", {
                className: "tidbit"
            }, "Since this site was created, it's recorded over ", Object(D.c)("b", null, "81 million"), " ", "reaction time clicks."), Object(D.c)("p", {
                className: "tidbit"
            }, "The median reaction time is ", Object(D.c)("b", null, "273 milliseconds.")), Object(D.c)("p", {
                className: "tidbit"
            }, "The average reaction time is ", Object(D.c)("b", null, "284 milliseconds.")), Object(D.c)("p", {
                className: "tidbit"
            }, "See below for more information about input/display latency."), Object(D.c)("p", {
                className: "tidbit"
            }, "It's interesting to see that the recorded reaction times have actually gotten slightly slower over the years, which is almost certainly due to changes in input / display technology."), Object(D.c)("p", {
                className: "tidbit"
            }, "Newer operating systems tend to do more expensive visual effects, which means a longer lag time from the test to the screen."), Object(D.c)("p", {
                className: "tidbit"
            }, "Also, mobile device 'taps' tend to be a bit slower than clicks. The increase in use of mobile phones likely has an effect as well."), Object(D.c)("p", {
                className: "tidbit"
            }, "30ms is currently a typical lag for a desktop/laptop."), Object(D.c)("h2", null, "Further reading"), Object(D.c)("ul", {
                className: "links",
                css: Wc
            }, Object(D.c)("li", null, Object(D.c)("a", {
                href: "https://en.wikipedia.org/wiki/Mental_chronometry",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Mental chronometry")), Object(D.c)("li", null, Object(D.c)("a", {
                href: "https://en.wikipedia.org/wiki/Display_lag",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Display lag")), Object(D.c)("li", null, Object(D.c)("a", {
                href: "https://en.wikipedia.org/wiki/Input_lag",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Input lag")), Object(D.c)("li", null, Object(D.c)("a", {
                href: "https://www.howtogeek.com/howto/windows-vista/disable-aero-on-windows-vista/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "How to disable Aero on Windows")))))))
        }
        var Gc, Uc = Object(b.a)("div", {
            target: "e15q442n0"
        })("background:", _, ";color:", U, ";width:100%;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.2);font-size:18px;line-height:1;position:fixed;z-index:1;top:0;.mobile-menu-button{visibility: hidden;float:right;@media ", Q, "{display:none;}}h1{font-size:inherit;float:left;}a,button{color:inherit;display:inline-block;padding:15px 12px;line-height:inherit;cursor:pointer;font-size:inherit;font-family:inherit;background:none;border:none;&:hover,&.current{text-decoration:none;background:", G, ";}}.user-nav{vertical-align:top;float:right;display:none;@media ", Q, "{display:inline-block;}}.full-nav{display:none;@media ", Q, "{display:inline-block;}}"), Zc = Object(b.a)("div", {
            target: "e15q442n1"
        })("background:rgba(0,0,0,0.7);position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;display:none;&.active{display:block;}@media ", J, "{display:none !important;}.sidebar{position:absolute;background:white;width:250px;top:0;bottom:0;a{color:black;display:block;padding:12px;border-bottom:1px solid #eee;}}"), Yc = Object(b.a)("div", {
            target: "e15q442n2"
        })({
            name: "1jsohtw",
            styles: "height:48px;"
        }), Kc = function(e) {
            var t = e.user
              , n = a.a.useState(!1)
              , c = Object(r.a)(n, 2)
              , o = c[0]
              , s = c[1]
              , l = !(!t || t.username)
              , u = !(!t || t.username)
              , d = !(!t || !t.username)
              , b = !(!t || !t.username);
            return Object(D.c)(a.a.Fragment, null, Object(D.c)(Zc, {
                className: o ? "active" : "",
                onClick: function() {
                    return s(!o)
                }
            }, Object(D.c)("div", {
                className: "sidebar"
            }, Object(D.c)(i.b, {
                to: "/"
            }, Object(D.c)(Le.a, {
                icon: Pe.b,
                style: {
                    marginRight: 8,
                    opacity: .2
                }
            }), "HUMAN BENCHMARK"), u && Object(D.c)(i.b, {
                to: "/signup",
                id: "signup"
            }, "SIGN UP"), l && Object(D.c)(i.b, {
                to: "/login",
                id: "login"
            }, "LOGIN"), d && Object(D.c)(i.b, {
                to: "/logout",
                id: "logout"
            }, "LOGOUT"), b && Object(D.c)(i.b, {
                to: "/users/" + t.id,
                id: "profile"
            }, t.username))), Object(D.c)(Yc, null), Object(D.c)(Uc, null, Object(D.c)(le, null, Object(D.c)(i.b, {
                to: "/",
                exact: !0,
                activeClassName: "current"
            }, Object(D.c)("img", {
                src: "/static/media/loop_logo.png",
                alt: "Logo",
                style: {
                    marginRight: 15,
                    marginBottom: -8,
                    height: "25px" 
                }
            }), Object(D.c)(Le.a, {}), "HUMAN BENCHMARK"), Object(D.c)("button", {
                className: "mobile-menu-button",
                onClick: function() {
                    return s(!o)
                }
            }, Object(D.c)(Le.a, {
                icon: Pe.a,
                size: "xs"
            })), Object(D.c)("div", {
                className: "full-nav"
            },), Object(D.c)("div", {
                className: "user-nav"
            },))))
        }, Xc = n(216);
        var Jc = {
            blipLow: n(684),
            blipHigh: n(685)
        }
          , Qc = 100
          , $c = Object(D.d)(Gc || (Gc = Object(P.a)(["\n  from {\n    transform: translate(-50%, -50%) scale(0.5, 0.5);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.05, 1.05);\n  }\n  to {\n    transform: translate(-50%, -50%) scale(1, 1);\n  }\n"])))
          , ea = Object(b.a)("div", {
            target: "e6yfngs0"
        })({
            name: "1k4dpwl",
            styles: "height:100%;position:relative;perspective:100;perspective-origin:center;"
        })
          , ta = Object(b.a)("div", {
            target: "e6yfngs1"
        })("position:absolute;border-radius:50%;animation:", $c, " 0.2s ease-out;")
          , na = Object(b.a)("div", {
            target: "e6yfngs2"
        })("position:absolute;border-radius:50%;background:rgba(255,255,255,0.5);width:", Qc, "px;height:", Qc, "px;transform:translate(-50%,-50%);")
          , ca = Object(b.a)("div", {
            target: "e6yfngs3"
        })({
            name: "z6vxiy",
            styles: "position:absolute;border-radius:50%;border:2px solid white;transform:translate(-50%,-50%);"
        })
          , aa = Object(b.a)("div", {
            target: "e6yfngs4"
        })({
            name: "17nnhwz",
            styles: "position:absolute;background:white;transform:translate(-50%,-50%);"
        });
        function ra(e, t) {
            switch (t.type) {
            case "newTarget":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    sound: {
                        type: "blipHigh",
                        volume: .2
                    },
                    targets: [].concat(Object(Zn.a)(e.targets), [{
                        x: 770 * Math.random() + Qc,
                        y: 300 * Math.random() + Qc,
                        t: (new Date).getTime()
                    }])
                });
            case "clickedTarget":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    targets: e.targets.filter((function(e, n) {
                        return n !== t.idx
                    }
                    )),
                    results: [].concat(Object(Zn.a)(e.results), [(new Date).getTime() - e.targets[t.idx].t])
                });
            case "clickedBackdrop":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    sound: {
                        type: "blipLow",
                        volume: .2
                    }
                });
            case "reset":
                return oa
            }
            return e
        }
        var oa = {
            results: [],
            targets: [{
                x: 485,
                y: 250,
                t: (new Date).getTime()
            }]
        };
        function ia(e) {
            return function(e) {
                return e.results.slice(1).reduce((function(e, t) {
                    return e + t
                }
                ), 0)
            }(e) / (e.results.length - 1)
        }
        var sa = {
            name: "1d8k8ed",
            styles: "display:flex;flex-direction:column;justify-content:center;height:100%;"
        };
        function la() {
            var e = a.a.useReducer(ra, oa)
              , t = Object(r.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , o = On(n.sound, Jc).volumeEl;
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Aim Trainer")), Object(D.c)(me, {
                onClick: function(e) {}
            }, o, Object(D.c)("div", {
                className: "desktop-only",
                style: {
                    height: "100%"
                }
            }, 0 === n.results.length && Object(D.c)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                className: "anim-slide-fade-in"
            }, Object(D.c)("div", null, Object(D.c)("h1", null, "Aim Trainer")), Object(D.c)("div", {
                style: {
                    height: 150
                }
            }), Object(D.c)("p", null, "Hit 30 targets as quickly as you can."), Object(D.c)("p", null, "Click the target above to begin."), Object(D.c)("div", {
                style: {
                    height: 30
                }
            })), n.results.length > 0 && n.results.length <= 30 && Object(D.c)(Ne, {
                label: "Remaining",
                value: 30 - n.results.length + 1
            }), n.results.length < 31 ? Object(D.c)(ea, {
                onMouseDown: function(e) {
                    _e(e),
                    c({
                        type: "clickedBackdrop"
                    })
                }
            }, n.targets.map((function(e, t) {
                return Object(D.c)("div", {
                    onMouseDown: function(e) {
                        _e(e),
                        function(e) {
                            c({
                                type: "clickedTarget",
                                idx: e
                            }),
                            c({
                                type: "newTarget"
                            })
                        }(t)
                    },
                    key: e.t,
                    style: {
                        width: 0,
                        height: 0,
                        transform: Object(Xc.a)(Object(Xc.b)(e.x, e.y, 0))
                    }
                }, Object(D.c)(ta, {
                    "data-aim-target": !0
                }, Object(D.c)(na, null), Object(D.c)(ca, {
                    style: {
                        width: 33.333,
                        height: 33.333
                    }
                }), Object(D.c)(ca, {
                    style: {
                        width: 66.667,
                        height: 66.667
                    }
                }), Object(D.c)(ca, {
                    style: {
                        width: Qc,
                        height: Qc
                    }
                }), Object(D.c)(aa, {
                    style: {
                        width: 2,
                        height: Qc
                    }
                }), Object(D.c)(aa, {
                    style: {
                        width: Qc,
                        height: 2
                    }
                })))
            }
            ))) : Object(D.c)("div", {
                css: sa
            }, Object(D.c)(bn, {
                testId: "aim",
                label: "Average time per target",
                score: ia(n),
                displayScore: ia(n).toFixed() + "ms",
                onReset: function() {
                    return c({
                        type: "reset"
                    })
                }
            }))), Object(D.c)("div", {
                className: "desktop-only-warning"
            }, Object(D.c)("p", null, "This test is intended to be taken on a desktop or laptop. (Or make your browser window larger)"))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h2", null, "Statistics"), Object(D.c)(un, {
                testId: "aim",
                endIdx: 25
            }))))))
        }
        function ua() {
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Privacy Policy")), Object(D.c)(se, null, Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h1", null, "Privacy Policy"), Object(D.c)("p", null, "Human Benchmark operates the https://humanbenchmark.com website, which provides the SERVICE."), Object(D.c)("p", null, "This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Human Benchmark website."), Object(D.c)("p", null, "If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy."), Object(D.c)("h2", null, "Information Collection and Use"), Object(D.c)("p", null, "For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you."), Object(D.c)("h2", null, "Log Data"), Object(D.c)("p", null, 'We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer\u2019s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.'), Object(D.c)("h2", null, "Cookies"), Object(D.c)("p", null, "Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer\u2019s hard drive."), Object(D.c)("p", null, 'Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.'), Object(D.c)("p", null, "For more general information on cookies, please read", " ", Object(D.c)("a", {
                href: "https://www.cookieconsent.com/what-are-cookies/"
            }, '"What Are Cookies"'), "."), Object(D.c)("h2", null, "Service Providers"), Object(D.c)("p", null, "We may employ third-party companies and individuals due to the following reasons:"), Object(D.c)("ul", null, Object(D.c)("li", null, "To facilitate our Service;"), Object(D.c)("li", null, "To provide the Service on our behalf;"), Object(D.c)("li", null, "To perform Service-related services; or"), Object(D.c)("li", null, "To assist us in analyzing how our Service is used.")), Object(D.c)("p", null, "We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."), Object(D.c)("h2", null, "Security"), Object(D.c)("p", null, "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."), Object(D.c)("h2", null, "Links to Other Sites"), Object(D.c)("p", null, "Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."), Object(D.c)("p", null, "Children's Privacy"), Object(D.c)("p", null, "Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."), Object(D.c)("h2", null, "Changes to This Privacy Policy"), Object(D.c)("p", null, "We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page."), Object(D.c)("h2", null, "Contact Us"), Object(D.c)("p", null, "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us."))))))
        }
        var da = n(163)
          , ba = n.n(da);
        var ha = Object(b.a)("div", {
            target: "e1w7k0hl0"
        })({
            name: "wqebcz",
            styles: "table{width:100%;}th,td{text-align:left;padding:5px;}.activity-feed-item{.activity-feed-icon{width:30px;height:30px;background-size:30px;filter:saturate(0) sepia(1) hue-rotate(180deg);}&:hover{.activity-feed-icon{filter:none;}}.activity-feed-details{padding-left:10px;}.ago{color:#ccc;}}"
        });
        function ma(e) {
            var t = a.a.useState(null)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1]
              , i = a.a.useState(null)
              , s = Object(r.a)(i, 2)
              , l = s[0]
              , u = s[1];
            return a.a.useEffect((function() {
                C(e.userId).then((function(e) {
                    return o(e.data)
                }
                )),
                w(e.userId).then((function(e) {
                    return u(e.data)
                }
                ))
            }
            ), [e.userId]),
            c ? 0 === c.length ? Object(D.c)(ha, null, Object(D.c)("h2", null, "Activity feed"), Object(D.c)("p", {
                style: {
                    marginTop: "20px"
                }
            }, "You haven't recorded any scores yet. Try a game!")) : Object(D.c)(ha, null, Object(D.c)("h2", null, "Activity feed"), Object(D.c)("table", {
                style: {
                    paddingTop: "20px"
                }
            }, Object(D.c)("tbody", null, Object(D.c)("tr", null, Object(D.c)("th", null, "Test"), Object(D.c)("th", null), Object(D.c)("th", null, "Date"), Object(D.c)("th", null, "Score")), l && c && c.map((function(e) {
                return Object(D.c)(pa, {
                    user: l,
                    score: e,
                    key: e.id
                })
            }
            ))))) : Object(D.c)(ha, null, Object(D.c)(it.a, null))
        }
        function pa(e) {
            var t = e.score
              , n = en[t.testId];
            return n ? Object(D.c)("tr", {
                className: "activity-feed-item"
            }, Object(D.c)("td", null, Object(D.c)(i.a, {
                to: n.url
            }, Object(D.c)(n.icon, {
                color: "currentcolor",
                title: n.title,
                width: "30px",
                height: "30px"
            }))), Object(D.c)("td", null, Object(D.c)(i.a, {
                to: n.url
            }, n.title)), Object(D.c)("td", null, Object(D.c)(ba.a, {
                date: t.createdAt
            }), Object(D.c)("p", {
                className: "ago"
            }, new Date(t.createdAt).toLocaleString())), Object(D.c)("td", null, t.score.toFixed(), n.scoreRowSuffix)) : null
        }
        var fa = n(333)
          , Oa = n.n(fa)
          , ja = n(334)
          , ga = n.n(ja)
          , ya = n(335)
          , va = n.n(ya)
          , wa = n(336)
          , ka = n.n(wa)
          , xa = n(337)
          , Ca = n.n(xa);
        function Ta(e) {
            var t = a.a.useState(null)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1];
            return a.a.useEffect((function() {
                var t = C(e.userId).then((function(e) {
                    var t = Oa()(Object.keys(en).map((function(e) {
                        return [e, {
                            testId: e,
                            data: []
                        }]
                    }
                    )));
                    return e.data.forEach((function(e) {
                        t[e.testId] && t[e.testId].data.push(e)
                    }
                    )),
                    va()(t, (function(e) {
                        return Object(at.a)(Object(at.a)({}, e), {}, {
                            data: e.data.slice(0, 5)
                        })
                    }
                    ))
                }
                ))
                  , n = Promise.all(Object.keys(en).map((function(e) {
                    return N(e).then((function(t) {
                        return {
                            testId: e,
                            data: t.data
                        }
                    }
                    ))
                }
                ))).then((function(e) {
                    return ga()(e, "testId")
                }
                ));
                Promise.all([t, n]).then((function(e) {
                    var t = Object(r.a)(e, 2)
                      , n = t[0]
                      , c = t[1]
                      , a = Ca()(n).map((function(e) {
                        var t = Object(r.a)(e, 2)
                          , n = t[0]
                          , a = t[1];
                        return {
                            testId: n,
                            score: cn(a.data),
                            percentile: an(n, a.data, c[n].data)
                        }
                    }
                    ));
                    a = ka()(a, (function(e) {
                        return null === e.percentile ? -1e5 : e.percentile
                    }
                    )).reverse(),
                    o(a)
                }
                ))
            }
            ), [e.userId]),
            c ? Object(D.c)(a.a.Fragment, null, Object(D.c)("table", {
                css: Object(D.b)("display:none;@media ", Q, "{display:table;}width:100%;border-collapse:collapse;th{padding:10px;text-align:left;}td{padding:10px;}tr:nth-of-type(2n){background:#f8f8f8;}")
            }, Object(D.c)("tbody", null, Object(D.c)("tr", null, Object(D.c)("th", null, "Test"), Object(D.c)("th", null, "Actions"), Object(D.c)("th", null, "Score", " ", Object(D.c)(Le.a, {
                size: "sm",
                icon: Pe.h,
                color: "#ccc",
                title: "Scores are calculated from the last 5 tests."
            })), Object(D.c)("th", null, "Percentile", " ", Object(D.c)(Le.a, {
                size: "sm",
                icon: Pe.h,
                color: "#ccc",
                title: "Percentiles are calculated from the last 5 tests. A higher percentile is better."
            }))), c && c.map((function(t) {
                return Object(D.c)(Na, Object(L.a)({
                    key: t.testId,
                    userId: e.userId
                }, t))
            }
            )))), Object(D.c)("table", {
                css: Object(D.b)("display:table;@media ", Q, "{display:none;}width:100%;border-collapse:collapse;th{padding:10px;text-align:left;}td{padding:10px 0;}")
            }, Object(D.c)("tbody", null, c && c.map((function(t) {
                return Object(D.c)(Sa, Object(L.a)({
                    key: t.testId,
                    userId: e.userId
                }, t))
            }
            ))))) : Object(D.c)(it.a, null)
        }
        var Ia = {
            name: "1domaf0",
            styles: "width:200px;"
        };
        function Na(e) {
            return Object(D.c)("tr", null, Object(D.c)("td", null, Object(D.c)(Da, null, en[e.testId].title)), Object(D.c)("td", null, Object(D.c)(qa, null, Object(D.c)(i.a, {
                to: "/tests/".concat(e.testId),
                style: {
                    marginRight: 15
                }
            }, Object(D.c)(Le.a, {
                icon: Pe.i
            }), " Play"), Object(D.c)(i.a, {
                to: "/users/".concat(e.userId, "/").concat(e.testId)
            }, Object(D.c)(Le.a, {
                icon: Pe.c
            }), " Stats"))), Object(D.c)("td", null, Object(D.c)(Ra, {
                score: e.score,
                testId: e.testId
            })), Object(D.c)("td", {
                css: Ia
            }, Object(D.c)(Ha, {
                percentile: e.percentile
            })))
        }
        function Sa(e) {
            return Object(D.c)("tr", null, Object(D.c)("td", null, Object(D.c)(Da, null, en[e.testId].title), Object(D.c)(qa, null, Object(D.c)("div", {
                style: {
                    marginTop: 10
                }
            }, Object(D.c)(i.a, {
                to: "/tests/".concat(e.testId)
            }, Object(D.c)(Le.a, {
                icon: Pe.i
            }), " Play")), Object(D.c)("div", {
                style: {
                    marginTop: 10
                }
            }, Object(D.c)(i.a, {
                to: "/users/".concat(e.userId, "/").concat(e.testId)
            }, Object(D.c)(Le.a, {
                icon: Pe.c
            }), " Stats")))), Object(D.c)("td", null, Object(D.c)(Ra, {
                score: e.score,
                testId: e.testId
            }), Object(D.c)(Ha, {
                percentile: e.percentile
            })))
        }
        var Ma = {
            name: "l1jgaf",
            styles: "font-size:36px;font-weight:bold;span{font-size:16px;margin-left:6px;}"
        };
        function Ra(e) {
            return Object(D.c)("div", {
                css: Ma
            }, null != e.score ? Object(D.c)(a.a.Fragment, null, nn(e.score, e.testId), Object(D.c)("span", null, en[e.testId].units)) : "?")
        }
        var Aa = {
            name: "34fwh",
            styles: "display:flex;align-items:center;background:#ddd;width:100%;height:32px;span{padding:0px 8px;font-weight:bold;}"
        }
          , Ea = {
            name: "1l6lsyu",
            styles: "flex-grow:1;text-align:right;padding:0px 8px;"
        }
          , Pa = {
            name: "bv69nn",
            styles: "opacity:0.8;"
        }
          , La = {
            name: "bv69nn",
            styles: "opacity:0.8;"
        };
        function Ha(e) {
            var t = (100 * (e.percentile || 0)).toFixed(1);
            return Object(D.c)("div", {
                css: Aa
            }, Object(D.c)("div", {
                css: Object(D.b)("display:flex;align-items:center;background:#257cff;color:white;width:", t, "%;height:100%;text-align:right;")
            }, null != e.percentile && e.percentile >= .5 && Object(D.c)("div", {
                css: Ea
            }, t + "%")), null != e.percentile && e.percentile < .5 && Object(D.c)("span", {
                css: Pa
            }, t, "%"), null == e.percentile && Object(D.c)("span", {
                css: La
            }, "?"))
        }
        var Da = Object(b.a)("div", {
            target: "e1s5avgb0"
        })({
            name: "dgmhlt",
            styles: "font-weight:bold;font-size:18px;"
        })
          , qa = Object(b.a)("div", {
            target: "e1s5avgb1"
        })({
            name: "dgu1g4",
            styles: "font-size:18px;a{text-decoration:none;&:hover{color:black;}whitespace:nowrap;}"
        });
        function za(e) {
            var t = e.userId
              , n = e.testId
              , c = a.a.useState(null)
              , o = Object(r.a)(c, 2)
              , i = o[0]
              , s = o[1]
              , l = a.a.useState(null)
              , u = Object(r.a)(l, 2)
              , d = u[0]
              , b = u[1]
              , h = a.a.useState(null)
              , m = Object(r.a)(h, 2)
              , p = m[0]
              , f = m[1];
            if (a.a.useEffect((function() {
                w(t).then((function(e) {
                    return s(e.data)
                }
                )),
                N(n).then((function(e) {
                    return b(e.data)
                }
                )),
                function(e, t) {
                    return O.a.get(v + "/users/".concat(e, "/tests/").concat(t, "/statistics"))
                }(t, n).then((function(e) {
                    return f(e.data)
                }
                ))
            }
            ), [t, n]),
            !(i && d && p))
                return Object(D.c)(it.a, null);
            var j = [{
                label: Ga(i),
                data: p,
                backgroundColor: "rgb(43, 135, 209, 0.2)",
                borderColor: "rgb(43, 135, 209)",
                units: en[n].scoreRowSuffix
            }, {
                label: "Average users",
                data: d,
                backgroundColor: "rgb(43, 135, 209, 0.2)",
                borderColor: "rgb(0, 0, 0, 0)",
                units: en[n].scoreRowSuffix
            }];
            return Object(D.c)(a.a.Fragment, null, Object(D.c)("h2", null, en[n].title, " Statistics"), Object(D.c)("div", {
                style: {
                    position: "relative",
                    height: 250,
                    paddingTop: 20
                }
            }, Object(D.c)(ln, {
                seriesList: j
            })))
        }
        function Ba(e) {
            var t = a.a.useState(null)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1];
            return a.a.useEffect((function() {
                T(e.userId, e.testId).then((function(e) {
                    return o(e.data.reverse())
                }
                ))
            }
            ), [e.userId, e.testId]),
            c ? Object(D.c)(a.a.Fragment, null, Object(D.c)("h2", null, "Recent ", en[e.testId].title, " Results"), Object(D.c)("div", {
                style: {
                    position: "relative",
                    height: 250,
                    paddingTop: 20
                }
            }, Object(D.c)(sn, {
                label: en[e.testId].scoreColumnTitle,
                scores: c
            }))) : Object(D.c)(it.a, null)
        }
        var Fa = Object(b.a)("div", {
            target: "e1mz7xfy0"
        })({
            name: "1msw6mx",
            styles: "&:not(:last-child){margin-bottom:20px;}"
        })
          , Va = Object(b.a)("div", {
            target: "e1mz7xfy1"
        })({
            name: "1vs9cou",
            styles: "opacity:0.6;"
        })
          , Wa = Object(b.a)("div", {
            target: "e1mz7xfy2"
        })("");
        function _a(e) {
            var t = e.userId
              , n = e.isCurrentUser
              , c = a.a.useState(null)
              , o = Object(r.a)(c, 2)
              , i = o[0]
              , s = o[1];
            return a.a.useEffect((function() {
                w(t).then((function(e) {
                    return s(e.data)
                }
                ))
            }
            ), [t]),
            i ? Object(D.c)("div", {
                key: t
            }, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Dashboard - ".concat(Ga(i))), Object(D.c)("meta", {
                name: "keywords",
                content: "brain games, leaderboards, user profile, statistics"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Brain game statistics."
            })), Object(D.c)(se, null, Object(D.c)(ce, null, Object(D.c)(Ka, {
                userId: t,
                isCurrentUser: n
            }), Object(D.c)("div", {
                style: {
                    flexGrow: 1
                }
            }, Object(D.c)(Ja, {
                userId: t
            }), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(Ta, {
                userId: t
            }))), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ma, {
                userId: t
            }))))))) : null
        }
        function Ga(e) {
            return e ? e.username || "Guest user" : ""
        }
        function Ua(e) {
            var t = e.userId
              , n = e.testId
              , c = e.isCurrentUser
              , o = a.a.useState(null)
              , i = Object(r.a)(o, 2)
              , s = i[0]
              , l = i[1];
            return a.a.useEffect((function() {
                w(t).then((function(e) {
                    return l(e.data)
                }
                ))
            }
            ), [t]),
            s ? Object(D.c)("div", {
                key: t + "|" + n
            }, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Dashboard - ".concat(Ga(s))), Object(D.c)("meta", {
                name: "keywords",
                content: "brain games, leaderboards, user profile, statistics"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Brain game statistics."
            })), Object(D.c)(se, null, Object(D.c)(ce, null, Object(D.c)(Ka, {
                userId: t,
                testId: n,
                isCurrentUser: c
            }), Object(D.c)("div", {
                style: {
                    flexGrow: 1
                }
            }, Object(D.c)(ce, null, Object(D.c)(Qa, {
                userId: t,
                testId: n
            })), Object(D.c)(ce, null, Object(D.c)(on, {
                userId: t,
                testId: n
            })), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(za, {
                userId: t,
                testId: n
            }))), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(Ba, {
                userId: t,
                testId: n
            }))))))) : null
        }
        var Za = Object(b.a)("div", {
            target: "e1mz7xfy3"
        })({
            name: "armjll",
            styles: "margin-bottom:40px;&:last-child{margin-bottom:0;}"
        })
          , Ya = Object(b.a)("div", {
            target: "e1mz7xfy4"
        })("display:none;@media ", Q, "{display:block;}")
          , Ka = function(e) {
            var t = a.a.useState(null)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1];
            return Object(D.c)(Ya, null, Object(D.c)(re, null, tn.map((function(t) {
                var n = t === e.testId || c === t
                  , a = en[t];
                return Object(D.c)(Za, {
                    key: t,
                    onMouseEnter: function(e) {
                        return o(t)
                    },
                    onMouseLeave: function(e) {
                        return o(null)
                    },
                    title: en[t].title
                }, Object(D.c)(i.a, {
                    to: "/users/" + e.userId + "/" + t
                }, Object(D.c)(a.icon, {
                    color: n ? B : W,
                    style: {
                        opacity: n ? 1 : .5,
                        width: 50,
                        height: 50
                    },
                    title: en[t].title
                })))
            }
            ))))
        }
          , Xa = {
            name: "i6bazn",
            styles: "overflow:hidden;"
        };
        function Ja(e) {
            var t = e.userId
              , n = a.a.useState(null)
              , c = Object(r.a)(n, 2)
              , o = c[0]
              , s = c[1];
            return a.a.useEffect((function() {
                w(t).then((function(e) {
                    return s(e.data)
                }
                ))
            }
            ), [t]),
            o ? Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(Fa, null, Object(D.c)(Va, null, "Username"), Object(D.c)(Wa, {
                css: Xa,
                "data-testid": "username",
                style: {
                    fontSize: "40px",
                    fontWeight: 700,
                    lineHeight: 1
                }
            }, o ? Ga(o) : Object(D.c)("span", null, "\xa0"))), Object(D.c)(Fa, null, Object(D.c)(Va, null, "Joined"), Object(D.c)(Wa, null, o && Object(D.c)(ba.a, {
                date: o.createdAt
            }))), null === (null === o || void 0 === o ? void 0 : o.username) && Object(D.c)("div", {
                className: "link"
            }, Object(D.c)(i.b, {
                to: "/login"
            }, "Log in"), " or", " ", Object(D.c)(i.b, {
                to: "/signup"
            }, "sign up"), " to save your results"), null !== (null === o || void 0 === o ? void 0 : o.username) && Object(D.c)("p", null, Object(D.c)(i.a, {
                to: "/users/" + o.id
            }, "Permalink")))) : Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(it.a, null)))
        }
        function Qa(e) {
            var t = a.a.useState(null)
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , o = n[1];
            a.a.useEffect((function() {
                w(e.userId).then((function(e) {
                    return o(e.data)
                }
                ))
            }
            ), [e.userId]);
            var s = en[e.testId];
            return c && s ? Object(D.c)(re, null, Object(D.c)("h2", null, Object(D.c)(i.a, {
                to: "/users/" + c.id
            }, Ga(c)), " >", " ", s.title), c && null === c.username && Object(D.c)("div", {
                className: "link",
                style: {
                    marginTop: 20
                }
            }, Object(D.c)(i.b, {
                to: "/login"
            }, "Log in"), " or", " ", Object(D.c)(i.b, {
                to: "/signup"
            }, "sign up"), " to save your results")) : Object(D.c)(re, null, Object(D.c)(it.a, null))
        }
        function $a() {
            var e = a.a.useContext(Lc)
              , t = e.user
              , n = e.setUser
              , c = Object(o.g)();
            return null === (null === t || void 0 === t ? void 0 : t.username) ? (c.push("/"),
            null) : t ? Object(D.c)(se, null, Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, {
                style: {
                    textAlign: "center"
                }
            }, Object(D.c)("h1", null, "Delete account"), Object(D.c)("p", null, "Are you sure you want to delete you account:", " ", Object(D.c)("b", null, t.username), "?"), Object(D.c)("p", null, "This will delete your account and all associated data, permanently."), Object(D.c)("p", null, Object(D.c)("i", null, "This cannot be undone.")), Object(D.c)("div", {
                style: {
                    marginTop: 40
                }
            }, Object(D.c)("span", {
                onClick: function() {
                    O.a.delete("/api/v4/users").then((function() {
                        return k()
                    }
                    )).then((function(e) {
                        n(e.data),
                        c.push("/")
                    }
                    ))
                },
                style: {
                    color: "red",
                    marginRight: 40,
                    cursor: "pointer"
                }
            }, "Confirm delete account"), Object(D.c)(i.a, {
                to: "/dashboard"
            }, "Cancel")))))) : null
        }
        var er = Object(D.b)("color:", q, ";b{font-weight:bold;}ul{list-style:none;}a{cursor:pointer;color:", W, ';text-decoration:none;&:hover{text-decoration:underline;}}.overflow-hidden{overflow:hidden;}input,select,textarea{font-family:inherit;font-size:inherit;font-weight:inherit;color:inherit;}input:not([type="submit"]){padding:10px;border:1px solid #ccc;&:focus{padding:9px;border:2px solid #48a1ef;}}.faint-label{color:rgba(255,255,255,0.6);}@keyframes pulse{from{opacity:0;}to{opacity:1;}}@keyframes pulse-faint{from{opacity:0.6;}to{opacity:1;}}.pulse{animation:pulse 0.6s ease-in-out alternate infinite;}.pulse-faint{animation:pulse-faint 1s ease-in-out alternate infinite;}.can-collapse{display:inline;@media #{$tablet}{display:block;}& + .can-collapse:before{content:" ";}}.desktop-only{display:none;@media ', Q, "{display:block;}}.desktop-only-warning{display:block;background:#ffcc99;color:black;padding:10px;border-radius:10px;@media ", Q, "{display:none;}}.hero-icon{width:100px;height:100px;}@keyframes standardFeedbackPositive{from{background:", z, ";}50%{background:#3aa4f9;}to{background:", z, ";}}@keyframes standardFeedbackNegative{from{background:", F, ";}to{background:", z, ";}}.anim-correct{animation-name:standardFeedbackPositive;animation-duration:0.8s;}.anim-incorrect{animation-name:standardFeedbackNegative;animation-duration:0.8s;}@keyframes slideFadeIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0px);}}.anim-slide-fade-in{animation-name:slideFadeIn;animation-duration:0.5s;animation-timing-function:ease-out;}")
          , tr = [0, 2, 4, 5, 7, 9, 11];
        function nr(e) {
            var t = tr[yn(e, tr.length)] + 12 * Math.floor(e / tr.length);
            return Math.pow(2, t / 12)
        }
        var cr = {
            phase: "splash",
            sequence: [],
            delay: 500,
            promptProgress: 0
        };
        function ar(e) {
            return [6, 7, 8, 3, 4, 5, 0, 1, 2][e]
        }
        function rr(e, t) {
            switch (t.type) {
            case "initStage":
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "prompt",
                    promptProgress: -1,
                    sequence: or(e.sequence),
                    delay: 1e3
                });
            case "tick":
                return "prompt" !== e.phase ? e : e.promptProgress + 1 >= e.sequence.length ? {
                    phase: "response",
                    sequence: e.sequence,
                    promptProgress: 0
                } : Object(at.a)(Object(at.a)({}, e), {}, {
                    delay: 500,
                    promptProgress: e.promptProgress + 1,
                    sound: {
                        type: "boop",
                        pitch: nr(ar(e.sequence[e.promptProgress + 1])),
                        volume: .2
                    }
                });
            case "clickedSquare":
                if ("response" !== e.phase)
                    return e;
                var n = t.x + 3 * t.y;
                if (e.sequence[e.promptProgress] === n) {
                    var c = {
                        type: "boop",
                        pitch: nr(ar(n)),
                        volume: .2
                    };
                    return e.promptProgress + 1 >= e.sequence.length ? rr(Object(at.a)(Object(at.a)({}, e), {}, {
                        sound: c
                    }), {
                        type: "initStage"
                    }) : Object(at.a)(Object(at.a)({}, e), {}, {
                        promptProgress: e.promptProgress + 1,
                        sound: c
                    })
                }
                return Object(at.a)(Object(at.a)({}, e), {}, {
                    phase: "gameover",
                    sound: {
                        type: "boop",
                        pitch: nr(-4),
                        volume: .25
                    }
                });
            case "reset":
                return cr
            }
        }
        function or(e) {
            var t = De()(9).filter((function(t) {
                return t !== e[e.length - 1]
            }
            ));
            return [].concat(Object(Zn.a)(e), [nc()(t)])
        }
        var ir = {
            boop: n(195)
        }
          , sr = "60px"
          , lr = Object(b.a)(me, {
            target: "ea4to4h0"
        })(".squares{position:relative;transform:translateZ(0px);.square{cursor:pointer;display:inline-block;vertical-align:top;width:", sr, ";height:", sr, ";background:#000066;opacity:0.15;border-radius:10px;border:4px solid rgba(0,0,0,0);background-clip:padding-box !important;backface-visibility:visible;transform:scale(1,1);transition:transform ease-out 0.3s,opacity ease-out 0.3s,background ease-out 0.3s;z-index:1;&.active,&:active{opacity:1;background:white;transform:scale(1,1);transition:none;}&.error{background:rgba(0,0,0,0.5);}}}")
          , ur = function() {
            var e = a.a.useReducer(rr, cr)
              , t = Object(r.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , o = a.a.useCallback((function() {
                return c({
                    type: "tick"
                })
            }
            ), []);
            dn(n, o);
            var i = On(n.sound, ir).volumeEl;
            return Object(D.c)("div", null, Object(D.c)(qe.a, null, Object(D.c)("title", null, "Human Benchmark - Sequence Memory Test"), Object(D.c)("meta", {
                name: "keywords",
                content: "memory test, short term memory, memory game, memorization"
            }), Object(D.c)("meta", {
                name: "description",
                content: "Memory Test: How good is your memory."
            }), Object(D.c)("meta", {
                property: "og:site_name",
                content: "Human Benchmark"
            }), Object(D.c)("meta", {
                property: "og:type",
                content: "game"
            }), Object(D.c)("meta", {
                property: "og:title",
                content: "Memory Test"
            }), Object(D.c)("meta", {
                property: "og:description",
                content: "Compete for the best memory in the world."
            }), Object(D.c)("meta", {
                property: "og:url",
                content: "http://www.humanbenchmark.com/tests/memory"
            })), Object(D.c)(lr, {
                className: "memory-test",
                css: "prompt" === n.phase && n.sequence.length > 1 ? Oe : "gameover" === n.phase ? je : ""
            }, i, Object(D.c)("div", {
                className: "anim-slide-fade-in"
            }, "splash" === n.phase && Object(D.c)("div", null, Object(D.c)(be, null, Object(D.c)($t.icon, {
                color: "white",
                className: "pulse-faint hero-icon"
            }), Object(D.c)("h1", null, "Sequence Memory Test"), Object(D.c)("h2", null, "Memorize the pattern.")), Object(D.c)(be, null, Object(D.c)(we, {
                onMouseDown: function() {
                    return c({
                        type: "initStage"
                    })
                }
            }, "Start"))), "splash" !== n.phase && "gameover" !== n.phase && Object(D.c)(be, null, Object(D.c)(be, null, Object(D.c)(Ne, {
                label: "Level:",
                value: n.sequence.length
            })), Object(D.c)(be, null, Object(D.c)("div", {
                className: "squares"
            }, De()(3).map((function(e) {
                return Object(D.c)("div", {
                    key: e,
                    className: "square-row"
                }, De()(3).map((function(t) {
                    return Object(D.c)("div", {
                        key: t,
                        className: E()(br(n, t, e)),
                        onMouseDown: function() {
                            return c({
                                type: "clickedSquare",
                                x: t,
                                y: e
                            })
                        },
                        onTouchStart: function() {
                            return c({
                                type: "clickedSquare",
                                x: t,
                                y: e
                            })
                        },
                        onTouchEnd: _e,
                        style: dr(n)
                    })
                }
                )))
            }
            ))))), "gameover" === n.phase && Object(D.c)(bn, {
                testId: "sequence",
                label: "Sequence Memory",
                score: n.sequence.length,
                displayScore: "Level " + n.sequence.length,
                onReset: function() {
                    return c({
                        type: "reset"
                    })
                }
            }))), Object(D.c)(se, null, Object(D.c)(Je, null), Object(D.c)(ce, null, Object(D.c)(re, null, Object(D.c)(ie, null, Object(D.c)("h1", null, "Statistics"), Object(D.c)(un, {
                testId: "sequence",
                endIdx: 30
            }))))))
        };
        function dr(e) {
            var t = Math.min(400, window.innerWidth - 50)
              , n = Math.floor(t / 3 - 1);
            return {
                width: n + "px",
                height: n + "px",
                borderWidth: n / 16 + "px",
                borderRadius: n / 8 + "px"
            }
        }
        function br(e, t, n) {
            return {
                square: !0,
                active: hr(e, t, n)
            }
        }
        function hr(e, t, n) {
            var c = 3 * n + t;
            return "prompt" === e.phase && e.sequence[e.promptProgress] === c
        }
        function mr() {
            var e = a.a.useContext(Lc)
              , t = e.user
              , n = e.setUser;
            a.a.useEffect((function() {
            }
            ), [n]);
            var c = Object(o.h)();
            return Object(D.c)("div", {
                css: er
            }, Object(D.c)(Kc, {
                user: t
            }), Object(D.c)(o.d, null, Object(D.c)(o.b, {
                exact: !0,
                path: "/",
                component: Ec
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/delete-account",
                component: $a
            }), Object(D.c)(o.b, {
                path: "/dashboard",
                render: function() {
                    return t ? Object(D.c)(_a, {
                        userId: t.id,
                        isCurrentUser: !0
                    }) : null
                }
            }), Object(D.c)(o.b, {
                path: "/dashboard/:testId",
                render: function(e) {
                    return t ? Object(D.c)(Ua, {
                        userId: t.id,
                        isCurrentUser: !0,
                        testId: e.match.params.testId
                    }) : null
                }
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/users/:userId",
                render: function(e) {
                    return Object(D.c)(_a, {
                        userId: e.match.params.userId,
                        isCurrentUser: !1
                    })
                }
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/users/:userId/:testId",
                render: function(e) {
                    return Object(D.c)(Ua, {
                        userId: e.match.params.userId,
                        testId: e.match.params.testId,
                        isCurrentUser: !1
                    })
                }
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/games",
                render: function() {
                    return Object(D.c)(o.a, {
                        to: "/"
                    })
                }
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/logout",
                render: function() {
                    return Object(D.c)(zc, {
                        redirect: "/"
                    })
                }
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/login",
                render: function() {
                    return Object(D.c)(qc, {
                        redirect: "/dashboard"
                    })
                }
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/signup",
                render: function() {
                    return Object(D.c)(Vc, {
                        redirect: "/dashboard"
                    })
                }
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/reactiontime",
                component: ec
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/memory",
                component: Ln
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/verbal-memory",
                component: mc
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/number-memory",
                component: Gn
            }), Object(D.c)(o.a, {
                exact: !0,
                path: "/tests/hearing",
                to: "/"
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/interval-trainer",
                component: Ee
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/typing",
                component: lc
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/aim",
                component: la
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/chimp",
                component: Cc
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/sequence",
                component: ur
            }), Object(D.c)(o.a, {
                from: "/tests/:testId/leaderboard",
                to: "/tests/:testId"
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/tests/:testId/statistics",
                component: _c
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/privacy",
                component: ua
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/licensing",
                component: Pc
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/account/password-reset",
                component: Bc
            }), Object(D.c)(o.b, {
                exact: !0,
                path: "/account/password-reset/:token",
                component: Fc
            }), Object(D.c)(o.b, {
                component: Mc
            })))
        }
        var pr = n(106)
          , fr = n(42);
        function Or() {
            var e = Object(fr.a)();
            return pr.a.initialize("UA-2463077-1"),
            pr.a.pageview(window.location.pathname),
            e.listen((function(e) {
                pr.a.pageview(e.pathname),
                Xe.randSeed = Math.random()
            }
            )),
            e.listen((function(e, t) {
                return window.scrollTo(0, 0)
            }
            )),
            window.admiral = window.admiral || function() {
                (window.admiral.q = window.admiral.q || []).push(arguments)
            }
            ,
            window.admiral("after", "engage.loaded", (function(e) {
                e.rendered && pr.a.event({
                    category: "admiral",
                    action: "engage.loaded"
                })
            }
            )),
            window.admiral("after", "measure.detected", (function(e) {
                pr.a.set({
                    dimension1: e.adblocking,
                    dimension2: e.whitelisted
                })
            }
            )),
            e
        }
        function jr() {
            var e = a.a.useMemo(Or, [])
              , t = a.a.useState()
              , n = Object(r.a)(t, 2)
              , c = n[0]
              , i = n[1]
              , s = a.a.useMemo((function() {
                return {
                    user: c,
                    setUser: i
                }
            }
            ), [c]);
            return document.body.className = "",
            Object(D.c)(o.c, {
                history: e
            }, Object(D.c)(Lc.Provider, {
                value: s
            }, Object(D.c)(mr, null)))
        }
        var gr = n(217)
          , yr = n(745)
          , vr = 0;
        yr.a({
            dsn: "https://3ceb919849714603b61d8b70dc4dc8f9@o416950.ingest.sentry.io/5314468",
            allowUrls: [/https:\/\/humanbenchmark\.com/i],
            ignoreErrors: ["Failed to start the audio device", /ResizeObserver loop limit exceeded/, /from accessing another frame/, "Cannot read property 'document' of null", "window.top.document", /postMessage/, "Tapad", "Non-Error promise rejection captured", "ZhihuiOS", "NetworkError", /ResizeObserver/, "'Proxy' is undefined", "Proxy is not defined", "Can't find variable: Proxy", "dataLayer not defined", "has already been defined", "Unexpected end of input", "Load failed", "removeChild", "has already been declared", "SecurityError: An attempt was made to break through the security policy of the user agent.", /Failed to fetch/, /Network Error/, /Request aborted/, /The network connection was lost/, /NetworkError when attempting to fetch resource/, /Request failed with status code/, /The request timed out/, /cannot parse response/, "cancelled", "Unexpected token '<'", /stalesummer/],
            beforeSend: function(e) {
                return vr++ > 5 ? null : e
            }
        }),
        Number.isNaN = Number.isNaN || function(e) {
            return "number" === typeof e && e !== e
        }
        ;
        var wr = document.getElementById("root");
        wr.hasChildNodes() ? Object(gr.hydrate)(Object(D.c)(jr, null), wr) : Object(gr.render)(Object(D.c)(jr, null), wr)
    }
}, [[741, 1, 2]]]);
//# sourceMappingURL=main.d5279191.chunk.js.map
