import { AttendeeList } from "./components/Attendee-List"
import { Header } from "./components/Header"

interface MeuBotaoProps {
  texto: string
}

function MeuBotao(props: MeuBotaoProps) {
  return <button className="bg-orange-400 h-10 px-3 rounded font-bold">{props.texto}</button>
}

export function App() {  
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  )
}