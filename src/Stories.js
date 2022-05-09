function Story (props) {
    return (
    <div class="story">
            <div class="imagem">
              <img src={props.image} />
            </div>
            <div class="usuario">
              {props.user}
            </div>
          </div>
    )
}

export default function Stories () {
    const stories = [
        {
            image: "img/9gag.svg",
            user: "9gag",
        },
        {
            image:"img/meowed.svg",
            user: "meowed",
        },
        {
            image:"img/barked.svg" ,
            user: "barked",
        },
        {
            image:"img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet",
        },
        {
            image:"img/wawawicomics.svg",
            user: "wawawicomics",
        },
        {
            image:"img/respondeai.svg",
            user: "respondeai",
        },
        {
            image:"img/filomoderna.svg",
            user: "filomoderna",
        },
        {
            image:"img/memeriagourmet.svg",
            user: "memeriagourmet",
        },
    ]
    return ( 
        <div class="stories">
            {stories.map(story => (
            <Story image = {story.image} user = {story.user} />   
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
    
}