import PropTypes from 'prop-types'

function Student(props){
  return(
    <div className="student">
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>

  );
}
Student.propTypes = {//a mechanism thatensures that the passed value is of the correct datatype
   name: PropTypes.string,
   age: PropTypes.number,
   isStudent: PropTypes.bool, 
}
Student.defaultProps = {//default values for props in case they arenot passed fron the parent component
  name: "Guest",
  age: 0,
  isStudent :false,
}
export default Student

//the key values in the parent component are saved in props so i call props and the name of the key value