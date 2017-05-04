module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "globals": {
        "fabric": false,
        "UUID": false,
        "angular": false,
        "inject": false,
        "_": false,
        "Class": false,
        "org": false,
        "ecEditor": false,
        "ServiceConstants": false
    },
    "rules": {
        "valid-jsdoc": ["error", { "requireReturn": false }],
        "no-trailing-spaces": "error",
        "indent": ["error", 4]
    },
    "env": {
        "browser": true,
        "jasmine": true,
        "node": true,
        "jquery": true
    }
}