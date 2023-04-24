let funkos = [
    {id: '1', categoria: 'DragonBall', name: 'Goku', stock: 10, price: 12000, foto:'/goku.jpeg'},
    {id: '2', categoria: 'DragonBall', name: 'Vegeta', stock: 25, price: 11500, foto:'/vegeta.jpeg'},
    {id: '3', categoria: 'DragonBall', name: 'Raditz', stock: 8, price: 9000, foto:'/raditz.jpg'},
    {id: '4', categoria: 'DragonBall', name: 'Dodoria', stock: 5, price: 9500, foto:'/dodoria.jpg'},
    {id: '5', categoria: 'DragonBall', name: 'Kid Goku', stock: 2, price: 11000, foto:'/goku_kid.jpeg'},
    {id: '6', categoria: 'DragonBall', name: 'Vegeta', stock: 7, price: 12500, foto:'/vegeta_2.jpg'},
    {id: '7', categoria: 'DragonBall', name: 'Vegito', stock: 12, price: 15000, foto:'/vegito.png'},
    {id: '8', categoria: 'DragonBall', name: 'Goku Ultra Instinto', stock: 15, price: 17000, foto:'/goku_ui.jpeg'},
    {id: '9', categoria: 'Pokemon', name: 'Pikachu', stock: 17, price: 11000, foto:'/pikachu.jpg'},
    {id: '10', categoria: 'Pokemon', name: 'Charmander', stock: 20, price: 10000, foto:'/charmander.jpg'},
    {id: '11', categoria: 'Pokemon', name: 'Bulbasaur', stock: 14, price: 10000, foto:'/bulbasaur.jpg'},
    {id: '12', categoria: 'Pokemon', name: 'Squirtle', stock: 15, price: 10000, foto:'/squirtle.jpg'},
    {id: '13', categoria: 'Pokemon', name: 'Charizard', stock: 16, price: 12000, foto:'/charizard.jpg'},
    {id: '14', categoria: 'OnePiece', name: 'Luffy', stock: 18, price: 15000, foto:'/luffy.webp'},
    {id: '15', categoria: 'OnePiece', name: 'Brook', stock: 11, price: 17000, foto:'/samurai_brook.jpg'},
    {id: '16', categoria: 'OnePiece', name: 'Bonekichi', stock: 16, price: 12000, foto:'/bonekichi.webp'}
]

 const mFetch = (id) => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res( !id ? 
                funkos : 
                funkos.find(funko => funko.id === id) )
        },1000)
    })
}

export default mFetch