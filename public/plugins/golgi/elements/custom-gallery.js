﻿//gallery page triggers
'use strict';
$(".gallery a").fluidbox();//lightbox trigger

//grid image trigger
$(".containerli").gridalicious({
    animate: true,
    selector: ".gallery",
    gutter: 5,
    width: 250,

});
//grid image trigger
