const getWishedBooks = () => {
    const wishedBooks = localStorage.getItem('wished-book');
    if(wishedBooks){
        return JSON.parse(wishedBooks);
    }
    return [];
}

const saveWishedBook = (id) => {
    const wishedBooks = getWishedBooks();
    const exists = wishedBooks.find(bookId => bookId === id);
    if(!exists){
        wishedBooks.push(id);
        localStorage.setItem('wished-book', JSON.stringify(wishedBooks));
    }
    

};
export {saveWishedBook, getWishedBooks, }