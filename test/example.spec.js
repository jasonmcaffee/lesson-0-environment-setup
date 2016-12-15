let exampleFunction = require('../src/example');

describe("lesson 0", ()=>{
    it("should run unit tests", ()=>{
        //confirm the example function works as intended (it simply returns the param passed in)
        expect(exampleFunction(1234)).toEqual(1234);
    });
});