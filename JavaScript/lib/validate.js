'use strict';

function validate(password) {
  return (/(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^([a-zA-Z0-9]+)$/.test(password)
  );
}

validate('djI38D55');
validate('a2.d412');
validate('JHD5FJ53');
validate('!fdjn345');
validate('jfkdfj3j');
validate('123');
validate('abc');
validate('Password123');

// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.