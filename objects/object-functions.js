let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};


function getSummary(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pagecountSummary: `${book.title} by ${book.author} contains ${book.pageCount} page(s)`
    }
}

console.log(getSummary(myBook).summary);
console.log(getSummary(otherBook).pagecountSummary);
