
$(function () {

    var pre = $('section pre#sequence');
    for (var i = 0; i < 8; ++i) {
        var fibnum = fiblib.Fibonacci.get(i);
        pre.append('\trequest: ' + fiblib.pad(3, i) + '\t got: ' + fiblib.pad(13, fibnum) + '\n');
    }

    pre.append('\t...\n');

    for (var i = 56; i < 64; ++i) {
        var fibnum = fiblib.Fibonacci.get(i);
        pre.append('\trequest: ' + fiblib.pad(3, i) + '\t got: ' + fiblib.pad(13, fibnum) + '\n');
    }

    pre.append('\t...\n');

    var fibnum = fiblib.Fibonacci.get(448);
    pre.append('\trequest: ' + 448 + '\t got: ' + fibnum.toPrecision(8) + '\n');

});   
