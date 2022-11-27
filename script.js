var bodyCards = document.querySelector("#cards");

fetch('http://localhost:8080/card/')
.then(res => res.json())
.then(res => {

    // maneira correta de mapear.
    res.map(r => {

        bodyCards.innerHTML += card(r.title, r.bodydesc);

    })

    //uma das formas de mapear, não muito legal.
    // for(let i = 0;i < res.length; i++){
    //     console.log(res[i])
    // }

})

const card = (title, body) => {
    return `
    <div class="card">
        <h1 class="card_title">${title}</h1>
        <p class="card_text">${body}</p>
        <a href="#" class="card_button">Leia mais</a>
    </div>` 
}

