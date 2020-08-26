import '../sass/main.scss';
import finalData from './finalData/finalData';
import showList from './showList/showList';
import styleBdayCell from './styleBdayCell/styleBdayCell';

// On update handler
document.querySelector('#bcal-update').addEventListener('click', () => {
    let birthdayData = '';

    const data = document.querySelector('#bcal-data').value;
    if(data) {
        // Convert JS object to valid JSON
        const validJson = data.replace((/([\w]+)(:)/g), "\"$1\"$2").replace((/'/g), "\"");
        // store old json in localstorage
        localStorage.setItem('oldJson', validJson);
        const jsonData = JSON.parse(validJson);
        birthdayData = finalData(jsonData);
    } else {
        alert('Enter JSON Data');
        return;
    }

    const inputYear = document.querySelector('#bcal-year').value;
    const year = Math.round(Math.abs(inputYear));
    if (year !== '' && year > new Date().getFullYear()) {
        alert('Enter Valid Year');
        return;
    }

    if(year) {
        const bdayByYear = birthdayData.filter(el =>  el.year === year);
        showList(bdayByYear);
        styleBdayCell(bdayByYear);
    } else {
        showList(birthdayData);
        styleBdayCell(birthdayData);
    }
});

// get data from local storage
document.querySelector('#bcal-data').value = localStorage.getItem('oldJson');
