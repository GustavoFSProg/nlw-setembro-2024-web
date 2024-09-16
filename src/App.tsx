import './index.css'

import { Dialog } from './components/ui/dialog'
import EmptyGoals from './components/empty-goals'
import CreateGoals from './components/create-goal'
import Sumary from './components/sumary'

function App() {
  return (
    <>
      <Dialog>
        <Sumary />
        <EmptyGoals />
        {/* <CreateGoals /> */}
      </Dialog>
    </>
  )
}

export default App
