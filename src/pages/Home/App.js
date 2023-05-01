import logo from '../../assets/images/logo.svg';
import './App.css';
import Button from '../../components/Button';

function App() {
  const onClickButton = () => alert('cliquei no botão!')


  return (
    <Button onClickButton={onClickButton}/>
  );
}

export default App;
