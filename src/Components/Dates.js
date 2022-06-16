import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import swal from 'sweetalert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Main from './Main';



/*.......................Master Component Starting..................... */

export default function Dates() {
  
  const [valueOne, setValueOne] = useState(new Date());
  const [valueTwo, setValueTwo] = useState(new Date());
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [week, setWeek] = useState("");
  const[process,setProcess] = useState(false);
  const[currentDate, setCurrentDate] = useState(false);
  const[weekDaysOne, setWeekDaysOne] = useState();
  const[weekDaysTwo, setWeekDaysTwo] = useState();
 const[main, setmain] = useState(false);
  
  
/*---------------------------Operation Function Starting---------------------------- */

var DateDiff = {

    inDays: function(d1, d2) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt((t2-t1)/(24*3600*1000));
},

inWeeks: function(d1, d2) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt((t2-t1)/(24*3600*1000*7));
},

inMonths: function(d1, d2) {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();

    return (d2M+12*d2Y)-(d1M+12*d1Y);
},

inYears: function(d1, d2) {
    return d2.getFullYear()-d1.getFullYear();
}
}


/*---------------------------Operation Function Ending------------------ */



/* -----------------------Button Action Staring--------------------------------------- */

function calculate()
{

  setProcess(true);
  
setTimeout(() => {

  
  if(valueOne && valueTwo)
  {
    
  
  setDay(DateDiff.inDays(valueOne, valueTwo));
  setWeek(DateDiff.inWeeks(valueOne, valueTwo));
  setMonth(DateDiff.inMonths(valueOne, valueTwo));
  setYear(DateDiff.inYears(valueOne, valueTwo));
  
 


  setProcess(false);
  setCurrentDate(true);
  setmain(true);
  
  

const weekDaysArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var getDayValOne = valueOne.getDay();
var getDayValTwo = valueTwo.getDay();
console.warn(weekDaysArray[getDayValOne])
setWeekDaysOne(weekDaysArray[getDayValOne]);
setWeekDaysTwo(weekDaysArray[getDayValTwo]);



}
  else{
    swal("Fill the Date!", "You clicked the button!", "error");
    setProcess(false);
    setmain(false);
  }

}, 1000);

}

/* -----------------------Button Action Ending--------------------------------------- */


  return (
      <>

<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 'auto',
          textAlign:'center',
        },
      }}
    >
      
      <Paper elevation={3}>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="From Date"
        value={valueOne}
        onChange={(e)=>{ setValueOne(e)}}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DatePicker
         label="To Date"
         value={valueTwo}
         onChange={(e)=>{setValueTwo(e)
                        setCurrentDate(e)}}
         renderInput={(params) => <TextField {...params} />}
       />
     </LocalizationProvider>

 
     <Stack direction="row" spacing={2} mt={5} mb={5}>
      <Button variant="contained" endIcon={<SendIcon />} p={5} onClick={calculate} style={{justifyContent: center;}}>
      Calculate
      </Button>
    </Stack>




  
<div style={{textAlign:"center"}}>

{process?<Box sx={{ display: 'flex' }}><CircularProgress /></Box> : console.log("yup")}
{main?<Main day={day} month={month} year={year} week={week} currentDate={currentDate} valueOne={valueOne} valueTwo={valueTwo} weekDaysOne={weekDaysOne} weekDaysTwo={weekDaysTwo}/>:console.log("main")}
</div>

       </Paper>
    </Box>


</>
  );
}
