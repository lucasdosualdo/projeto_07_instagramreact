export default function Usuario (props) {
    return (
        <div class="usuario">
        <img src={props.imgUser} />
        <div class="texto">
          <strong>{props.profile}</strong>
          {props.user}
        </div>
      </div>
    )
  }