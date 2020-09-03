const form = document.querySelector('#form');
const postContainer = document.querySelector('#post');

form.addEventListener('submit', submitPost)

getPost();

function submitPost(e) {
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        name: e.target.name.value,
        story: e.target.story.value
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    }

    fetch('http://localhost:3000/posts/', options)
        .then(res => res.json())
        .then(addPost)
        .catch(console.warn)
}

function getPost(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
}

function appendPosts(data) {
    console.log(data);
    data.posts.forEach(addPost)
}

function addPost(postData){
    const newPost = document.createElement('div');
    newPost.textContent = `Title: ${postData.title}, Name:${postData.name}, Story:${postData.story}`
    postContainer.append(newPost);
};
