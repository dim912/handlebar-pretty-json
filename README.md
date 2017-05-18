# handlebars-json-beauty
handlebar helper for printing json colorfully

### Quick

```javascript
var handlebars = require('handlebars')
var jsonBeauty = require('handlebars-json-beauty')

//initialize json beauty
jsonBeauty(handlebars)

//If your own css to be applied =>  pass second argument as true as below. 
//Later You can wirte your own css on hbs template.
//jsonBeauty(handlebars,true)

//Example json data to be print on html
var jsonData = [{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } },
 { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }];

//pass the json to handlebars compile method as any other varriable
var html = handlebars.compile(template)({
    jsonDataToPrint: jsonData
});

//use 'jsonBeauty' helper like below in hbs template file
{{jsonBeauty jsonDataToPrint}}

```

### Complete Sample

##### how to use 'handlebar-jsonBeauty'
https://github.com/dim912/handlebar-pretty-json/blob/master/sample/sample.js

##### hbs template
https://github.com/dim912/handlebar-pretty-json/blob/master/sample/index.hbs

### Result

https://github.com/dim912/handlebar-pretty-json/blob/master/sample/result.JPG





