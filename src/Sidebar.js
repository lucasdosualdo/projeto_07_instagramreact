import Usuario from './Usuario'
import Sugestoes from './Sugestoes'
import Links from './Links'
import Copyright from './Copyright'

export default function Sidebar () {
  return (
<div class="sidebar">
    <Usuario 
    imgUser = "img/catanacomics.svg" 
    profile ="catanacomics" 
    user = "Catana" 
    />
    <Sugestoes />
    <Links />
    <Copyright />
</div>
)   
}