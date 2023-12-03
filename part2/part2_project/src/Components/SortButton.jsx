import { TasteUser1 } from "../util/api";

export default function SortButton() {
  const [tasteButton, setTasteButton] = useState([])

  const sortUserTasteButton = async () => {

    const {data : userTasteButton} = await TasteUser1()
    console.log(userTasteButton)
    setTasteButton(userTasteButton)

  }

  sortUserTasteButton()

  return (
    <ul>
      {?.map(() =>
        <li>
          <button></button>
        </li>
     ) }
    </ul>
  );
}
