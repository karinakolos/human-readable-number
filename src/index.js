module.exports = function toReadable(number) {
    var dg = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tw = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number == 0) {
        return "zero";
    } else if (number < 20) {
        return dg[number];
    } else if (number < 100) {
        let n = number + "";
        let output = "";
        if (Array.from(n)[1] == 0) {
            output = tw[Array.from(n)[0]];
            return output;
        }
        output = tw[Array.from(n)[0]] + " ";
        output += dg[parseInt(n.charAt(1))];
        return output;
    } else {
        let n = number + "";
        let output = "";
        if (Array.from(n)[1] == 1) {
            output = dg[parseInt(n.charAt(0))] + " hundred ";
            output += dg[number - 100 * number.toString()[0]];
            return output.trimEnd();
        } else if (Array.from(n)[2] == 0) {
            output = dg[parseInt(n.charAt(0))] + " hundred ";
            output += tw[Array.from(n)[1]];
            return output.trimEnd();
        } else if (Array.from(n)[1] == 0) {
            output = dg[parseInt(n.charAt(0))] + " hundred ";
            output += dg[Array.from(n)[2]];
            return output.trimEnd();
        } else {
            output = dg[parseInt(n.charAt(0))] + " hundred ";
            output += tw[parseInt(n.charAt(1))] + " ";
            output += dg[parseInt(n.charAt(2))];
            return output.trimEnd();
        }
    }
};
