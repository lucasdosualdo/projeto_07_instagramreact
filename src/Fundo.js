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