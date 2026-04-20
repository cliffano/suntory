"use strict";
import Display from 'nodelib';

const display = new Display('nodelib.yaml');
const text = display.format(false, 'lower');
console.log(text);
