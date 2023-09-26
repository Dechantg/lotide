
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dechantg/lotide`

**Require it:**

`const _ = require('@dechantg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: compares two arrays
* `assertEqual(actual, expected)`: compares two strings
* `assertObjectsEqual(actual, expected)`: compares two objects
* `countLetters(string)`: counts the letters in a string
* `countOnly(allItems, itemsToCount)`: takes in an array and counts the number of occurances of each letter (ignores spaces)
* `eqArrays(actual, expected)`: comapres two arrays
* `eqObjusts(actual, expected)`: comapres two objects. including if values are in an array
* `findKey(object, callback)`: searches an object for first match of the callback and returns the key
* `findKeyByValue(object, value)`: searchs an object for a key based on value
* `head(array)`: returns 0 index of an array
* `tail(array)`: removes 0 index and returns the tail of an array
* `middle(arrauy` : searches and array for the middle value. if array size is even returns the two middle values
* `letterPositions(sentence)`: returns an object with the letters in a string and their respective positions in the string (ignores spaces)
* `map(array, callback)`: takes in an array and returns modifications based on callback
* `takeUntil(array, callback)`: takes in an array and returns untill the function reaches the callback
* `without(array, value)`: takes in an array and removes the value

