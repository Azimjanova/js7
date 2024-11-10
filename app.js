


// random user
// api
// fetch

const api_url = 'https://randomuser.me/api/'

// DOM
const imgEl = document.querySelector('img')
const btn = document.querySelector('.button')
const text = document.querySelector('.text')
const btns = document.querySelectorAll('button')

let userInfo = {}


async function getRandomUser() {
    const responce = await fetch(api_url)
    const UserData = await responce.json()

    console.log(UserData);
    renderUser(UserData.results[0])
}

getRandomUser()

function renderUser(user = {}) {
    imgEl.src = user.picture.large
    userInfo = user
}

btn.addEventListener('click', getRandomUser)

btns.forEach(   (btn, index ) => {
    btn.addEventListener('mouseenter', () => {
        if (index === 0) {
            text.innerHTML = `
            Hello my email is <h4>${userInfo.email}</h4>
            `
        }else if(index === 1 ){
            text.innerHTML = `
            Hello my name is <h4>${userInfo.name.first + userInfo.name.last }</h4>
            ` 
        }else if(index === 2) {
            const d = new Date(userInfo.dob.date)
            text.innerHTML = `
            My birthday is <h4>/${d.getDate()}/${d.getFullYear()}</h4>
            `
        }else if (index === 3) { 
            const location = userInfo.location                     
            text.innerHTML = `
            My address is <h4>${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country} ${location.postcode}</h4>
                        `
                    }else if (index === 4) {
                        const contact = userInfo.phone
            text.innerHTML = `
                My contact number is <h4>${contact}</h4>
            `
        }else if (index === 5) { 
            text.innerHTML = `
                My password is <h4>border</h4>
            `
        }
    })
})

        
    