//indexOf()
let text="Hii my dear students. How are you all?";
let index=text.indexOf('dear');
console.log(index);
console.log(text.search('dear'));

console.log(text.match('dent'));

console.log(text.match(/dent/gi)); //global case insensitive

console.log(text.match(/ar/g));

console.log(text.startsWith('Hii'));

console.log(text.endsWith('asfbadbf'));