const button = document.getElementById('btn')

const getUsers = () => {
    getLoader()
    const localData = JSON.parse(localStorage.getItem("users"))
    localData && localData.time > Date.now() ?
        printUsers(localData.content) :
        getUsersFromAPI()
}

const getUsersFromAPI = () => {
    fetch("https://reqres.in/api/users?delay=2")
        .then(response => response.json())
        .then(users => {
            printUsers(users.data)
            saveUsersToLocalStorage(users.data)
        })
}

const printLoader = () => `<div class="container-sm">
                                <div class="row">
                                    <p class="text-center">Loading users</p>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-4 text-center">
                                        <img
                                            class="mx-auto"
                                            src="./loading.gif"
                                            style="width: 100px" 
                                        ></img>
                                    </div>
                                <div/>
                            </div>
                            `

const getLoader = () => {
    const container = document.getElementById("users-container")
    container.innerHTML = printLoader()
}

const printUser = ({ avatar, id, email, first_name, last_name }) => {
    return `<div class="row border-bottom p-2">
                <div class="col-md-1 justify-content-center">
                    <p class="text-center">${id}</p>
                </div>
                <div class="col-md-4 justify-content-center">
                    <p class="text-center"><a href='#'>${email}</a></p>
                </div>
                <div class="col-md-3 justify-content-center">
                    <p class="text-center">${first_name}</p>
                </div>
                <div class="col-md-3 justify-content-center">
                    <p class="text-center"> ${last_name}</p>
                </div>
                <div class="col-md-1 justify-content-center text-center">
                    <img 
                        src="${avatar}"
                        class="rounded-circle mx-auto"
                        style="width: 50px"
                    ></img>
                </div>
            <div/>`
}

const userHeader = `<div class="row border-bottom border-3 border-dark" >
                        <div class="col-md-1 justify-content-center">
                            <p class="text-center"><b>Id</b></p>
                        </div>
                        <div class="col-md-4 justify-content-center">
                            <p class="text-center"><b>Email</b></p>
                        </div>
                        <div class="col-md-3 justify-content-center">
                            <p class="text-center"><b>First name</b></p>
                        </div>
                        <div class="col-md-3 justify-content-center">
                            <p class="text-center"><b>Last name</b></p>
                        </div>
                        <div class="col-md-1 justify-content-center">
                            <p class="text-center"><b>Image</b></p>
                        </div>
                    </div>`

const printUsers = (users) => {
    const container = document.getElementById("users-container")
    container.innerHTML = userHeader
    users.forEach(u => container.innerHTML += printUser(u))
}

const saveUsersToLocalStorage = data => {
    const users = {
        content: [...data],
        time: Date.now() + 60000
    }
    localStorage.setItem('users', JSON.stringify(users))
}

button.addEventListener("click", getUsers)