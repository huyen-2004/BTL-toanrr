const total = 20;

function countSequences() {
    let count = 0;
    for (let a = 3; a <= 4; a++) {
        let sum = a + (a + 1) + (a + 2) + (a + 3);
        if (sum === total) {
            count++;
        }
    }
    return count;
}

const resultElement = document.getElementById("result");
resultElement.textContent = `Có ${countSequences()} dãy số thỏa mãn điều kiện`;