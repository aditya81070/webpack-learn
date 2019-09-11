import txt from './something.txt';
import background from './img/background.jpg';
import profile from './img/icons-512.png';
import other from './img/others.png';
import createImage from './createImage';
import './main.css';
import './responsive.css';
import gfm from './gfm.md';

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

const markdownDiv = document.createElement('div');
markdownDiv.className = 'markdown';
markdownDiv.innerHTML = gfm;
div.appendChild(markdownDiv);
markdownDiv.insertAdjacentHTML('beforebegin', '<h1>Parsed from markdown</h1>');
