import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Hotel from './Screens/Hotel/Hotel';
import List from './Screens/List/List';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
