import './index.css'

import { Dialog } from './components/ui/dialog'
import EmptyGoals from './components/empty-goals'
import CreateGoals from './components/create-goal'
import Sumary from './components/sumary'

function App() {
  return (
    <div
      className="bg-zinc-900 text-white 
    
h-full
w-full"
    >
      <Dialog>
        <Sumary />
        {/* <EmptyGoals /> */}
        {/* <CreateGoals /> */}
      </Dialog>
    </div>
  )
}

export default App
