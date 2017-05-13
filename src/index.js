var handlebars = require('handlebars')

var noDefCss = false
var defaultCss = ` <style>
        pre {
            font-family: cursive;
            background-color: #c8cccf;;
            outline: 0px solid #ccc;
            padding: 5px;
            margin: 5px;
            color: #6d6868;;
        }
        .string {
            color: #160dbf;
        }
        .number {
            color: darkorange;
        }
        .boolean {
            color: red;
        }
        .null {
            color: magenta;
        }
        .key {
            color: rgb(207, 38, 188);
        }
    </style>`;

function jsonHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function formatter(obj) {

    var unformatedJson = obj instanceof Object ? JSON.stringify(obj) : obj
    if (unformatedJson && unformatedJson.length > 0) {
        try {
            var parsed = JSON.stringify(JSON.parse(unformatedJson), null, 4)
            var formatedJson = jsonHighlight(parsed)
            console.log(formatedJson)
            var toRprot = '<pre>' + formatedJson + '<\/pre>'
            toRprot = noDefCss ? toRprot : toRprot + defaultCss;
            return new handlebars.SafeString(toRprot)
        }
        catch (err) {
            return new handlebars.SafeString(obj)
        }
    }
    else {
        return new handlebars.SafeString(obj)
    }
}

function prettifyJson(handleBarObj, noDefaultCss) {
    noDefCss = noDefaultCss
    handleBarObj.registerHelper('prettyJson', formatter)
}
module.exports = prettifyJson