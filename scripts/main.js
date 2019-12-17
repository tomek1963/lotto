
function getRandomNumber(from,to) {
    return Math.round( Math.random()+(to-from)+from);
};

function buildArrayWithRandomNumbers(quantity = 6) 
    {
        return Array(quantity).fill(0).map(function() {
            return getRandomNumber();
        });
    };
    function render(list) {

        let html ='';
        function template(item) {
        return '<span>${value}</span';

        }

    list.forEach(function(item) {
        html +=template(item);
});

    };
function main() {
    const numbers=buildArrayWithRandomNumbers();
    render(numbers);
};


window.addEventListener('DOMContentLoaded',main)








