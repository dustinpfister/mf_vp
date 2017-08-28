
var stbxBase = [{
        x : 0,
        y : 0,
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

    }, {
        x : 320 - 32,
        y : 240 - 32,
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

var x = 160, y = 120, i = 0,
g = 0, z = .5,
maxFrame = 400,

loop = function () {

    requestAnimationFrame(loop);

    r = Math.PI / (maxFrame / 2) * i,
    //x = Math.cos(r) * 75 + 160;
    //y = Math.sin(r) * 75 + 120;

    z = Math.abs(.5 - (i / maxFrame)) / .5 * 2;
    vp.zoom(z);
    vp.lookAt(x, y);

    C.cls('#ff0000');
    C.dBX(vp, true);

    var toRender = vp.inViewSTBX(stbxBase, true);
    toRender.forEach(function (stbx) {

        var nw = stbx.w * (z),
        nh = stbx.h * (z),
        dw = stbx.w - nw,
        dh = stbx.h - nh;

        stbx.w = nw;
        stbx.h = nh;
        stbx.x = stbx.x + (dw / 2);
        stbx.y = stbx.y + (dh / 2);

        C.dBX(stbx);

    });

    i += 1;

    if (i >= maxFrame) {

        i = 0;
    }

};

loop();
