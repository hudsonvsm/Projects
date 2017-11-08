(function($) {
    "use strict";

    var source = $("#entry-template").html(),
        template = Handlebars.compile(source);

    var context = {
        entry: [
            { url: "https://github.com/hudsonvsm", name: "GitHub", pic: "GitHub.png" },
            { url: "https://www.facebook.com/hudsonvsm", name: "Facebook", pic: "Facebook.png" },
            { url: "https://bg.linkedin.com/pub/valentin-mladenov/b7/9b5/88", name: "LinkedIn", pic: "LinkedIn.png" },
            { url: "http://stackoverflow.com/users/4890348/valentin-mladenov", name: "StackOverflow", pic: "StackOverflow.jpg" },
            { url: "https://plus.google.com/u/0/112812947775021760257/posts", name: "GooglePlus", pic: "GooglePlus.png" },
            { url: "mailto:hudsonvsm@gmail.com", name: "Gmail", pic: "Gmail.png" }
        ]
    };

    $("#navitems").html(template(context));
})($);