
// async function getUsers(){
//     let userSection = document.querySelector('.user-section');
//     try{
//         userSection.innerHTML = 'Loading...';
//         let res = await fetch ('https://jsonplaceholder.typicode.com/users');
//         let data = await res.json();
//         showUser(data);
//     } catch (error) {
//         userSection.innerHTML = 'Failed to load users';
//         console.error(error);
//     }    
// }
// getUsers();

// function showUser(data){
//     let userSection = document.querySelector('.user-section');
//     userSection.innerHTML = '';
//     data.forEach(e => {
//         let card = document.createElement('div');
//         card.classList.add('user-card');
//         let userTop = document.createElement('div');
//         userTop.classList.add('user-top');
//         let userName = document.createElement('h2');
//         userName.innerText = e.name;
//         let userNameName = document.createElement('p');
//         userNameName.innerText = '@' + e.username;
//         userTop.append(userName, userNameName);
//         let userEmail = document.createElement('p');
//         userEmail.innerText = e.email;
//         let userAddress = document.createElement('address');
//         userAddress.innerText = e.address.street + ',' + e.address.suite + ',' + e.address.city + ',' + e.address.zipcode;
//         let userPhone = document.createElement('p');
//         userPhone.innerText = e.phone;
//         let userWebsite = document.createElement('a');
//         userWebsite.setAttribute('href', 'https://' + e.website);
//         userWebsite.innerText = 'https://' + e.website;
//         let userComplany = document.createElement('p');
//         userComplany.innerText = e.company.name;
//         card.append(userTop, userEmail, userAddress, userPhone, userWebsite, userComplany);
//         userSection.append(card);

//     })
// }

async function createPost() {
    try {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                userId: 1
            })
        });
        let data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}