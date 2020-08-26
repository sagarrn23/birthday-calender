const showList = (finalData) => {
    const days = ['bcal-sun', 'bcal-mon', 'bcal-tue', 'bcal-wed', 'bcal-thu', 'bcal-fri', 'bcal-sat'];

    document.querySelectorAll('.bcal-ppl').forEach(el => el.innerHTML = '');

    finalData.forEach(person => {
        const listNode = document.createElement("LI");
        const textNode = document.createTextNode(person.alias);
        listNode.appendChild(textNode);
        document.querySelector(`.${days[person.day]}`).appendChild(listNode);
    });
}

export default showList;