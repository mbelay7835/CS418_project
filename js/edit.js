
async function edditBook(bookId) {
    const resp = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/get/${bookId}`)
    const respBody = await resp.json();

    document.getElementById("bookId").value = respBody.bookId;
    document.getElementById("title").value = respBody.title;
    document.getElementById("isbn").value = respBody.isbn;
    document.getElementById("publisher").value = respBody.publisher;
    document.getElementById("Overdue").value = respBody.overdueFee;
    document.getElementById("date").value = respBody.datePublished;

}


async function postedited() {
        
    let bookId = document.getElementById("bookId").value;
    let Title = document.getElementById("title").value;
    let IsBn = document.getElementById("isbn").value;
    let publisher = document.getElementById("publisher").value;
    let overdueFee = (document.getElementById("Overdue").value);
    let datePublished = document.getElementById("date").value;
    
    //https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/{bookId}
    let resp = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "isbn": IsBn,
            "title": Title,
            "overdueFee": overdueFee,
            "publisher": publisher,
            "datePublished": datePublished
        })
    });

    let displ = document.getElementById("pbtdisplay");
    displ.style.display = "block";
}

let editBook = document.getElementById("editsave");

    editBook.addEventListener("click", postedited);