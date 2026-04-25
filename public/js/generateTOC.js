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
        var $list = $(".post-directory .post-directory-list");
        if (!$list.length) return;

        if (tagName === topLevel) {
            $list.append("<li><a class=\"jumper\" href=\"#" + id + "\">" + $this.text() + "</a></li>");
        } else {
            $list.append("<li class=\"jumper--"+tagName+"\"><a class=\"jumper--child\" href=\"#" + id + "\">" + $this.text() + "</a></li>");
        }
    });

});
