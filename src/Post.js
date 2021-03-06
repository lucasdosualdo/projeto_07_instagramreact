import React from 'react';

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


function Conteudo ({imgContent, likedTesteConteudo}) {
  return (
      <div class = "conteudo">
      <img 
      src={imgContent}
      onClick = {likedTesteConteudo}/>
      </div>
  )
}



function Fundo ({likedImg, likedUser, likedQnt, likedTesteFundo, like}) {

    /*const [like, setLike] = React.useState(props.liked);
    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    console.log(like);*/




    return (
        <div class="fundo">
        <div class="acoes">
            <div>

        {like ?
       /* <ion-icon name="heart" style = {{color:'red'}} onClick = {() => setLike(!like)}></ion-icon> :
        <ion-icon name='heart-outline' onClick = {() => setLike(!like)}></ion-icon>*/
        <ion-icon name="heart" style = {{color:'red'}} onClick = {likedTesteFundo}></ion-icon> :
        <ion-icon name='heart-outline' onClick = {likedTesteFundo}></ion-icon>
      }
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src= {likedImg}/>
          <div class="texto">
            Curtido por <strong>{likedUser}</strong> e <strong>outras {likedQnt} pessoas</strong>
          </div>
        </div>
      </div>
    );
}





export default function Post (props) {

  const [like, setLike] = React.useState(props.liked);
    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    console.log(like);

    function likedTesteFundo () {
      setLike(!like);
    }
    function likedTesteConteudo () {
      setLike(true);
    }
    
    return (
        <div class = "post" >

        <Topo imgUser = {props.imgUser} user = {props.user} />
        <Conteudo imgContent = {imgContent} like = {like} likedTesteConteudo = {likedTesteConteudo}/>
        <Fundo 
        likedImg = {likedImg}
        likedUser = {likedUser}
        likedQnt = {likedQnt}
        like = {like}
        likedTesteFundo = {likedTesteFundo}
        />
        </div>
    )
    
}