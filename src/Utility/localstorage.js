import { toast } from "react-toastify"


export const getBooks = () => {
    
    const storedBooks = localStorage.getItem('book') 
    if(storedBooks){
     return  JSON.parse(storedBooks)
    }
    
}
export const getWish = () => {
    
    const wishedBooks = localStorage.getItem('wish') 
    if(wishedBooks){
        return JSON.parse(wishedBooks)
    }
    
}
// readed books
export const readBooks = (book) => {
    let books = getBooks()
    
    const isExist = books.find(data => data.id === book.id)
    if(isExist){
        return toast.error('Books already added to read list ')
    }
    books.push(book)
    localStorage.setItem('book', JSON.stringify(books))
    toast.success('Books added to read list')
}
// wishlisted
export const WishBooks = (book) => {
    let wishes = getWish()
    
    const isExist =wishes.find(data => data.id === book.id)
    if(isExist){
        return toast.error('Books already added to read list ')
    }
    wishes.push(book)
    localStorage.setItem('wish', JSON.stringify(wishes))
    toast.success('Books added to wish list')
}