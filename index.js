const posts = [{
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

let SuperContainer = document.getElementById('superContainer')


for (let i = 0; i < posts.length; i++) {
    SuperContainer.innerHTML +=
        `
<div class="section">
                <ul class="list non-images-super">
                    <li><img src="./${posts[i].avatar}" class="user"></li>
                    <li>
                        <h4 class="name">${posts[i].name}</h4>
                        <p>${posts[i].location}</p>
                    </li>
                </ul>
                <img src="./${posts[i].post}" class="images">
                <ul class="buttons non-images-super icons">
                    <li class='like' id='like_${i}' onclick="likeado(this)"></li>
                    <li class='commentary'></li>
                    <li class='message'></li>
                </ul>
                <p class="non-images-super likes" id='like_${i}s'>${posts[i].likes} likes</p>
                <h4 class="comment non-images-super"><span class="user-cm">${posts[i].username}</span> ${posts[i].comment}</h4>
            </div>
`
}

function likeado(likesote) {
    let arrayLikes = []
    let liki = likesote.id
    arrayLikes = liki.split('_')
    let index = arrayLikes[1]
    let actualike = document.getElementById(`${liki}s`)
        // alert(index)
    if (likesote.classList.contains("liked")) {
        likesote.classList.remove("liked");
        posts[index].likes--
            actualike.innerText = `${posts[index].likes} likes`
    } else {
        likesote.classList.add("liked");
        posts[index].likes++
            actualike.innerText = `${posts[index].likes} likes`
    }
}

let userPic = document.getElementById('github')
userPic.addEventListener('click', function() {
    window.open('https://github.com/Alan77777777', '_blank');
})