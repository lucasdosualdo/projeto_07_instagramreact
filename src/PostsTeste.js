

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


/* 
export default function Posts () {
    return (
        <div class="posts">
          <div class="post">

            <div class="topo">
              <div class="usuario">
                <img src="img/meowed.svg" />
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="img/gato-telefone.svg" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="img/respondeai.svg" />
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
            
          </div>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="img/barked.svg" />
                barked
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="img/dog.svg" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="img/adorable_animals.svg" />
                <div class="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
*/