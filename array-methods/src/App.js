import logo from './logo.svg';
import './App.css';
import MarksForm from './classes/MarksForm';

function App() {
  let Marks = new MarksForm();
  Marks.englishMarks = 90;
  Marks.teluguMarks =  85;
  Marks.hindiMarks = 95;
  Marks.mathsMarks = 70;
  Marks.scienceMarks = 85;
  Marks.socialMarks = 98;
  Marks.calculateMarks();

  console.log(MarksForm.passMarks);
  console.log(MarksForm.tenthMarks());

  let cskTeam = ["MSDhoni","Ruturaj Gaikwad","Devon Conway","Rachin Ravindra","Ravindra Jadeja","Shivam Dube","Matheesha Pathirana","Mukesh Chowdary","Ravichandran Ashwin","Sam Curran","Shaik Rasheed","Rahul Tripathi"]
  return (
    <div className="App">
      <h1>Array Methods</h1>
      <hr></hr>
      <button type="button" onClick={()=>{
        console.log(cskTeam.length);
        // console.log(cskTeam[0]);
        // console.log(cskTeam[1]);
        // console.log(cskTeam[2]);
        // console.log(cskTeam[3]);
        // console.log(cskTeam[4]);
        // console.log(cskTeam[5]);
        // console.log(cskTeam[6]);
        // console.log(cskTeam[7]);
        // console.log(cskTeam[8]);
        // console.log(cskTeam[9]);
        // console.log(cskTeam[10]);
        // console.log(cskTeam[11]);
        for(let i=0;i<cskTeam.length;i++){
          console.log(cskTeam[i]);
        }
      }}>Array Length</button>
      <button type="button" 
      onClick={()=>{
        console.log(cskTeam[7]);
        console.log(cskTeam.at(7));
      }}>Array at</button>
      <button type="button" 
      onClick={()=>{
        console.log(cskTeam);
        console.log(cskTeam.toString());
        console.log(cskTeam.join("---"));
      }}>Array toString/join</button>
      <button type="button" 
      onClick={()=>{
        console.log(cskTeam.push("Chennai Super Kings"));
        console.log(cskTeam);
      }}>Array Push</button>
      <button type="button" 
      onClick={()=>{
        console.log(cskTeam.pop());
      }}>Array Pop</button>
      <button type="button" 
      onClick={()=>{
        console.log(cskTeam.unshift("Captain"));
        console.log(cskTeam);
      }}>Array Unshift</button>
      <button type="button" 
      onClick={()=>{
        console.log(cskTeam.shift());
        console.log(cskTeam);
      }}>Array Shift</button>
      <button type="button" 
      onClick={()=>{
        console.log(cskTeam.splice(0,1,"Deepak Chahar","Akshar Patel"));
        console.log(cskTeam);
      }}>Array Splice</button>
    </div>
  );
}

export default App;
