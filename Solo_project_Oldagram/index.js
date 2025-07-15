const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    { 
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainElement = document.querySelector("main")

mainElement.innerHTML = posts.map(function(post){
    return `
            <section class="user-details">
                <img class="avatar-img" src=${post.avatar} aria-label="user image"/>
                <div>
                <h1>${post.name}</h1>
                <p>${post.location}</p>
            </section>
            <img class="user-post" src=${post.post} aria-label="users post image"/>
            <section class="icons-post">
                <img class="icon-img" src="images/icon-heart.png"/>
                <img class="icon-img" src="images/icon-comment.png"/>
                <img class="icon-img" src="images/icon-dm.png"/>
            </section>
            <h2 class="post-like">${post.likes} likes</h2>
            <h3 class="comment-post">${post.username} <span class="post-username">${post.comment}</span></h3>
            `
} )

