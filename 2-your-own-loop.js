// Your code here.
function loop(n, tester, modifier, logitbiatch) {
    while (tester(n)) {
        logitbiatch(n)
        n = modifier(n)

    }
}


loop(271, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1