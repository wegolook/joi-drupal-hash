# joi-drupal-hash

Allows you to validate a string against a Drupal password hash. So sorry.

## Usage

```javascript
require('joi-drupal-hash');
require('joi');
Joi.validate('my-secret-password', Joi.string().drupalHash('myHashedPassword'));
```
