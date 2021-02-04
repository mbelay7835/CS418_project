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
                    <td><a  href="editBook.html ?bookId=${data[i].bookId}"  onclick= updateTable()" style="float:right;">Edit</a></td>
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


