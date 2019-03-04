

    $(document).ready(function(){
        $( ".post h1" ).each(function( index ) {
            console.error("H1:",index);
            $(".post-directory dl").append("<dt><a class=\"jumper\" hre=#" +
                    $(this).attr("id")
                    + ">"
                    + $(this).text()
                    + "</a></dt>");

            var children = $(this).nextUntil("h2", "h3", "h4","h5","h6")

            children.each(function( index ) {
                $(".post-directory dl").append("<dd><a class=\"jumper\" hre=#" +
                        $(this).attr("id")
                        + ">"
                        + "&nbsp;&nbsp;- " + $(this).text()
                        + "</a></dd>");
            });
        });

        var fixmeTop = $('#post-directory-module').offset().top - 100;       // get initial position of the element

        $(window).scroll(function() {                  // assign scroll event listener

            var currentScroll = $(window).scrollTop(); // get current position

            if (currentScroll >= fixmeTop) {           // apply position: fixed if you
                $('#post-directory-module').css({      // scroll to that element or below it
                    top: '100px',
                    position: 'fixed',
                    width: 'inherit'
                });
            } else {                                   // apply position: static
                $('#post-directory-module').css({      // if you scroll above it
                    position: 'inherit',
                    width: 'inherit'
                });
            }

        });

        $("a.jumper").on("click", function( e )&nbsp;{

            e.preventDefault();

            $("body, html").animate({
                scrollTop: ($( $(this).attr('hre') ).offset().top - 100)
            }, 600);

        });
    });

