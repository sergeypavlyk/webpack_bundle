import '../sass/style.scss'
console.log('Its bundled now !');

const tag = document.createElement('p');
const text = document.createTextNode('Ready! -- Click here to check @babel-loader efficiency --');
tag.appendChild(text);
const element = document.querySelector('body');
console.log('Its bundled now !', element, element.appendChild);
element.appendChild(tag);

// babel test
document.querySelector('p').addEventListener('click', () => {
  document.querySelector('p').innerText = 'It works!';
});
