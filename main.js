const form = document.querySelector('form');
const ul = document.querySelector('ul');
const paxNumber = document.querySelector('h1 span');
const input = document.querySelector('input');
const liElements = document.getElementsByClassName('pax');

const removePax = (e) => {
    e.target.parentNode.remove();
    paxNumber.textContent = liElements.length;
}

addPax = (e) => {
    e.preventDefault();
    const titlePax = input.value;
    if (titlePax === 0) return;
    const pax = document.createElement('li');
    pax.className = 'pax';
    pax.innerHTML = titlePax + "<button>Usuń</button>";
    ul.appendChild(pax);
    input.value = '';
    paxNumber.textContent = liElements.length;
    pax.querySelector('button').addEventListener('click', removePax);
}




form.addEventListener('submit', addPax);