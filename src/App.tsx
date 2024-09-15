import './index.css'
import logo from './assets/in-orbit-logo.svg'
import start from './assets/lets-start.svg'

function App() {
  return (
    <>
      <div className=" bg-zinc-800 flex flex-col h-screen items-center justify-center gap-8">
        <img src={logo} width="115" height="16" alt="logo" />
        <img
          src={start}
          className="bg-zinc-900"
          width="320"
          height="320"
          alt="lstartogo"
        />
        {/* <h1 className="p-10 bg-zinc-600 text-slate-100 text-2xl">OLÁAAA!!</h1> */}
      </div>
    </>
  )
}

export default App
