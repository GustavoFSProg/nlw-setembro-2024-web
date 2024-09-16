import './index.css'

import { Dialog } from './components/ui/dialog'
import Sumary from './components/sumary'

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
