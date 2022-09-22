const mainWrapper = document.getElementById("main-wrapper")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    }
]

let postEl = ''

for ( let i = 0; i < posts.length; i++) {

    postEl += `
        <div class="post-container"> 
            <section class="user-info-section">
                <div class="poster-avatar">
                    <img
                        src="${posts[i].avatar}"
                        alt="Avatar of ${posts[i].name}"
                        class="poster-avatar-img">
                </div>
                <div>
                    <p class="name">${posts[i].name}</p>
                    <p>${posts[i].location}</p>
                </div>
            </section>

            <section id="post-section-img-${i}" ondblclick="increaseLike${i}()" class="post-section">
                <img
                    src="${posts[i].post}" 
                    alt="Portrait of ${posts[i].name}">
            </section>

            <section class="post-info-section">
                <div class="post-react-btns">
                    <img
                        src="images/icon-heart.png" 
                        alt="Black-outlined heart shape"
                        class="react-btn"
                        ondblclick="increaseLike${i}()">
                    <img
                        src="images/icon-comment.png" 
                        alt="Black-outline comment icon"
                        class="react-btn">
                    <img
                        src="images/icon-dm.png" 
                        alt="Black-outlined direct message icon"
                        class="react-btn">
                </div>
                <p class="likes">
                    <span id='like-counter-${i}'>
                        ${posts[i].likes}
                    </span>
                    likes
                </p>
                <p class="comment">
                    <span class="username">${posts[i].username}</span>
                    ${posts[i].comment}
                </p>
            </section>
        </div>
    `
}

mainWrapper.innerHTML = postEl

function increaseLike0() {
    posts[0].likes++
    const likeCounter0 = document.getElementById('like-counter-0')
    likeCounter0.innerHTML = posts[0].likes
}

function increaseLike1() {
    posts[1].likes++
    const likeCounter1 = document.getElementById('like-counter-1')
    likeCounter1.innerHTML = posts[1].likes
}
function increaseLike2() {
    posts[2].likes++
    const likeCounter2 = document.getElementById('like-counter-2')
    likeCounter2.innerHTML = posts[2].likes 
}
