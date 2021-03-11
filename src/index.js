exports.min = function min(array) {

    if (typeof array !== 'undefined' && array.length > 0) {
        let min = Math.min.apply(null, array)
        return min;
    } else {
        return 0;
    }
}

exports.max = function max(array) {

    if (typeof array !== 'undefined' && array.length > 0) {
        let max = Math.max.apply(null, array)
        return max;
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let avg = array.reduce((a, b) => a + b, 0)
        return avg / array.length;
    } else {
        return 0;
    }

}
