"use strict";
/**
 * This module contains the Message class.
 */

/**
 * This class represents a message.
 * It contains the message text.
 */
class Message {

  /**
   * Initialize the Message object.
   *
   * @param {String} text: the message text
   */
  constructor(text) {
    this.text = text;
  }

  /**
   * Return the message text.
   *
   * @return {String} the message text
   */
  getText() {
    return this.text;
  }

  /**
   * Reverse the message text.
   */
  reverse() {
    this.text = this.text.split('').reverse().join('');
  }

  /**
   * Convert the message text to lower case.
   */
  lower() {
    this.text = this.text.toLowerCase();
  }

  /**
   * Convert the message text to upper case.
   */
  upper() {
    this.text = this.text.toUpperCase();
  }

  /**
   * Return the string representation of the Message object.
   *
   * @return {String} the message text
   */
  toString() {
    return this.text;
  }
}

export {
  Message as default,
};
