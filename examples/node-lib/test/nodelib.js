"use strict";
/* eslint no-unused-vars: 0 */
import esmock from 'esmock';
import referee from '@sinonjs/referee';
import sinon from 'sinon';
const assert = referee.assert;

describe('nodelib - Display', function() {

  afterEach(function () {
    sinon.restore();
  });

  it('should format text with lower transformation and no reverse', async function () {
    const mockBag = {
      logStepItemSuccess: sinon.stub(),
      lookupFile: sinon.stub().returns('text: Hello World')
    };
    const Display = await esmock('../lib/nodelib.js', {
      'bagofcli': mockBag,
      'yaml-js': {
        load: () => ({ text: 'Hello World' })
      }
    });

    const display = new Display('nodelib.yaml');
    const text = display.format(false, 'lower');
    assert.equals(text, 'hello world');
  });

  it('should format text with upper transformation and reverse', async function () {
    const mockBag = {
      logStepItemSuccess: sinon.stub(),
      lookupFile: sinon.stub().returns('text: Hello World')
    };
    const Display = await esmock('../lib/nodelib.js', {
      'bagofcli': mockBag,
      'yaml-js': {
        load: () => ({ text: 'Hello World' })
      }
    });

    const display = new Display('nodelib.yaml');
    const text = display.format(true, 'upper');
    assert.equals(text, 'DLROW OLLEH');
  });

  it('should format text with no transformation', async function () {
    const mockBag = {
      logStepItemSuccess: sinon.stub(),
      lookupFile: sinon.stub().returns('text: Hello World')
    };
    const Display = await esmock('../lib/nodelib.js', {
      'bagofcli': mockBag,
      'yaml-js': {
        load: () => ({ text: 'Hello World' })
      }
    });

    const display = new Display('nodelib.yaml');
    const text = display.format(false, null);
    assert.equals(text, 'Hello World');
  });
});
