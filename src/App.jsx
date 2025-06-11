import './App.css'
import {Counter} from './components/Counter';
import {ToggleButton} from './components/ToggleButton';
import {NameFor} from './components/NameFor';
import { CounterWithEffect } from './components/CounterWithEffect';

function App() {

  return (
   <main className=' flex flex-col items-center justify-center py-5 gap-2.5'>
    <Counter />
    <ToggleButton />
    <NameFor />
    <CounterWithEffect />
   </main>
  )
}

export default App
