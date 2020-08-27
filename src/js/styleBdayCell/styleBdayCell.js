import { selectors } from '../selectors/selectors';


const styleBdayCell = (finalData) => {
    const dayBdayCount = {};
    const days = selectors.days;
    
    finalData.forEach(el => {
        dayBdayCount[el.day] = (dayBdayCount[el.day] || 0) + 1
    });

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