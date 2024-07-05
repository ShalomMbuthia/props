import Student from './Student.jsx'
function App(){
  return(
    <>
    <Student name="" age={21} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Emmanuel" age={50} isStudent={false}/>
    <Student name="Joy" age={27} isStudent={true}/>
    <Student/>
    
    </>


  );
}

export default App
//Here,i have saved key values in my parent component which is the APP.jsx which will be shared to the child component which is student.