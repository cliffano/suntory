"use strict";
/**
 * nodecli
 * &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;
 * A sample Node CLI project
 */
import bag from 'bagofcli';
import yaml from 'yaml-js';
import Message from './models/message.js';

/**
 * A class for managing the display of text from configuration file.
 */
class Display {

  /**
   * Initialise Display.
   *
   * @param {String} confFile: path to configuration file
   */
  constructor(confFile) {
    bag.logStepItemSuccess('Loading configuration file %s', confFile);
    const content = bag.lookupFile(confFile);
    this.conf = yaml.load(content);
  }

  /**
   * Format text from configuration file with transformations.
   *
   * @param {Boolean} reverse: whether to reverse the text
   * @param {String} transformation: transformation to apply ('lower' or 'upper')
   * @return {String} the formatted text
   */
  format(reverse, transformation) {
    const message = new Message(this.conf.text);

    if (reverse) {
      message.reverse();
    }

    if (transformation === 'lower') {
      message.lower();
    } else if (transformation === 'upper') {
      message.upper();
    }

    return message.getText();
  }
}

export {
  Display as default,
};
