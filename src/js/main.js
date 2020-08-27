import '../sass/main.scss';
import finalData from './finalData/finalData';
import setData from './setData/setData';
import showList from './showList/showList';
import styleBdayCell from './styleBdayCell/styleBdayCell';
import { selectors } from './selectors/selectors';

// On update handler
let birthdayData = '';
selectors.updateBtn.addEventListener('click', () => {

    // get data and process
    const data = selectors.jsonInput.value;
    if(data) {
        // Object to JSON
        const validJson = data.replace((/([\w]+)(:)/g), "\"$1\"$2").replace((/'/g), "\"");
        localStorage.setItem('oldJson', validJson);
        birthdayData = setData(validJson);
    } else {
        alert('Enter JSON Data');
        return;
    }

    // get year and process
    const inputYear = selectors.yearInput.value;
    const year = Math.round(Math.abs(inputYear));
    if (year !== '' && year > new Date().getFullYear()) {
        alert('Enter Valid Year');
        return;
    }
    
    // Display data in calender
    if(year) {
        const bdayByYear = birthdayData.filter(el =>  el.year === year);
        localStorage.setItem('oldYear', year);
        showList(bdayByYear);
        styleBdayCell(bdayByYear);
    } else {
        localStorage.setItem('oldYear', '');
        showList(birthdayData);
        styleBdayCell(birthdayData);
    }
});

// get data from localstorage
const oldJson = localStorage.getItem('oldJson');
const oldYear = localStorage.getItem('oldYear');

if(oldJson) {
    birthdayData = setData(oldJson)
}

if (oldYear) {
    const bdayByYear = birthdayData.filter(el => el.year === +oldYear);
    showList(bdayByYear);
    styleBdayCell(bdayByYear);
} else {
    showList(birthdayData);
    styleBdayCell(birthdayData);
}

// display old data from local storage
selectors.jsonInput.value = oldJson;
selectors.yearInput.value = oldYear;


