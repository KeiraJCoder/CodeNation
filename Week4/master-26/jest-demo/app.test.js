const { test } = require('@jest/globals')
const app =require('./app.js');

test("should equal 5 when passed 2 and 3", () => {
    expect(app.add(2,3)).toBe(5);

});

test ("should not equal 3 when passed 2 and 4", () => {
    expect(app.add(2,3)).not.toBe(3);
});

test ("should contain Stuart", () => {
    expect(app.myArray).toContain("Stuart");
});