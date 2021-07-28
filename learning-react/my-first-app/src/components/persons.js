
const Persons = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        <button onClick={props.greeting}>say hello</button>
      </div>
    )
  }
  export default Persons;