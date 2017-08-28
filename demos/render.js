
var stbxBase = [{
        x : 100,
        y : 50,
        w : 32,
        h : 32,
        hw : 16,
        hh : 16,
        a : 0,

        f : '#ffffff',
        s : '#ffffff',
        i : 3

    }, {
        x : 160 - 16,
        y : 120 - 16,
        w : 32,
        h : 32,
        hw : 16,
        hh : 16,
        a : 0,

        f : '#ffffff',
        s : '#ffffff',
        i : 3

    }

];

vp.zoom(.5);

var x = 80, y = 60, i = 0,
maxFrame = 400,

loop = function () {

    requestAnimationFrame(loop);

    r = Math.PI / (maxFrame / 2) * i,
    x = Math.cos(r) * 75 + 160;
    y = Math.sin(r) * 75 + 120;

    vp.lookAt(x, y);

    C.cls('#ff0000');
    C.dBX(vp, true);

    var toRender = vp.inViewSTBX(stbxBase);
    toRender.forEach(function (stbx) {

        C.dBX(stbx);

    });

    i += 1;

    if (i >= maxFrame) {

        i = 0;
    }

};

loop();