import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';
import get from './utils/getElement.js';

console.log(random);

const container = get('.container');
const btn = get('.btn');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
