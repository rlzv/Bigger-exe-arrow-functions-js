// const add = function(x,y) {
//     return x + y;
// }



// const add = (x, y) => {
//     return x + y;
// }


// //nu e necesar la un parametru sa avem '()'
// const square = (x) => {
//     return x * x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }


//nu ne trebuie return dupa noua sintaxa js in acest caz
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )



//merge doar la o expresie, daca sunt 2 ne trebuie paranteze
// const add = (a, b) => ( 
//     a + b;
// )




// const add = (a, b) => a + b;  //merge doar la o expresie, daca sunt 2 ne trebuie paranteze
    



const movies = [
    {
        title: 'Amari',
        score: 99
    },
    {
        title: 'Stand With U',
        score: 85
    },
    {
        title: 'Warzone',
        score: 95
    },
    {
        title: 'Blinders',
        score: 90,
    }
]


// const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map((movie) => {
    return `${movie.title} = ${movie.score / 10}`
})