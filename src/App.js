import './App.css';
import LotteryComponent from './LotteryComponent';



function App() {
  return (
    <div className="App">
      <LotteryComponent/>
      <LotteryComponent title={'Mini One'} numBalls={4} maxNum={20} />

    </div>
  );
}

export default App;
