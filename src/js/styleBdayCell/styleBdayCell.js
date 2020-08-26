const days = ['bcal-sun', 'bcal-mon', 'bcal-tue', 'bcal-wed', 'bcal-thu', 'bcal-fri', 'bcal-sat'];

const styleBdayCell = (finalData) => {
    const dayBdayCount = {};
    finalData.forEach(el => {
        dayBdayCount[el.day] = (dayBdayCount[el.day] || 0) + 1
    });

    console.log(dayBdayCount);

    for(const [key, value] of Object.entries(dayBdayCount)) {
        const fraction = Math.ceil(Math.sqrt(value));
        let style = ''
        for (let i = 0; i < fraction; i++) {
            style += '1fr ';
        }
        document.documentElement.style.setProperty(`--${days[key]}`, style);
    }
}

export default styleBdayCell;