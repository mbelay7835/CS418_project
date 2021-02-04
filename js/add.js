//const fetch = require("node-fetch");

async function addBook() {

    let isbn = document.getElementById("isbn").value;
    let title = document.getElementById("title").value;
    let overdue = document.getElementById("Overdue").value;
    let publisher = document.getElementById("publisher").value;
    let publishDate = document.getElementById("date").value;

    try {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({

                "isbn": isbn,
                "title": title,
                "overdueFee": overdue,
                "publisher": publisher,
                "datePublished": publishDate

            })
        })
       // console.log(response)
        if (response.status == 200) {
            alert("You sucessfuly added book")
        } else {
            alert("Please add data in the required field")
        }

    } catch (err) {
        alert(err)
    }

}
//addBook()
let saveBook = document.getElementById("save");

saveBook.addEventListener("click", addBook);


