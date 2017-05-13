# handlebar-pretty-json
handlebar helper for prettifying json

### Quick

```javascript
var handlebars = require('handlebars')
var prettyJson = require('handlebar-prettyjson')

//initialize pretty json
prettyJson(handlebars)

//if prettyJson should apply the default css on your json object =>  pass second argument as true. You can wirte your own css.
//prettyJson(handlebars,true)

//Example json data to be print on html
var jsonData = [{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }];

//pass the json to handlebars compile method as any other varriable
var html = handlebars.compile(template)({
    jsonDataToPrint: jsonData
});

//use 'prettyJson' helper like below in hbs template file
{{prettyJson jsonDataToPrint}}

//For the complete sample
//https://github.com/dim912/handlebar-pretty-json/blob/master/sample/sample.js


```
Result

![alt text](https://github.com/dim912/handlebar-pretty-json/blob/master/sample/result.JPG "Result on html page")





