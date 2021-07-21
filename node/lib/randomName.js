const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

module.exports = () => uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
