
function getRandomNumber(from = 1, to = 49) {
    return Math.round(Math.random() * (to - from) + from);
};

function buildArrayWithRandomNumbers(quantity = 6) {
    return Array(quantity).fill(0).map(function () {
        return getRandomNumber();
    });
}
function render(list) {
    let html = '';
    function template(item) {
        return `<span>${item}</span>`;

    }

    list.forEach(function (item) {
        html += template(item);
    });

    console.log(html);
    const $page = document.querySelector('#page');
    $page.innerHTML = html;
}

function main() {
    const numbers = buildArrayWithRandomNumbers();
    render(numbers);
}


window.addEventListener('DOMContentLoaded', main);