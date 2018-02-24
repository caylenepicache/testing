//var whtevs = "a"
//console.log(whtevs === "b")

module.exports = {
    assert: function(expected, actual, message = "Test") {
        if (expected === actual) {
        console.log('THUMBS UP   ' + message)
        }
        else {
            diff = util.inspect(expected) + "\n   " + util.inspect(actual);
            console.log('XXX   ' + message + "\n    Assertion failed no match \n   " + diff);
        }    
    },
    assert_true: function (actual, message) {
    },
    assert_false: function (actual,message){
    }
};