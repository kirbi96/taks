// 66. Plus One
// You are given a large integer represented as an integer
// array digits, where each digits[i] is the ith digit of the integer.
//     The digits are ordered from most significant to least significant in left-to-right order.
//     The large integer does not contain any leading 0's.
//
// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            break;
        } else {
            if (i === 0) {
                digits[i] = 0;
                digits.unshift(1)
                break;
            }
            digits[i] = 0;
        }
    }

    return digits;
}

console.log(plusOne([8,9,9,9]))

