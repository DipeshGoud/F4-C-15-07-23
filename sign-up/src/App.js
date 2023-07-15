import SignUp from './components/SignUp';
import img from './res/img.png';

function App() {
  return (
    <div id='container'>
      <img src={img} className='img'></img>
      <h1 className='title'>Find 3D Objects, Mockups and Ilustration here</h1>
      <SignUp />
    </div>
  )
}

export default App;
