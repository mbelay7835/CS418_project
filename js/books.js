//const fetch = require("node-fetch");


async function fetchDataJSON() {
    try {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"); //return header and body

        const data = await response.json();// return parsed body
        //console.log(data)
        let table = document.getElementById('myTable')

        for (let i = 0; i < data.length; i++) {
            let row = `<tr>
                    <td>${data[i].bookId}</td>
                    <td>${data[i].isbn}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].overdueFee}</td>
                    <td>${data[i].publisher}</td>
                    <td>${data[i].datePublished}</td>
                    <td><a  href="editBook.html ?bookId=${data[i].bookId}"  onclick= edditBook(${data[i].bookId})" style="float:right;">Edit</a></td>
                    <td><a data-toggle="modal" data-bookid="${data[i].bookId}" data-bookisbn="${data[i].isbn}" 
                     data-booktitle="${data[i].title}" href="delete.html" onclick="deletebook(${data[i].bookId})">Delete</a></td>
                  </tr>`
            table.innerHTML += row
        }

    } catch (err) {
        document.getElementById("div").innerHTML = "Not successfully connected, check the url."
    }
}
fetchDataJSON()



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