const {StatusCode} = require('./status_code');

const getStatus = (code) => {
    const status = getObjectKey(StatusCode, code);
    return camelPad(status);
}

const getCode = (status) => {
    return StatusCode[status];
}

function getObjectKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

function camelPad(str){ return str
    // Look for long acronyms and filter out the last letter
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    // Look for lower-case letters followed by upper-case letters
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // Look for lower-case letters followed by numbers
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, function(str){ return str.toUpperCase(); })
    // Remove any white space left around the word
    .trim();
}

module.exports = {
    StatusCode,
    getStatus,
    getCode
};
