const userData = {
    name: "Steve",
    email: "steve@steve.com"
}
const element = document.querySelector('body');

function submitData(name, email) {
    const XHR = new XMLHttpRequest();
    return fetch("http://localhost:3000/users", {
        method : 'POST',
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => element.append(data.id))
    .catch(error => {
        element.append(error.message)
    })
}
