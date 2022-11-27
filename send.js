var inputTitle = document.querySelector("#title")
var inputBody = document.querySelector("#body")
var button = document.querySelector("#buttonSend")

const url = "http://localhost:8080/card/save"

const send = () => {

    let data = {
        title: inputTitle.value,
        bodydesc : inputBody.value
    }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let request = new Request(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: myHeaders
    })

    if(inputTitle.value && inputBody.value != ""){
        inputTitle.value = ""
        inputBody.value = ""

        fetch(request)
        .then(res => res.json())
        .then((res) => {console.log(res)})

        window.location = "/"

    }


}

button.addEventListener("click", send)