import React, { useRef } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import DiscriptionPage from './components/DiscriptionPage';
import SearchAddMeasurement from './components/SearchAddMeasurement';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const App = () => {
  const notificationRef = useRef();
  return (
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<DiscriptionPage />}></Route>
  <Route exact path='/measurements' element={<SearchAddMeasurement />}></Route>
</Routes>
<NotificationContainer ref={notificationRef} />
</BrowserRouter>
    )
}

export default App;
