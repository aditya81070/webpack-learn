import txt from './something.txt';
import background from './img/background.jpg';
import profile from './img/icons-512.png';
import other from './img/others.png';
import createImage from './createImage';
import './main.css';
import './responsive.css';
import css from './main.scss';

const gfm = () => import(/* webpackChunkName: 'gfm' */ './gfm.md');
console.log(gfm);
const backgroundImg = createImage(background);
const profileImg = createImage(profile);
const otherImg = createImage(other);
const div = document.createElement('div');
div.className = 'container';
document.body.appendChild(div);
div.appendChild(backgroundImg);
div.appendChild(profileImg);
div.appendChild(otherImg);
const btn = document.createElement('button');
btn.textContent = 'Show HTML';
div.appendChild(btn);

btn.addEventListener('click', e => {
  const markdownDiv = document.createElement('div');
  markdownDiv.className = 'markdown';
  gfm().then(htmlStr => {
    markdownDiv.innerHTML = htmlStr.default;
  });
  div.appendChild(markdownDiv);
  markdownDiv.insertAdjacentHTML(
    'beforebegin',
    '<h1>Parsed from markdown</h1>'
  );
});
