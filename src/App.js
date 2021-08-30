import logo from './logo.svg';
import './App.css';

function WriteLink(props) {
  return (
    <div className="WriteLink">
      <li> <a href={props.location}> {props.name} </a> <span class="material-icons">link</span> </li>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <h2 id="title">Tandon Syllabi</h2>
      <h2 id="courses">Courses:</h2>
      <ul>
        <WriteLink location="/syllabi/chemistry/CM-UY - 1003.pdf" name="General Chemistry for Engineers"> </WriteLink>
        <WriteLink location="/syllabi/cs/CS-UY - 1122.pdf" name="Introduction to Computer Science"> </WriteLink> 
        <WriteLink location="/syllabi/cs/CS-UY - 1134.pdf" name="Data Structures and Algorithms"> </WriteLink> 
        <WriteLink location="/syllabi/cs/CS-UY - 2124.pdf" name="Object Oriented Programming"> </WriteLink> 
        <WriteLink location="https://sarathermer.com/eg-1001-syllabus" name="Engineering and Technology Forum (EG-1001)"> </WriteLink> 
        <WriteLink location="/syllabi/engineering/EG-UY - 1003.pdf" name="Introduction to Engineering and Design (EG-1003)"> </WriteLink> 
        <WriteLink location="/syllabi/expos/EXPOS-UA - 1.pdf" name="Writing the Essay"> </WriteLink> 
        <WriteLink location="/syllabi/expos/EXPOS-UA - 24.pdf" name="Advanced Writing for Engineers: Entrepreneurship"> </WriteLink> 
        <WriteLink location="/syllabi/math/MA-UY - 2034.pdf" name="Linear Algebra and Differential Equations"> </WriteLink> 
        <WriteLink location="/syllabi/math/MA-UY - 2214.pdf" name="Data Analysis"> </WriteLink> 
        <WriteLink location="/syllabi/math/MA-UY - 2314.pdf" name="Discrete Mathematics"> </WriteLink> 
        <WriteLink location="/syllabi/physics/PH-UY - 1013.pdf" name="Mechanics"> </WriteLink> 
      </ul>
    </div>
  );
}



export default App;
