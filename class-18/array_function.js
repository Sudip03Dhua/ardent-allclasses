let courses=['HTML','CSS','JS'];
console.log(courses);

console.log(courses[1]);
console.log(courses[courses.length-1]); //last element

courses.push('NodeJS'); //add at the end
courses.unshift("Web developement"); //add the beginning

console.log(courses);
console.log(courses.length);
for(let i=0;i<courses.length;i++){
    console.log(courses[i]);
}