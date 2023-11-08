'use strict';

const socialMideaAuth = require('..');
const assert = require('assert').strict;

assert.strictEqual(socialMideaAuth(), 'Hello from socialMideaAuth');
console.info('socialMideaAuth tests passed');
