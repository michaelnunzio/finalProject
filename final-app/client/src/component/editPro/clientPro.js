import React, {Component} from "react";
import NavBar from '../nav/navBar'
import axios from 'axios';


export default class candPro extends Component{

    state={
        email: '',
        // title: '',
        // desc: '',
        // techs: '',
        // gitPort: '',
        // lastTwo: '',
        readOnly: true
    }


    componentWillMount(){

        axios.get('/auth/user').then((data)=>{
          this.setState({
              email: data.data.user.email,
              comp: data.data.user.company,
              ind: data.data.user.industry,
          })
            // console.log('from state Candy Name22: ', this.state.name)
            console.log('email edit page: ', this.state.email)
            console.log(this.state.ind)
        })
      }

      readFalse= () => {
          if(this.state.readOnly=== false){
          this.setState({
              readOnly: true
          })
        }else {
            this.setState({
                readOnly: false
            })
        }
          console.log(this.state.readOnly)
      }


    render(){
        return(
        <React.Fragment>
            <NavBar/>


         <div className="container"> 
                <div className='row'>
                     <h2 className='col l4 offset-l4 editProH'>Company Info</h2> 
                </div>

                <div className='row'>
                <button className="col l6 offset-l3 btn btn-sm btn-primary btn-block editBtnn" type="edit" onClick={this.readFalse}>EDIT</button>
                </div>


                <form className="form-signin" method="post" action="/allemploy">
                        
                        
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input readOnly={this.state.readOnly} type="email" name="Email" id="inputEmail" className="form-control" defaultValue={this.state.email} />
                        
                        <label htmlFor="inputCompany" className="sr-only">Company Name</label>
                        <input readOnly={this.state.readOnly} type="text" name="Company" id="inputCompany" className="form-control" defaultValue={this.state.comp} />

                        <label htmlFor="inputIndustry" className="sr-only">Industry</label>
                        <input readOnly={this.state.readOnly} type="text" name="Industry" id="inputIndustry" className="form-control" defaultValue={this.state.ind} />

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
                    </form>



        </div> 


        </React.Fragment>
        )
    }
}

