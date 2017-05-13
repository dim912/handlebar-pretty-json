var prettyJson = require('../src/index')
var handlebars = require('handlebars')
var fs = require('fs');

//json data to be print on html
var jsonData = [{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }];

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