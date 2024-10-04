import { getData } from './data.js';

const app = document.getElementById('app');

getData().then((data) => {
  if (data) {
    const title = document.createElement('h1');
    title.innerText = data.title;

    const image = document.createElement('img');
    image.src = data.url;
    image.alt = data.title;
    image.style.maxWidth = '100%';

    const description = document.createElement('p');
    description.innerText = data.explanation;

    app.appendChild(title);
    app.appendChild(image);
    app.appendChild(description);
  } else {
    app.innerText = 'Failed to load data.';
  }
});
