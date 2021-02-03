//const fetch = require("node-fetch");

async function fetchDataJSON() {
    try {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list"); //return header and body

        const data = await response.json();// return parsed body
console.log(data)
        let table = document.getElementById('myTable')

        for (let i = 0; i < data.length; i++) {
            let row = `<tr>
                    <td>${data[i].bookId}</td>
                    <td>${data[i].isbn}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].overdueFee}</td>
                    <td>${data[i].publisher}</td>
                    <td>${data[i].datePublished}</td>
                  </tr>`
            table.innerHTML += row
        }

    } catch (err) {
        document.getElementById("div").innerHTML = "Not successfully connected, check the url."
    }
}
fetchDataJSON()