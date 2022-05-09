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
            <Post
            imgUser = {post.imgUser}
            user = {post.user}
            imgContent = {post.imgContent}
            likedImg = {post.likedImg}
            likedUser = {post.likedUser}
            likedQnt = {post.likedQnt}
            />
        ))}
        </div>
    )
}