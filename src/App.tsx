import './index.css'

import { Dialog } from './components/ui/dialog'
import Sumary from './components/sumary'
import EmptyGoals from './components/empty-goals'

function App() {
  return (
    <>
      <Dialog>
        <Sumary />
        {/* <EmptyGoals /> */}
        {/* <CreateGoals /> */}
      </Dialog>
    </>
  )
}

export default App
