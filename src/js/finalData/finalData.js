const finalData = (rawData) => {
    return rawData
        .map(el => {
            const dt = new Date(el.birthday);
            return {
                name: el.name,
                alias: el.name
                        .split(' ')
                        .map((name, index, arr) => {
                            if (index === 0 || index === arr.length - 1) return name[0]
                        })
                        .join(''),
                year: dt.getFullYear(),
                day: dt.getDay()
            }
        })
        .sort((a, b) => a.day - b.day);
}

export default finalData;