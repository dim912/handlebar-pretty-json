var prettyJson = require('../src/index')
var handlebars = require('handlebars')
//var prettyJson = require('handlebars-prettyjson')
var fs = require('fs');

//json data to be print on html
var jsonData = `
{
        "id": 2,
        "name": "An ice sculpture",
        "price": 12.50,
        "warranty" : true,
        "tags": ["cold", "ice"],
        "otherDetails": {
            "length": 7.0,
            "width": 12.0,
            "height": 9.5,
            "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
        }
    }
`
//initialized pretty json
prettyJson(handlebars)

// read the html template -> compile -> write html
fs.readFile('./sample/index.hbs', function (err, data) {
    if (err) throw err;

    var template = data.toString();

    //compile json as usual. At the hbs template use 'prettyJson' helper as anyother helper to print json(refer index.hbs example)
    var html = handlebars.compile(template)({
        jsonDataToPrint: jsonData
    });

    fs.writeFile('./sample/index.html', html, function (err) {
        if (err) throw err;
    });

})