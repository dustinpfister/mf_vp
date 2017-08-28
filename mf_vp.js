var vp = (function () {

    return {

        nw : 320, // native sidth and height
        nh : 240,

        w : 320, // current width and height
        h : 240,

        cx : 0, // center position of the view port
        cy : 0,

        x : -160, // upper left corner of the view port
        y : -120,

        z : 1, // current zoom level

        // additional values that make the view port a 'standard box' (see mf_canvas readme)
        hw : 160, // current half width and height
        hh : 120,
        a : 0,
        f : '#ff0000',
        s : '#ffffff',
        i : 1,

        // move the center of the camera over the given point, and update relevant values
        lookAt : function (x, y) {

            this.cx = x || this.cx;
            this.cy = y || this.cy;

            // this changes the position of the corner of the view port
            this.x = this.cx - this.w / 2;
            this.y = this.cy - this.h / 2;

        },

        // return a new array of standard boxes from the given array
        // that conatins boxes that are to be rendered
        inViewSTBX : function (BXArray) {

            var i = BXArray.length,
            v = [];
            while (i--) {

                if (_.b(this, BXArray[i])) {

                    v.push(BXArray[i]);

                }

            }

            // return the the stbx's
            return v;

        },

        zoom : function (z) {

            // set zoom, if doing so;
            this.z = z || this.z;

            // this will change current width
            this.w = this.nw * this.z;
            this.h = this.nh * this.z;
            this.hw = this.w / 2;
            this.hh = this.h / 2;

            // call a lookAt at the current cx, and cy
            this.lookAt();

        }

    };

}
    ());
