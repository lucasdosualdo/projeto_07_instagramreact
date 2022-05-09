import Post from './Post';

export default function Posts () {
    const posts = [
        {
         imgUser: "img/meowed.svg",
         user: "meowed",
         imgContent: "img/gato-telefone.svg",
         likedImg: "img/respondeai.svg",
         likedUser: "respondeai",
         likedQnt: "101.523"
        },
        {
            imgUser: "img/barked.svg",
            user: "barked",
            imgContent: "img/dog.svg",
            likedImg: "img/adorable_animals.svg",
            likedUser: "adorable_animals",
            likedQnt: "99.159"
           }
    ]
    return (
       <div class = "posts">
        {posts.map(post => (
            <Posts
            imgUser = {posts.imgUser}
            user = {posts.user}
            imgContent = {posts.imgContent}
            likedImg = {posts.likedImg}
            likedUser = {posts.likedUser}
            likedQnt = {posts.likedQnt}
            />
        ))}
        </div>
    )
}