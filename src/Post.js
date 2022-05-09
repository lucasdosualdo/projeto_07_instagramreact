/*import Topo from './Topo';
import Conteudo from './Conteudo';
import Fundo from './Fundo';*/

export default function Topo (props) {
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

export default function Conteudo (props) {
    return (
        <img src={props.imgContent}/>
    )
}

export default function Fundo (props) {
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

export default function Post (props) {
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