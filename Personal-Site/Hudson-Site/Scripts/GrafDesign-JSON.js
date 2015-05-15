(function($) {
    "use strict";

    var source = $("#graph-template").html(),
        template = Handlebars.compile(source);

    var context = {
        entryGraph: [
            {
                title: "tile-wide",
                name: "Occupy",
                imgName: "Occupy.png",
                content: "Logo for Occupy movement."
            },
            { title: "tile-wide", name: "Under Seage", imgName: "UnderSeage.png", content: "DeviantArt 8-bit Challange." },
            { title: "tile-wide", name: "YorkCorp", imgName: "YorkCorp.png", content: "Logo for oil company York Corp." },
            { title: "tile-wide", name: "IPSF redisign", imgName: "IPSF-redisign.png", content: "Redisignig IPSF logo." },
            { title: "tile-wide", name: "Geotrakk", imgName: "GeoTrakk.png", content: "Logo design for Geo Trakk pharmaceutical company." },
            { title: "tile-wide", name: "Coffee Mate", imgName: "Coffee-Mate.png", content: "Article about coffee for magazine." },
            { title: "tile-wide", name: "Dodge Dart Fire", imgName: "dodge_dart_fire_by_hudsonvsm-d4yv0f9.jpg", content: "DeviantArt Dodge Dart design chalenge." },
            { title: "tile-wide", name: "Book Cover", imgName: "Vulk.gif", content: "Sample book cover for book-publisher." },
            { title: "tile-wide", name: "Telephone Box cover", imgName: "Tel-Cover.png", content: "Sample telephone box cover." },
            { title: "tile-wide", name: "Photoshop", imgName: "kak-da-stroim-burzo.png", content: "Photoshoping a building to look taller." },
            { title: "tile-wide", name: "Earn and Burn", imgName: "EarnAndBurn.png", content: "Improvements on their web site." }
        ]
    };

    $("#grafDesign").html(template(context));
})($);