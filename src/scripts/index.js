// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";

// \/ All of your javascript should go here \/
const form = document.querySelector("#submit-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const pw = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    //
    // console.log(user)
    createUser()
})



const createUser = async () => {
    const user = {
    name: name.value,
    email: email.value,
    pw: password.value,
    message: message.value
}

    try {
        const url = "https://jsonplaceholder.typicode.com/users"
        const newUserTemp = {
            method: "POST",
            body: JSON.stringify({ user })
        }
        const res = await fetch(url, newUserTemp);
        const data = await res.json()
        alert("Thank you for submitting your info. Your Id is: " + data.id)
        console.log(data)
        console.log(user)
    } catch (error) {
        console.warn("An error occurred, try again!")
    }


}
createUser()
// console.log(createUser())



