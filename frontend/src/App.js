import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import './styles/common.css'
import CustomerPage from './pages/CustomerPage';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <div className=' custom-header p-3' style={{ height: '20%' }}>
        <div className='d-flex flex-column justify-content-center align-items-center title' style={{ height: '100%' }}>
          <h1>NAWANJANA INTERNATIONAL</h1>
          <h1>PRIVATE LIMITED</h1>
        </div>

      </div>
        <div className='row' style={{ height: '80%',margin:'0%' }}>

          <Router >
            <NavBar />
            <div className="col-lg-10" style={{margin:'0%',padding:'0%'}}>

              <Routes>
                <Route exact path='/customer' element={<CustomerPage />} />
                {/* <Route exact path='/login' element={<LoginPage />} /> */}
              </Routes>
            </div>
          </Router>
        </div>
      </div>
  );
}

export default App;
