// Add your code here

let FormData = {
    name: nameInput,
    email:emailInput,

}

function submitData(nameInput, emailInput){

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: nameInput,
            email:emailInput,
        }),
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then((res) => res.json())
    .then((json) => document.body.innerHTML = json.id)
    .catch(error => document.body.innerHTML = error.message)
}
