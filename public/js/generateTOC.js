$(document).ready(function(){
    $( ".post h1" ).each(function( index ) {
        console.error("H1:",index);
        $(".post-directory dl").append("<dt><a class=\"jumper\" href=#" +
                $(this).attr("id")
                + ">"
                + $(this).text()
                + "</a></dt>");

        var children = $(this).nextUntil("h2", "h3", "h4","h5","h6")

        children.each(function( index ) {
            $(".post-directory dl").append("<dd><a class=\"jumper\" href=#" +
                    $(this).attr("id")
                    + ">"
                    + "&nbsp;&nbsp;- " + $(this).text()
                    + "</a></dd>");
        });
    });

});

