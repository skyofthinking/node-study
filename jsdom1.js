// Count all of the links from the io.js build page
var jsdom = require("jsdom");

jsdom.env(
    "https://iojs.org/dist/",
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
        console.log("there have been", window.$("a").length - 4, "io.js releases!");
    }
);

jsdom.env(
    '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
        console.log("contents of a.the-link:", window.$("a.the-link").text());
    }
);

jsdom.env({
    url: "http://news.ycombinator.com/",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (err, window) {
        var $ = window.$;
        console.log("HN Links");
        $("td.title:not(:last) a").each(function () {
            console.log(" -", $(this).text());
        });
    }
});

jsdom.env({
    url: "https://github.com/trending/python",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (err, window) {
        var $ = window.$;
        console.log("GitHub ============== ");
        $("ol.repo-list li").each(function () {
            console.log(" -", $(this).find("h3 a").text().trim());
        });
    }
});