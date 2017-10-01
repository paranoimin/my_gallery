var imgs = [
    {name: "img1", src: "src/img/img1.jpg"},
    {name: "img2", src: "src/img/img2.jpg"},
    {name: "img3", src: "src/img/img3.jpg"}
]

$(document).ready(function() {
    
    var win = $(window);
    var status = $("#status");
    var gallery = $("#gallery");

    var i;
    for(i = 0; i < imgs.length; i++) {

    }

    status.text("윈도우 : " + win.width() + " 갤러리 : " + gallery.width());

    $(window).resize(function() {
        status.text("윈도우 : " + win.width() + " 갤러리 : " + gallery.width());
    });

});