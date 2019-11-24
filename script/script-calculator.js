function insert(num) {
    document.textview.value = document.textview.value + num;
}
function equal() {
    var exp = document.textview.value;
    if (exp) {
        document.textview.value = eval(exp);
    }
}
function clean() {
    document.textview.value = "";

}
function back() {
    var exp = document.textview.value;
    document.textview.value = exp.substring(0, exp.length - 1);
}