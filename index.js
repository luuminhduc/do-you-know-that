const query = 'https://uselessfacts.jsph.pl/random.json?language=en';
const textEl = document.querySelector('.text');
const btn = document.querySelector('.btn')


const getData = async () => {
    const res = await fetch(query, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }

    })
    const data = await res.json();
    renderData(data);
}

const renderData = (data) => {
    console.log(data);
    textEl.innerText = data.text;
}

btn.addEventListener('click', (e) => {
    getData();
})

getData();
