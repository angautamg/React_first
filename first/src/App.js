import ChipsInput from './component/ChipsInput';
import './App.css';
import LeapYear from './component/leapyear';
import Swaping from './component/swaping';
import Largest from './component/largest';

export default function App() {
  return (
    <div className="App">
      <ChipsInput />
      <LeapYear />
      <Swaping />
      <Largest />
    </div>
  );
}
