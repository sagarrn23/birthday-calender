import finalData from '../finalData/finalData';

const setData = (jsonData) => {
    try {
        const data = JSON.parse(jsonData);
        return finalData(data);
    } catch {
        alert('Invalid JSON');
        return;
    }
}

export default setData;