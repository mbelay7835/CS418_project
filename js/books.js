const fetch = require("node-fetch");
async function fetchDataJSON() {
    try {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");//return header and body
        //response.header.get()..to get the header
        const data = await response.json();// return parsed body
        console.log(data)

    } catch (err) {
        console.log(err)
    }
}

fetchDataJSON()