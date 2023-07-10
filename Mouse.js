function Mouse(name) {
    this.name = name;
    this.die = false;
}
Mouse.prototype.dead = function() {
    this.die = true;
}
module.exports = Mouse;