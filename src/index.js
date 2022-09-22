import { hello } from './hello';
import image from '../assets/lap.jpeg';
import alternateText from '../assets/altText.txt';
hello();
const img = document.createElement('img');
img.src = image;
img.alt = alternateText;
document.body.append(img);
