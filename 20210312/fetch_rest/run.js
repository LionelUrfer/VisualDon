const R = require('ramda')
const fetch = require('node-fetch')

const URL_USERS = 'https://jsonplaceholder.typicode.com/users'
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'

//On definit la fonction get.
const get = url => fetch(url).then(r => r.json())

const reducer = (r, d) => {
    const userID = d.userId
    const prev = r[userID] || []
    return {
        ...r,
        [userID]: [...prev, d.title]
    }
}

const maFonction = async () => {
    const users = await get(URL_USERS)
    const posts = await get(URL_POSTS)
    const parUser = posts.reduce(reducer, {})

    console.log(users.map(d => ({
        nom_utilisateur: d.username,
        ville: d.address.city,
        nom_companie: d.company.name,
        titre: parUser[d.id]
    })))
}
maFonction();

// Promise.all([
//     get('http://localhost:3000/users/1'),
//     get('http://localhost:3000/users/2'),
// ])
// .then(console.log)
