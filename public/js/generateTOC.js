$(document).ready(function(){
    var headings = $(".post h1, .post h2, .post h3, .post h4, .post h5, .post h6").not(".post-title");
    
    var topLevel = "H7";
    headings.each(function() {
        var tag = $(this).prop("tagName").toUpperCase();
        if (tag < topLevel) {
            topLevel = tag;
        }
    });

    headings.each(function( index ) {
        var $this = $(this);
        var id = $this.attr("id");
        if (!id) return;
        
        var tagName = $this.prop("tagName").toUpperCase();
        if (tagName === topLevel) {
            $(".post-directory dl").append("<dt><a class=\"jumper\" href=\"#" + id + "\">" + $this.text() + "</a></dt>");
        } else {
            $(".post-directory dl").append("<dt><a class=\"jumper--child\" href=\"#" + id + "\"><li class=\"jumper--"+tagName+"\"> " + $this.text() + "</li></a></dt>");
        }
    });

});

