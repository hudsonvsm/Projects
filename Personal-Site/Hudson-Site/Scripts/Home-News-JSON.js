(function ($) {
    "use strict";

    var source = $("#news-template").html(),
        template = Handlebars.compile(source);

    var context = {
        newsEntry: [
            {
                titleColor: "bg-darkPink",
                fontColor: "fg-white",
                title: "Personal IDE Visual Studio",
                image: "VisualStudio2013.png",
                content: "My coding skills are based on Microsoft Visual Studio. I won VS 2013 Ultimate for my excellent preformace as a student," +
                    " during my training in Telerik Software Academy."
            },
            {
                titleColor: "bg-emerald",
                fontColor: "fg-white",
                title: "Preferred language C#",
                image: "csharp.png",
                content: "My understanding of C# language is excellent. My grasp of OOP and HQPC is quite vast. " +
                    "The 4 OOP principles: Inheritance, Abstraction, Encapsulation and Polymorphism are corner stones of my coding skills. " +
                    "My abstract thinking helps me a lot in constructing HQPC using DRY and SOLID principles implementing design patterns."
            },
            {
                titleColor: "bg-lightBlue",
                fontColor: "fg-white",
                title: "HTML, JS and CSS",
                image: "html-css-js.png",
                content: "Those are my pereferred languages for Frond-End development. This site is build on those languages. " +
                    "I have used Metro UI CSS, JSON for recurring data with Handlebars templating and jQuery, just to make myself happy." +
                    "The source is on Github."
            }
        ]
    };

    $("#news").html(template(context));
})($);