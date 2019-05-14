const CryptoJS = require('crypto-js');

@registerDynamicValueClass // eslint-disable-line
export default class Base64URLEncode {
  static identifier = 'com.lesterchan.PawExtensions.Base64URLEncode';
  static title = 'Base64URLEncode';
  static inputs = [
    DynamicValueInput('input', 'Input', 'String'),
  ];

  constructor() {
    this.context = null
  };

  evaluate() {
    if (this.input) {
      return this._base64URLEncode(this.input);
    }
    return null;
  };

  text() {
    if (this.input && this.input.length > 0) {
      return this.input;
    }
    return null;
  };

  _base64URLEncode(str) {
    return str.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  };
};