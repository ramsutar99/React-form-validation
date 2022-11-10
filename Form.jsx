import * as React from 'react';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      email: '',
      nameError : '',
      emailError:''
    };
  }

  submit() {
    console.log(this.state)
    console.log(this.state.user)
    console.log(this.state.email)
    if(this.valid()){
      alert('form has been submitted')
    }
  }

  valid(){
    if(this.state.user.includes('@')){
      this.setState({nameError:'Invalid name'})
    }
  }


  render() {
    return (
      <div>
        <form action="">
          <h1>Form validation</h1>
          <input
            type="text"
            name="user"
            onChange={(e) => {
              this.setState({ user: e.target.value });
              this.valid()
            }}
            placeholder="name"
            autoComplete='off'
          />

          <p>{this.state.nameError}</p>

          <input
            type="email"
            name="email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
              this.valid()
            }}
            placeholder="email"
          />
          <p>{this.state.emailError}</p>
          <br />
          <br />
          <button 
          type="submit"
          onClick={()=>{this.submit()}}
          >Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
