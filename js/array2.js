window.onload = () => {
    loadBookList();
};

const bookList = new Array();

bookList.push({
    bookName: "java",
    author: "정혜성",
    publisher: "koreait"
});


bookList.push({
    bookName: "web",
    author: "주성광",
    publisher: "koreait"
});


bookList.push({
    bookName: "c++",
    author: "정대풍",
    publisher: "koreait"
});


bookList.push({
    bookName: "aws빅데이터",
    author: "이동헌",
    publisher: "koreait"
});

bookList.push({
    bookName: "파이썬",
    author: "장호진",
    publisher: "koreait"
});

bookList.push({
    bookName: "css",
    author: "이지우",
    publisher: "koreait"
});

const loadBookList = () => {
    const bookListTbody = document.querySelector(".book-list");

    bookListTbody.innerHTML = bookList.map(book => {
        return `
            <li>
                <span>${book.bookName}</span> | <span>${book.author}</span> | <span>${book.publisher}</span>
            </li>
        `
    }).join("");
};

const addBookOnClickHandle = () => {
    const book = {
        bookName: document.querySelector(".book-name").value,
        author: document.querySelector(".author").value,
        publisher: document.querySelector(".publisher").value
    }

    bookList.push(book);
    loadBookList();
};
