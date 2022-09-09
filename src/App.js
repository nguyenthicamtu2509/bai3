//two-way binding--ràng buộc hai chiều 
//ứng dụng two-way binding:input,checkbox,radio

import {useState} from 'react'
//const gifts=[
  //'Laptop Dell',
  //'Điện thoại oppo',
  //'CPU RAM 8GB'
//]
const courses=[
  {
    id:1,
    name:'HTML,CSS'
  },
  {
   id:2,
   name:'ReactJS'
  },
  {
    id:3,
    name:'JavaScript'
  }
  
]

function App() {
  
  
  const [job,setJob]=useState('')
  const [jobs,setJobs]=useState(()=>{
    const storage=JSON.parse(localStorage.getItem('jobs'))
    return storage
  })
  //const [checked,setCheck]=useState()
  //const [checked,setCheck]=useState([])
  //console.log(checked)
 
  //const [name,setName]=useState('')
  //const [email,setEmail]=useState('')

 
  //const [gift,setGift]=useState()
  //const randomGift=()=>{
    //const index=Math.floor(Math.random()*gifts.length)
    //setGift( gifts[index]);

  //}
  //const hadleSubmit=()=>{
    //console.log({ids:checked});
    
  //}
  //const hadleCheck=(id)=>{
    //setCheck(prev=>{
      //const isCheck=checked.includes(id)
      //if(isCheck){
       // return checked.filter(item=>item !==id)

      //}else{
        //return [...prev,id]
      //}
    //})

  //}
  const hadleSubmit=()=>{
    setJobs(prev=>{
      const newJobs=[...prev,job]
      const jsonJobs=JSON.stringify(newJobs)
      console.log(jsonJobs)
      localStorage.setItem('jobs',jsonJobs)
      return newJobs
    })
    setJob('')
  }
  return (
    //<div className="App" style={{padding:30}}>
      //<h1>{ gift || 'Chưa có phần thưởng'}</h1>
      //<button onClick={randomGift}>Lấy phần thưởng</button>
     
      //<div className="App" style={{padding:30}}>
      //<input 
      //value={name}
      //onChange={e=>setName(e.target.value)}
      ///>
      //<input 
      //value={email}
      //onChange={e=>setEmail(e.target.value)}
      ///>
      //<button onClick={hadleSubmit}>Submit</button>
      //</div>
     
    //</div>
   //<div style={{padding:20}}>
    //{courses.map(course=>(
      //<div key={course.id}>

        //<input type="radio"
        //checked={checked===course.id}
        //onChange={()=>setCheck(course.id)}
        ///>
        //{course.name}
      //</div>
    //))}
   //<button onClick={hadleSubmit}>Register</button>
   //</div>
   //<div className="App">
    //{courses.map(course=>(
      //<div key={course.id}>
        //<input
        //type="checkbox"
        //checked={checked.includes(course.id)}
        //onChange={()=>hadleCheck(course.id)}
        ///>
        //{course.name}
      //</div>
    //))}
    //<button onClick={hadleSubmit}>Submit</button>

   //</div>
   <div className="App">
    <input value={job} onChange={e=>setJob(e.target.value)} />
    <button onClick={hadleSubmit}>Add</button>
    <ul>
      {jobs.map((job,index)=>(
      <li key={index}>{job}</li>
      ))
}
    </ul>

   </div>
    
  );
}

export default App;
