import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Main({day,week,month,year,currentDate,valueOne,valueTwo,weekDaysOne,weekDaysTwo}){
 

    return (
      <>
      <div style={{margin:"20px 0 0 0", padding: "10px 0 30px 0",backgroundColor:"#001e3c",color:"#fff",width:"100%"}}>
      <h3>Result</h3>
    
    <hr/>

      <div className="row">
        <div className="col-6">

       
   {currentDate && valueOne ? `From Date : ${valueOne.toLocaleDateString()}, ${weekDaysOne}`: console.log("yo")}<br/>
   {currentDate && valueTwo ? `To Date : ${valueTwo.toLocaleDateString()}, ${weekDaysTwo}`: console.log("yo")}
        </div>

        <div className="col-6">
        Days: {day}<br/>
        Weeks: {week} <br/>
        Months: {month} <br/>
        Years: {year}<br/>
     
 
        </div>

        </div>

</div>
      </>
    );
  }
  

export default Main;