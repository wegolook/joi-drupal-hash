var Joi = require('joi');
var DrupalHash = require('drupal-hash');
var Errors = require('joi/lib/errors');
var Language = require('joi/lib/language');

Joi.string().constructor.prototype.drupalHash = function(passwordHash) {

  return this._test('drupalHash', undefined, function (value, state, options) {

    return DrupalHash.checkPassword(value, passwordHash) ?
      null :
      Errors.create('string.drupalHash', { value: value }, state, options);
  });
};

Language.errors.string.drupalHash = 'must match existing drupal hash';
