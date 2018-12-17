// Define photo albums
var images = {
    '1st album': [
        'pic1.jpg',
        'pic2.jpg',
        'pic3.jpg',
        'pic4.jpg',
        'pic5.jpg',
    ],
    '2nd album': [
        'pic6.jpg',
        'pic7.jpg',
        'pic8.jpg',
        'pic9.jpg',
        'pic10.jpg',
    ],
    '3rd album': [
        'pic11.jpg',
        'pic12.jpg',
        'pic13.jpg',
        'pic14.jpg',
        'pic15.jpg',
    ]
};

$(document).ready(function () { // When document is ready
    $('#gallery').gallery();
});


$.fn.gallery = function () {
    var self = this;
    var setimgs;

    this.each(function () {
        var g = this;

        g.load_sets = function (el) { // Function which loads set of pictures
            $.each(images, function (key, value) {
                $(el).append('<li><a id="' + key + '" href="#" title="' + key + '">' + key + '</a></li>');
            });

            var sets = $(el).find('li a');
            $(sets).click(function () { // Function which connect 'click' event to albums
                var set = $(this).attr('id');
                g.setimgs = images[set];
                $(g).find('#thumbs').html('');
                g.load_thumbs($(g).find('#thumbs')[0], 0);
            });

            sets[0].click();
        }

        g.load_thumbs = function (el, index) { // Function which loads miniatures
            $(el).append('<li><img id="' + g.setimgs[index] + '" src="images/thumb_' + g.setimgs[index] + '" /></li>');

            var tn = new Image();
            $(tn).load(function () {
                var a = $($(el).find('li')[index]).find('img')[0];
                $(a).append(this);
                $(a).click(function () { // Function which connect 'click' event to miniatures
                    $("#photo").attr('src', 'images/' + $(this).attr('id'));
                    return false;
                });

                if ((index + 1) < g.setimgs.length) {
                    g.load_thumbs(el, (index + 1));
                } else {
                    $($(g).find('#thumbs li img')[0]).click();
                }
            });
            tn.src = 'images/thumb_' + g.setimgs[index];
        }

        // Inizialization - loading albums for gallery
        g.load_sets($(g).find('#sets')[0]);
    });
};
