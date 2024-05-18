function analyzeArray(array) {
    const sumArr = array.reduce((acc, num) => acc + num, 0);
    const avgValue = sumArr / array.length;
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);

    return {
        average: avgValue, 
        min: minValue, 
        max: maxValue, 
        length: array.length
    };
}
module.exports = analyzeArray;