import React,{useEffect, useState} from 'react';
import axios from 'axios';

const RegistrationForm=()=> {
  const [data,setData]=useState([]);
  const [inputValue,setInputValue]=useState({
    name:'',
    email:'',
    address:'',
    bithdate:'',
    role:''
  });
  const [flag,setFlag]=useState(false);
  const changeHandle=(event)=>{
   setInputValue({...inputValue,[event.target.name]:event.target.value});
   console.log("data from changeHandle",inputValue);
  }
  const clickHandle=()=>{
    axios.post("http://localhost:8000/post",inputValue).then(res=>{
      console.log('value from axios',inputValue);
      alert('Data is Saved.');
      setFlag(!flag)
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    
    axios.get("http://localhost:8000").then(res=>{
       setData(res.data);
       console.log('setState from useEffect',data);
    }).catch(err=>{
      console.log(err);
    })
  },[flag])
  

    return (
    <div className=" container">
     <div className='col-md-8 offset-3'>
      <h3>Registartion Form</h3>
      <hr/>
      <div className="mb-3">
    <label  className="form-label">Full Name :</label>
    <input type="text" className="form-control" onChange={changeHandle} name='name' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email :</label>
    <input type="email" className="form-control" onChange={changeHandle} name='email' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Address :</label>
    <input type="text" className="form-control" onChange={changeHandle} name='address' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Date of Birth :</label>
    <input type="date" className="form-control" onChange={changeHandle} name='bithdate' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Role in Company :</label>
    <select class="form-select" aria-label="Disabled select example" name='role' onChange={changeHandle} >
  <option selected >Open this select menu</option>
  <option value="Entern">Entern</option>
  <option value="Jr. Developer">Jr. Developer</option>
  <option value="Sr. Developer">Sr. Developer</option>
  <option value="Manager">Manager</option>
  <option value="HR">HR</option>
  <option value="Tester">Tester</option>
</select>
  </div>

  
  <button type="submit" className="btn btn-primary" onClick={clickHandle}>Submit</button>
     </div>

     <hr/>
     <hr/>

     <h4>Data from Server </h4>
    <hr/>
      <table className="table table-striped">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Role in Company</th>
    </tr>
  </thead>
  <tbody>
    {
     data.map((ele,id)=>(

    <tr key={id} >
        <td>{id+1}</td>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td>{ele.address}</td>
      <td>{ele.bithdate}</td>
      <td>{ele.role}</td>
    </tr>
     ))
  }
  </tbody>
</table>
     </div>

  );
}

export default RegistrationForm;
