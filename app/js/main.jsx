var App = require("./components/App.jsx");

$(document).ready(function () {
    var xmlFiles = ["economist.xml", "geektimes.xml", "habrahabr.xml", "kinomania.xml"];
    var feeds = {};

    function parseXML(fileName, i) {
        var channelObj;
        $.ajax({
            'url': "./xml/" + fileName,
            'dataType': "text",
            'async': "false",
            'success': function (data) {
                var x2js = new X2JS();
                var rssObj = x2js.xml_str2json(data);
                var channel = rssObj.rss.channel;
                feeds[i] = {
                    title: channel.title,
                    items: channel.item
                };
                ReactDOM.render(
                    <App data={feeds}/>,
                    document.getElementById("app")
                );
            }
        });
    }

    for (var i = 0; i < xmlFiles.length; i++) {
        parseXML(xmlFiles[i], i);
    }
});
