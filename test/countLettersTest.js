const countLetters = require("../countLetters");

const assertEqual = require('../assertEqual');


countLetters("test string");
assertEqual(countLetters("test string").t, 3);