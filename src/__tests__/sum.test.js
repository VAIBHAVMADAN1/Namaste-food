import {sum} from './sum.js';

test("description",()=>{
    const r = sum(3,4);
    //Assertion
    expect(r).toBe(7);
})