"use strict";
/* eslint no-unused-vars: 0 */
import Message from '../../lib/models/message.js';
import referee from '@sinonjs/referee';
import sinon from 'sinon';
const assert = referee.assert;

describe('models - Message', function() {

  afterEach(function () {
    sinon.restore();
  });

  it('should return text via getText', function () {
    const message = new Message('Hello World');
    assert.equals(message.getText(), 'Hello World');
  });

  it('should reverse text', function () {
    const message = new Message('Hello World');
    message.reverse();
    assert.equals(message.getText(), 'dlroW olleH');
  });

  it('should convert text to upper case', function () {
    const message = new Message('Hello World');
    message.upper();
    assert.equals(message.getText(), 'HELLO WORLD');
  });

  it('should convert text to lower case', function () {
    const message = new Message('Hello World');
    message.lower();
    assert.equals(message.getText(), 'hello world');
  });

  it('should return text via toString', function () {
    const message = new Message('Hello World');
    assert.equals(message.toString(), 'Hello World');
  });
});
