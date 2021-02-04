function updateTable() {

    let x = fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${array}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "isbn": document.getElementById("isbn").value + "",
            "title": document.getElementById("title").value + "",
            "overdueFee": document.getElementById("overdue").value + "",
            "publisher": document.getElementById("publisher").value + "",
            "datePublished": document.getElementById("date").value + ""

        })

    }).catch(console.log)
    //console.log(`https: //elibraryrestapi.herokuapp.com/elibrary/api/book/update/${array}`)

    alert("Book updated")
}


let array = window.location.search.split("=")[1]

fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list')
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        data.forEach(element => {
            if (array == element.bookId) {
                document.getElementById("isbn").value = element.isbn
                document.getElementById("title").value = element.title
                document.getElementById("overdue").value = element.overduefee
                document.getElementById("publisher").value = element.publisher
                document.getElementById("date").value = element.datePublished

            }
        });
    })

let editBook = document.getElementById("editsave");

editBook.addEventListener("click", updateTable);