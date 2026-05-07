async function getPosts(){
    try{
        let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
getPosts();

function displayPosts(posts){
    let postsContainer = document.querySelector('.posts-items');
    posts.forEach(post => {
        if (post.id <= 10) {
            let postCard = document.createElement('div');
            postCard.classList.add('post-card');
            let cardId = document.createElement('span');
            cardId.innerText = `Post ID: ${post.id}`;
            let cardUserId = document.createElement('span');
            cardUserId.innerText = `User ID: ${post.userId}`;
            let cardTitle = document.createElement('h3');
            cardTitle.innerText = post.title;
            let cardInfo = document.createElement('p');
            let btnInfo = document.createElement('div');
            btnInfo.classList.add('btn-info');
            let editBtn = document.createElement('button');
            editBtn.setAttribute('data-id', post.id);
            editBtn.setAttribute('onclick', `editPost(${post.id})`);
            editBtn.classList.add('edit-btn');
            editBtn.innerText = "Edit";
            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('data-id', post.id);
            deleteBtn.setAttribute('onclick', `deletePost(${post.id})`);
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerText = "Delete";
            btnInfo.append(editBtn, deleteBtn);
            cardInfo.innerText = post.body;
            postCard.append(cardId, cardUserId, cardTitle, cardInfo, btnInfo);
            postsContainer.append(postCard);
        }
    })

}

document.addEventListener('DOMContentLoaded', () =>{
    let addBtn = document.querySelector('#add-post-btn');
    let popDiv = document.querySelector('.add-post-poup');
    let closeBtn = document.querySelector('.Close-poup');
    addBtn.addEventListener('click', () =>{
        popDiv.classList.add('active');
    })
    closeBtn.addEventListener('click', () => {
        popDiv.classList.remove('active');
    })
})


async function sendPost(event){
    event.preventDefault();
    let title = document.querySelector('#post-title').value;
    let content = document.querySelector('#post-content').value;
    try{
        let response = await fetch ('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: content,
                userId: 1
            })
        })
        let data = await response.json();
        let postsContainer = document.querySelector('.posts-items');
        let postCard1 = document.createElement('div');
            postCard1.classList.add('post-card');
            let cardId1 = document.createElement('span');
            cardId1.innerText = `Post ID: ${data.id}`;
            let cardUserId1 = document.createElement('span');
            cardUserId1.innerText = `User ID: ${data.userId}`;
            let cardTitle1 = document.createElement('h3');
            cardTitle1.innerText = data.title;
            let cardInfo1 = document.createElement('p');
            cardInfo1.innerText = data.body;
            postCard1.append(cardId1, cardUserId1, cardTitle1, cardInfo1);
            postsContainer.append(postCard1);
    }
    catch(error){
        console.error('Error adding post:', error);
    }
}


async function editPost(id){
    try{
        let response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: "Updated Title",
                body: "Updated content",
                userId: 1
            })
        })
        let data = await response.json();
        console.log('Post updated:', data);
    }
    catch(error){
        console.error('Error editing post:', error);
    }
}

async function deletePost(id){
    try{
        let response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        let data = await response.json();
        console.log(`Post deleted: ${data.id}`);
    }
    catch(error){
        console.error('Error deleting post:', error);
    }
}