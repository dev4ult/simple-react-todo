import { Check, Checks, TextPlus, TrashX } from 'tabler-icons-react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div className="font-poppins  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col gap-5 justify-center items-center">
      <Button className="rounded-ld bg-white p-5 transition-all hover:-translate-y-1">
        <TextPlus />
        new
      </Button>
      <Card>
        <Card.title className={'font-semibold text-slate-700'}>Todo List . . .</Card.title>
        <Card.body>
          <ul className="text-2xl text-slate-700 flex flex-col gap-2">
            <li className="flex justify-between gap-5 items-center text-white">
              <span>
                <s>Glashmorphism</s>
              </span>
              <div className="flex gap-2">
                <button type="button">
                  <Checks />
                </button>
                <button type="button">
                  <TrashX />
                </button>
              </div>
            </li>
            <li className="flex justify-between gap-5 items-center">
              <span>Functionality</span>
              <div className="flex gap-2">
                <button type="button">
                  <Check />
                </button>
                <button type="button">
                  <TrashX />
                </button>
              </div>
            </li>
          </ul>
        </Card.body>
      </Card>
    </div>
  );
}

export default App;
