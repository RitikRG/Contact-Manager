import React, {state} from 'react'


class AddContact extends React.Component{
  state={
    name:"",
    email:"",
  };

  add=(e)=>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email===""){
      alert("All the feilds are mandatory!")
      return
    }else{
      this.props.addContactHandler(this.state);
      this.setState({name:""});
      this.setState({email:""});
    }
  }
  render(){
    

    return(
      <div className='bg-neutral-200 w-[90vw] md:w-[60vw] rounded-lg shadow-lg mx-auto mt-4'>
        <p className='text-3xl text-center pt-4 font-semibold'>Add Contact</p>
        <form className='w-[90%] mx-auto py-4  grid grid-cols-1 gap-y-4' onSubmit={this.add}>
          <input type="text" placeholder="Name" className='w-[90%] mx-auto p-2 rounded-lg text-lg' value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}></input>
          <input type="text" placeholder="Email" className='w-[90%] mx-auto p-2 rounded-lg text-lg' value={this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}}></input>
          <button className='bg-blue-400 text-white px-4 py-2 w-[40%] mx-auto rounded-lg text-lg font-semibold '>Add</button>
        </form>

      </div>
    );
  }
}

export default AddContact
