const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComments(data))
}
const displayComments = (comments) => {
    const commentsContainer = document.getElementById('comments-container')
    comments.forEach(comment => {

        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <div onclick="loadPost('')">
         <h1> postId: ${comment.postId}</h1>
        <h4> Name: ${comment.name}</h4>
        <p> comment: ${comment.body}</p>
        </div>
        
        `
        commentsContainer.appendChild(commentDiv)
        // console.log(comment)
    })
};

const loadPost = (posts) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
};

const displayPost = (posts) => {
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <p> post:${post.body} </p>
        `
        postContainer.appendChild(postDiv)
        console.log(post)
    })
}
// loadPost()
loadComments()