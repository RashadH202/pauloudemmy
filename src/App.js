import logo from './logo.svg';
import './App.css';
import { DataStore } from 'aws-amplify/datastore';
import { Todo } from './models';




function App() {
async function addTodo(){
  await DataStore.save(
    new Todo({
		"name": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet"
	})
);
}

async function showTodo(){
  const models = await DataStore.query(Todo);
console.log(models);
}

async function update(){
  const original = await DataStore.query(Todo, "cd296546-4ef2-4635-9546-03b508c75631")

 await DataStore.save(Todo.copyOf(original, item => {
  item.name=`title ${date.now()}`
}));

async function deleteTodo() {
  const modelToDelete = await DataStore.query(Todo, "cd296546-4ef2-4635-9546-03b508c75631");
DataStore.delete(modelToDelete);
}



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addTodo}>add</button>
        <button onClick={showTodo}>showTodo</button>
        <button onClick={update}>update</button>
        <button onClick={deleteTodo}>delete</button>
      </header>
    </div>
  );
}

export default App;
