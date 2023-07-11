// function getElement(selector) {
//   const element = document.querySelector(selector);
//   if (element) {
//     return element;
//   } else {
//     throw Error('element selector is inccorect');
//   }
// }

// export default getElement;

export default function (selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw Error('element selector is inccorect');
  }
}
