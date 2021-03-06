import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  const partContent = props.parts.map(part => <p> {part.name + ': ' + part.exercises} </p>);
  return (
    <div>{partContent}</div>
  )
}

const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <div>
      {exercises.reduce(reducer)}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))