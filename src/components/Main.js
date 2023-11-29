import MainLink from "./MainList";
import '../styles/card.css'

function Main ( {links} ) {
  return (
    links?.map ((item) =>
        <MainLink item={item}/>
      ))
}

export default Main;