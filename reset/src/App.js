import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/reset-password' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
