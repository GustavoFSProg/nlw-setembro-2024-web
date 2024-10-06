import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import CreateGoal from './components/create-goal'
import { UserContextProvider } from './refreshContext'
import Sumary from './components/sumary'

function Routers(){
    return (
        <UserContextProvider>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/create-goal"  element={<CreateGoal />}/>
                <Route path="/summary"  element={<Sumary />}/>
            </Routes>
        </BrowserRouter>
        </UserContextProvider>
    )
}

export default Routers