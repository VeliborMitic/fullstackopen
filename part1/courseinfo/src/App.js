const Header = (props) => {
    return (
        <div>
            <p>
                {props.course}
            </p>
        </div>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>
            {props.part.name} {props.part.exercise}
        </p>
    );
};

const Content = (props) => {
    return (
        <div>
          <Part part ={props.parts[0]} />
          <Part part ={props.parts[1]} />
          <Part part ={props.parts[2]} />
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