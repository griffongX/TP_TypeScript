var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var counter = 0;
function add(a, b) {
    return a + b;
}
function increment() {
    counter++;
    return counter;
}

/* Ecercice 2*/

console.log(add(1, 2));
var student = { name: "Léo", grade: 14 };
function updateGrade(student, newGrade) {
    return __assign(__assign({}, student), { grade: newGrade });
}
var newStudent = updateGrade(student, 16);
console.log(student, newStudent);

/* Exercice 3 */

function applyNTimes(f, n, x) {
    if (n === 0) {
        return x;
    }
    else {
        return applyNTimes(f, n - 1, f(x));
    }
}
var double = function (x) { return x * 2; };
console.log(applyNTimes(double, 3, 1));
