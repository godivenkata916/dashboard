// import './App.css';
import ResponsiveDrawer from './components/dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ResponsiveDrawer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
