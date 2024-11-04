let resultDisplayed = false;

function insert(num) {
    var mystring = document.form.textview.value;
    var lastchar = mystring[mystring.length - 1];

    if (resultDisplayed && !isNaN(num)) {
        clean();
    } else if (resultDisplayed && num === ".") {
        document.form.textview.value = "0.";
        resultDisplayed = false;
        return;
    } else if (resultDisplayed && isNaN(num)) {
        resultDisplayed = false;
    }

    resultDisplayed = false;

    if (mystring === "0" && num !== ".") {
        document.form.textview.value = num;
    } else if (mystring.length < 30) {
        if (num === "." && (isNaN(lastchar) || lastchar === null)) {
            document.form.textview.value += "0.";
        } else if (!isNaN(lastchar) || lastchar === null || !isNaN(num)) {
            document.form.textview.value += num;
        } else if (num !== lastchar && isNaN(lastchar)) {
            document.form.textview.value = mystring.slice(0, -1) + num;
        }
    }
}

function equal() {
    var sum = document.form.textview.value;

    try {
        if (sum.includes("/0")) {
            alert("Cannot divide by zero!");
            clean();
            return;
        }

        if (sum) {
            let result = eval(sum);
            document.form.textview.value = parseFloat(result.toFixed(10));
            resultDisplayed = true;
        }
    } catch (e) {
        alert("Invalid expression");
        clean();
    }
}

function clean() {
    document.form.textview.value = "";
    resultDisplayed = false;
}

function back() {
    var exp = document.form.textview.value;
    if (!resultDisplayed) {
        document.form.textview.value = exp.substring(0, exp.length - 1);
    }
}
