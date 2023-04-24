let funkos = [
    {id: '1', categoria: 'Dragon Ball', name: 'Goku', stock: 10, price: 12000, foto:'/goku.jpeg'},
    {id: '2', categoria: 'Dragon Ball', name: 'Vegeta', stock: 25, price: 11500, foto:'/vegeta.jpeg'},
    {id: '3', categoria: 'Dragon Ball', name: 'Raditz', stock: 8, price: 9000, foto:'/raditz.jpg'},
    {id: '4', categoria: 'Dragon Ball', name: 'Dodoria', stock: 5, price: 9500, foto:'/dodoria.jpg'},
    {id: '5', categoria: 'Dragon Ball', name: 'Kid Goku', stock: 2, price: 11000, foto:'/goku_kid.jpeg'},
    {id: '6', categoria: 'Dragon Ball', name: 'Vegeta', stock: 7, price: 12500, foto:'/vegeta_2.jpg'},
    {id: '7', categoria: 'Dragon Ball', name: 'Vegito', stock: 12, price: 15000, foto:'/vegito.png'},
    {id: '8', categoria: 'Dragon Ball', name: 'Goku Ultra Instinto', stock: 15, price: 17000, foto:'/goku_ui.jpeg'},
    {id: '9', categoria: 'Pokemon', name: 'Pikachu', stock: 17, price: 11000, foto:'/pikachu.jpg'},
    {id: '10', categoria: 'Pokemon', name: 'Charmander', stock: 20, price: 10000, foto:'/charmander.jpg'},
    {id: '11', categoria: 'Pokemon', name: 'Bulbasaur', stock: 14, price: 10000, foto:'/bulbasaur.jpeg'},
    {id: '12', categoria: 'Pokemon', name: 'Squirtle', stock: 15, price: 10000, foto:'/squirtle.jpg'},
    {id: '13', categoria: 'Pokemon', name: 'Charizard', stock: 16, price: 12000, foto:'/charizard.jpg'},
    {id: '14', categoria: 'One Piece', name: 'Luffy', stock: 18, price: 15000, foto:'/luffy.webp'},
    {id: '15', categoria: 'One Piece', name: 'Brook', stock: 11, price: 17000, foto:'/samurai_brook.jpg'},
    {id: '16', categoria: 'One Piece', name: 'Bonekichi', stock: 16, price: 12000, foto:'/bonekichi.webp'}
]

 const mFetch = (id) => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res( !id ? 
                funkos : 
                funkos.find(funko => funko.id === id) )
        },2000)
    })
}

export default mFetch