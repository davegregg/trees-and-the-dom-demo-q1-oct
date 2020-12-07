let every2ndItem = document.querySelectorAll("li:nth-child(even)")
console.log(every2ndItem)

for (let index = 0; index < every2ndItem.length; index += 1) {
    let item = every2ndItem[index]
    item.style.background = "lightsalmon"
    // item.style.backgroundColor = "lightsalmon"
}

// document.body.innerHTML += "HELLO WORLD"
// document.body.append("HELLO WORLD")

let currentlyLoggedInUsers = [
    "katie",
    "dmgftw",
    "fridgeman",
    "irridescentgoblin",
]
let loggedInUsersListElement = document.querySelector(".logged-in-users")

for (let index = 0; index < currentlyLoggedInUsers.length; index += 1) {
    let username = currentlyLoggedInUsers[index]
    let userElement = document.createElement("li")
    userElement.append(username)
    userElement.classList.add("logged-in-user-item")
    userElement.classList.add("bold")

    loggedInUsersListElement.append(userElement)
    console.log(userElement)
}

let mainElement = document.querySelector("main")
let ul = document.createElement("ul")
let item1 = document.createElement("li")
item1.append("tubers")
let item2 = document.createElement("li")
item2.append("tubes")
let item3 = document.createElement("li")
item3.append("teletubbies")
ul.prepend(item1, item2, item3)

mainElement.prepend(ul)

// document.querySelector/querySelectorAll
// document.createElement
// someElement.append/prepend