var expect = require("chai").expect;
var pretiffyJson = require('../src/index.js')

describe("JSON pretiffier main", function () {
    it("first", function () {


        console.log()

        expect(JSON.stringify(pretiffyJson('["2", "3"]'))).to.equal("{\"string\":\"<pre>[<span class=\\\"string\\\">\\\"2\\\"</span>,<span class=\\\"string\\\">\\\"3\\\"</span>]</pre>\"}")


    });
});


