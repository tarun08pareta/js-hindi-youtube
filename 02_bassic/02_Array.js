const marvel_heros =["thor","ironman","spiderman"];
const dc_heros =["superman","falsh","batman"];


marvel_heros.push(dc_heros)
console.log(marvel_heros)     // output======>   [ 'thor', 'ironman', 'spiderman', [ 'superman', 'falsh', 'batman' ] ]

// console.log(typeof marvel_heros);              // object
// console.log( marvel_heros[3][1]);              


// const allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros);                   // output=====>   [ 'thor', 'ironman', 'spiderman', 'superman', 'falsh', 'batman' ]



const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);                              // output=======>[ 'thor', 'ironman', 'spiderman', 'superman', 'falsh', 'batman' ]


const  another_Array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_Array.flat(Infinity);

// console.log(real_another_array);              // output======>[ 1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]




console.log(Array.isArray("tarun"));           // output======> false
console.log(Array.from("tarun"));               // output======>          [ 't', 'a', 'r', 'u', 'n' ]
console.log(Array.from({name:"tarun"}));          // output======>  []    convert nhi kr pa rha h          imporotant


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));          // output======>[ 100, 200, 300 ]

