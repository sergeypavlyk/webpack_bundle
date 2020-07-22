import '../sass/style.scss'
console.log('Its bundled now !');

const tag = document.createElement('p');
const text = document.createTextNode('Ready!');
tag.appendChild(text);
const element = document.querySelector('body');
console.log('Its bundled now !', element, element.appendChild);
element.appendChild(tag);

// babel test
document.querySelector('p').addEventListener('click', () => {
  console.log('clicked!');
  document.querySelector('p').innerText = 'Clicked Woohoo!';
});

