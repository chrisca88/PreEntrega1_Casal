let funko = [
    {id: '1', categoria: 'Dragon Ball', name: 'Goku', stock: 10, price: 12000, picture:'goku.jpeg'},
    {id: '2', categoria: 'Dragon Ball', name: 'Vegeta', stock: 25, price: 11500, picture:'vegeta.jpeg'},
    {id: '3', categoria: 'Dragon Ball', name: 'Raditz', stock: 8, price: 9000, picture:'raditz.jpg'},
    {id: '4', categoria: 'Dragon Ball', name: 'Dodoria', stock: 5, price: 9500, picture:'dodoria.jpg'},
    {id: '5', categoria: 'Dragon Ball', name: 'Kid Goku', stock: 2, price: 11000, picture:'goku_kid.jpeg'},
    {id: '6', categoria: 'Dragon Ball', name: 'Vegeta', stock: 7, price: 12500, picture:'vegeta_2.jpg'},
    {id: '7', categoria: 'Dragon Ball', name: 'Vegito', stock: 12, price: 15000, picture:'vegito.png'},
    {id: '8', categoria: 'Dragon Ball', name: 'Goku Ultra Instinto', stock: 15, price: 17000, picture:'goku_ui.jpeg'},
    {id: '9', categoria: 'Pokemon', name: 'Pikachu', stock: 17, price: 11000, picture:'pikachu.jpg'},
    {id: '10', categoria: 'Pokemon', name: 'Charmander', stock: 20, price: 10000, picture:'charmander.jpg'},
    {id: '11', categoria: 'Pokemon', name: 'Bulbasaur', stock: 14, price: 10000, picture:'bulbasaur.jpeg'},
    {id: '12', categoria: 'Pokemon', name: 'Squirtle', stock: 15, price: 10000, picture:'squirtle.jpg'},
    {id: '13', categoria: 'Pokemon', name: 'Charizard', stock: 16, price: 12000, picture:'charizard.jpg'},
    {id: '14', categoria: 'One Piece', name: 'Luffy', stock: 18, price: 15000, picture:'luffy.webp'},
    {id: '15', categoria: 'One Piece', name: 'Brook', stock: 11, price: 17000, picture:'samurai_brook.jpg'},
    {id: '16', categoria: 'One Piece', name: 'Bonekichi', stock: 16, price: 12000, picture:'bonekichi.webp'}
]

export const apiTest = () => {
    return new Promise ((res,rej) => {
        setTimeout(()=>{
            res(funko)
        },2000)
    })
}