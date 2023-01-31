import { useEffect, useState } from 'react';
import { Check, Checks, CircleX, Plus, TextPlus, TrashX } from 'tabler-icons-react';
import Button from './Button';
import Card from './Card';
import PlaceContentCenter from './PlaceContentCenter';

export default function Todo() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState('No task to do');

  function empytList() {
    localStorage.setItem('todo-list', JSON.stringify('No task to do'));
  }

  useEffect(() => {
    if (localStorage.getItem('todo-list') == null) {
      empytList();
    }

    if (todoList == 'No task to do') {
      setTodoList(JSON.parse(localStorage.getItem('todo-list')));
    }
  }, []);

  function ShowInputButton() {
    return (
      <Button onClick={setShowInput.bind(null, true)} className="bg-white p-5 ">
        <TextPlus />
        new
      </Button>
    );
  }

  function setLSItem(list) {
    localStorage.setItem('todo-list', JSON.stringify(list));
  }

  function submit(e) {
    e.preventDefault();

    if (inputValue == '') {
      setShowInput(false);
      return;
    }
    let set = { id: Math.floor(Math.random() * Date.now()), todo: inputValue, status: 'uncompleted' };

    if (typeof todoList == 'string') {
      setTodoList(() => {
        const newTodo = [set];
        setLSItem(newTodo);
        return newTodo;
      });
    } else {
      setTodoList((prevList) => {
        let list = [...prevList, set];
        setLSItem(list);
        return list;
      });
    }
    setShowInput(false);
    setInputValue('');
  }

  function removeTodo(id) {
    setTodoList((prevList) => {
      const newList = prevList.filter((list) => list.id != id);

      if (newList.length == 0) {
        setLSItem('No task to do');
        return 'No task to do';
      } else {
        setLSItem(newList);
        return newList;
      }
    });
  }

  function checkTodo(id) {
    setTodoList((prevList) => {
      const newList = prevList.map((list) => {
        if (list.id == id) {
          return {
            ...list,
            status: list.status == 'uncompleted' ? 'completed' : 'uncompleted',
          };
        }

        return list;
      });

      setLSItem(newList);
      return newList;
    });
  }

  function getList() {
    let list = todoList;
    if (list == 'No task to do') {
      return <h2 className="text-white/50 text-xl">{list}</h2>;
    } else {
      list = list.map((target) => {
        const todo = target.status == 'completed' ? <s>{target.todo}</s> : target.todo;
        return (
          <li key={target.id} className={`${target.status == 'completed' ? 'text-white/75 border-white/75' : 'text-slate-700 border-slate-700/50'} flex justify-between gap-5 items-center border-b-2 mt-4 py-1`}>
            <span className="max-w-sm">{todo}</span>
            <div className="flex gap-2">
              <button type="button" onClick={checkTodo.bind(null, target.id)}>
                {target.status == 'completed' ? <Checks /> : <Check />}
              </button>
              <button type="button" onClick={removeTodo.bind(null, target.id)}>
                <CircleX />
              </button>
            </div>
          </li>
        );
      });

      return <ul className="text-xl">{list}</ul>;
    }
  }

  function InputTodo() {
    return (
      <div className="text-right transition-transform hover:-translate-y-2 duration-500 text-slate-700 ">
        <button type="button" className="text-white w-fit" onClick={setShowInput.bind(null, false)}>
          <CircleX />
        </button>
        <Card>
          <Card.body className={'pt-5'}>
            <form onSubmit={submit}>
              <div className={'flex items-center gap-3'}>
                <input
                  type="text"
                  className="bg-transparent focus:ring-0 border-0 focus:border-white/50 border-b-2 border-white/50 w-full"
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                  value={inputValue}
                  placeholder="new task ..."
                />
                <button type="submit">
                  <Plus />
                </button>
              </div>
            </form>
          </Card.body>
        </Card>
      </div>
    );
  }

  return (
    <PlaceContentCenter>
      {showInput || ShowInputButton()}
      {!showInput || InputTodo()}
      <Card className={'transition-transform hover:-translate-y-2 duration-500'}>
        <Card.title className={'font-medium text-white/75'}>Todo List . . .</Card.title>
        <Card.body>{getList()}</Card.body>
      </Card>
    </PlaceContentCenter>
  );
}
