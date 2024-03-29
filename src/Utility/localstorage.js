const getAddedBooks = () => {
    const addedBooks = localStorage.getItem('added-book');
    if(addedBooks){
        return JSON.parse(addedBooks);
    }
    return [];
}



const saveBook = (id) => {
    const addedBooks = getAddedBooks();
    const exists = addedBooks.find(bookId => bookId === id);
    if(!exists){
        addedBooks.push(id);
        localStorage.setItem('added-book', JSON.stringify(addedBooks));
    }
    

};


export {saveBook, getAddedBooks}







