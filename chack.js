const jokeForm = document.getElementById("jokeForm")
const jokeText = document.getElementById("jokeText")
const firstNameInput = document.getElementById("firstName")
const lastNameInput = document.getElementById("lastName")

jokeForm.addEventListener("submit", async function(e) {
    e.preventDefault()

    const firstName = firstNameInput.value === '' ? 'Chuck' : firstNameInput.value
    const lastName =lastNameInput.value || 'Norris'
    const url =`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;


    try {
        const res = await fetch(url)
        const data = await res.json()
        jokeText.innerHTML=data.value.joke
    }
    catch(err) {
        alert(err.message)
    }
    
})