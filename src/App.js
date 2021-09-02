import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'
import imgA from './images/001.png';

function App() {
  return (
    <div>
<p>아래 사진이 뭔가욤?</p>
    <div>
<img
   src={ imgA }
   width='400'
   height='300'
   alt='testA' />
</div>
<Button primary> 곰 </Button>
<Button primary> 고양이 </Button>
<Button primary> 강아지 </Button>
<Button primary> 고래 </Button>
</div>
  );
}

export default App;
