'use strict';
const result = require('../challenges/arrayShift/array-shift')
describe('test for array-shift', () => {
  it('add the number in the middle of aray if the length is even', ()=>{
    expect(result([2,4,6,8],5)).toEqual(
      expect.arrayContaining([2,4,5,6,8])
    );
  });
  it('add the number in the middle of aray if the length is odd', ()=>{
    expect(result([4,8,15,23,42],16)).toEqual(
      expect.arrayContaining([4,8,15,16,23,42])
    );
  });
})