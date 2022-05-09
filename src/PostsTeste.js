const posts = [
    {
        imgUser:
        user:
        topAction:

        content:

        actions:
        actions:
        actions:
        actions:

        liked:
        text:

    },
]

function Topo (props) {
    return (
        <div class="topo">
              <div class="usuario">
                <img src={props.imgUser} />
                {props.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
         </div>
    )
}
function Conteudo (props) {
    return (
        <img src={props.imgContent}/>
    )
}
function Fundo (props) {
    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    
    return (
        <div class="fundo">
        <div class="acoes">
        {icons.map (icon =>(
        <ion-icon name={icon}></ion-icon>
        ))}
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src= {props.likedImg}/>
          <div class="texto">
            Curtido por <strong>{props.likedUser}</strong> e <strong>outras {props.likedQnt} pessoas</strong>
          </div>
        </div>
      </div>
    )
}

function Post (props) {
    <div class = "post" >
    return (

        <Topo imgUser = {props.imgUser} user = {props.user} />
        <Conteudo imgContent = {props.imgContent} />
        <Fundo 
        likedImg = {props.likedImg}
        likedUser = {props.likedUser}
        likedQnt = {props.likedQnt}
        />
    )
    </div>
}

function Posts () {
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

