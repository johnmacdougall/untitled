myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
    if (name == null) {
        return null;
    }
    if (name == 0) {
        return null;
    }
    return "Hello " + name + "!";
};
