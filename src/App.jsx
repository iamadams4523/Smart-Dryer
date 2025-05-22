import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Logoimg from './assets/bd3e94f4-ec08-4ffc-a805-300fe644b82f 1.png';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
}

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-hero bg-center bg-cover">
      <img className="w-[10rem]" src={Logoimg} alt="Logo" />

      <div className="flex flex-col justify-center items-center mt-[4rem]">
        <h3 className="font-[inconsolata] font-extrabold text-5xl">LOGIN</h3>
        <div className="flex gap-4 items-center mt-[5rem]">
          <label
            className="font-[inconsolata] font-bold text-xl"
            htmlFor="device-id"
          >
            Device ID
          </label>
          <input
            id="device-id"
            className="outline-none w-[20rem] h-[3rem] pl-3 bg-white rounded-[10px]"
            type="text"
          />
        </div>
        <div
          onClick={() => {
            navigate('/dashboard');
          }}
          className="font-[inconsolata] font-bold text-xl text-white px-[2rem] py-[0.6rem] bg-blue-400 mt-7 rounded-[10px] cursor-pointer"
        >
          Submit
        </div>
      </div>
    </div>
  );
};
export default App;
