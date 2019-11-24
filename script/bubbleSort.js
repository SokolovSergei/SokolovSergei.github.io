function create() {
    /*for (var a = [], i = 0; i < 40; ++i) a[i] = i;

    function shuffle(array) {
        let tmp, current, top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array;
    }
    var a = shuffle(a);*/

    var arr = [];
    for (i = 0; i < 30; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    document.getElementById("randomArr").innerHTML = "<h2>Случайный массив:</h2><br>" + arr;
    bubbleSort(arr);
}

function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped);
    document.getElementById("sortArr").innerHTML = "<h2>Отсортированный массив:</h2><br>" + arr;
}