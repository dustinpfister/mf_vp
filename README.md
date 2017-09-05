# mf_vp
### A view port manager

This project has regressed into a very primitive version of a view port manager. I now have a more advanced project called mf_vp_zoom that is a more involved alternative of this.

## Where a view port manager starts

As of this writing the code of the view port manager is just simply this:

```js
var vp = {

    w : 320, // current width and height
    h : 240,

    x : -160, // upper left corner of the view port
    y : -120,

    // just make a map relative object view port relative
    mkVPRel : function (obj) {

        return {

            x : obj.x - this.x,
            y : obj.y - this.y,
            w : obj.w,
            h : obj.h

        };

    }

};
```

At a minimum a view port manager should just simply contain the current state of the view port. The means of converting a map relative position to a view port relative position is simple enough, but for starters I just have one method that helps with that.

## props

### vp.x, vp.y

The position of the upper left corner of the view port in the game world map.

### vp.w,vp.h

The present width and height of the view port, because this project does not support zooming this will typically be set to the native canvas size of the project.

### vp.mkVPRel(obj)

returns a new box object that has a view port relative position that is ready to be rendered.