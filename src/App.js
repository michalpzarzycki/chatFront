import './App.css';
import { Button } from '@material-ui/core';
import SignInSide from './components/SignInSide'
import SignUp from './components/SignUp';

function App() {
  return (true ? <SignUp /> : <SignInSide />);
}

export default App;
