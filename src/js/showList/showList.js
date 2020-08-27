import { selectors } from '../selectors/selectors';

const showList = (finalData) => {
    const days = selectors.days;

    selectors.cellsWrapper.forEach(el => el.innerHTML = '');

    finalData.forEach(person => {
        try {
            const listNode = document.createElement("LI");
            const textNode = document.createTextNode(person.alias);
            listNode.appendChild(textNode);
            document.querySelector(`.${days[person.day]}`).appendChild(listNode);
        } catch {
            alert('something wrong with json date');
        }
    });
}

export default showList;