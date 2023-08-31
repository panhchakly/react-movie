import './App.css';

const Person = (props) => {
  return (
    <>
      <h4>Name: {props.name}</h4>
      <h4>Gender: {props.gender}</h4>
      <h4>Age: {props.age}</h4>
      <p>................................................</p>
    </>
  );
}

const App = ()=> {
  const name = 'React App';
  const gender = 'male';
  return (
    <div className="App">
      <Person name={'chheng panhchaly'} gender={'male'} age={20}/>
      <Person name='wu lee' gender='male' age={20-2}/>
      <h3>React App { 2 + 2 }</h3>
      <p>{name? name : 'no name'}</p>
      <p>{ gender? 
        (<><h5>{gender}</h5><h6>{gender+' use <></>'}</h6></>) : 
        (<p>{'no gender'}</p>)
      }</p>
    </div>
  );
}

export default App;
