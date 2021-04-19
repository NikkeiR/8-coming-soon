function calcTimeTillDate(date) {
    const targetDate = '2022-' + date;

    // logic

    return {
        days: 5,
        hours: 0,
        minutes: 35,
        seconds: 9
    }
}

function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

function clock(selector, date) {
    const DOM = document.querySelector(selector);
    const timeLeft = calcTimeTillDate(date);
    const config = ['days', 'hours', 'minutes', 'seconds'];

    let HTML = '';
    for (const item of config) {
        const value = item === 'days' ? timeLeft[item] : formatNumber(timeLeft[item]);

        HTML += `<div class="time">
                    <div class="value">${value}</div>
                    <div class="label">${item}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;
}

export { clock }