var Array_Defcon1 = /** @class */ (function () {
    function Array_Defcon1(arr) {
        this.arr = arr;
    }
    Array_Defcon1.prototype.to_string = function () {
        var str = '';
        // console.log(str);
        for (var i = 0; i < this.arr.length; i++) {
            str += this.arr[i];
        }
        console.log(str);
        return str;
    };
    Array_Defcon1.prototype.get_length = function () {
        var i = 0;
        while (this.arr[i] !== undefined) {
            i++;
        }
        return i;
    };
    Array_Defcon1.prototype.join_to_str = function (token) {
        var str = '';
        for (var i = 0; i < this.arr.length - 1; i++) {
            str += this.arr[i] += token;
        }
        return str += this.arr[this.arr.length - 1];
    };
    return Array_Defcon1;
}());
var teslim = new Array_Defcon1([1, 2, 3, 4, 5]);
// console.log(teslim);
console.log(teslim.join_to_str(" + "));
