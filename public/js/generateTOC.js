$(document).ready(function(){
    $( ".post h1" ).each(function( index ) {
        $(".post-directory dl").append("<dt><a class=\"jumper\" href=#" +
                $(this).attr("id")
                + ">"
                + $(this).text()
                + "</a></dt>");

        var children = $(this).nextUntil("h1", "h2,h3,h4,h5,h6")

        children.each(function( index ) {
            $(".post-directory dl").append("<dt><a class=\"jumper--child\" href=#" +
                    $(this).attr("id")
                    + ">"
                    + "<li class=\"jumper--"+$(this).prop("tagName")+"\"> " + $(this).text()
                    + "</li></a></dt>");
        });
    });

});

