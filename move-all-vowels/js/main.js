/*
Move all vowels
by davidNge

Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

function moveVowel(input) {
  let ending = input.match(/[aeiou]/g)
  return input.split('').filter(el => el.match(/[bcdfghjklmnpqrstvwxyz]/g)).join('').concat(ending.join(''))
}