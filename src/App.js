
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Homepage from './basictemplate';
import Articlepage from './articlepage';
import LoginForm from './Loginform';
import Registration from './Registration';


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route index element = {<Welcome />} />
    <Route path='/home' element = {<Homepage/>}/>
    <Route path='/articles' element = {<Articlepage/>}/>
    <Route path='/login' element = {<LoginForm/>}/>
    <Route path='/register' element = {<Registration/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
