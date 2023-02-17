const Header = (props) => {
    return (
        <div>
            <p>
                {props.course}
            </p>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                {props.parts[0].name} {props.parts[0].exercise}<br/>
                {props.parts[1].name} {props.parts[1].exercise}<br/>
                {props.parts[2].name} {props.parts[2].exercise}<br/>
            </p>
        </div>
    )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((total, part) => total + part.exercise, 0);
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      {name: 'Fundamentals of React', exercise: 10},
      {name: 'Using props to pass data', exercise: 7},
      {name: 'State of a component', exercise: 14},
  ]

  return (
    <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
    </div>
  )
}

export default App