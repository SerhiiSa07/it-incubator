String.prototype.digit = function() {
    return this.match(/^[0-9]$/) ? true : false;
};
