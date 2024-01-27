
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import DiscriptionPage from './components/DiscriptionPage';
import SearchAddMeasurement from './components/SearchAddMeasurement';
const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<DiscriptionPage />}></Route>
  <Route exact path='/measurements' element={<SearchAddMeasurement />}></Route>

</Routes>
</BrowserRouter>
    )
}

export default App;
