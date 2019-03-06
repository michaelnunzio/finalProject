import React, {Component} from "react";
import NavBar from '../nav/navBar'
import axios from 'axios';
import './editPro.css'

export default class candPro extends Component{

    state={
        email: '',
        title: '',
        desc: '',
        techs: '',
        gitPort: '',
        lastTwo: '',
        readOnly: true
    }


    componentWillMount(){

        axios.get('/auth/user').then((data)=>{
          this.setState({
              email: data.data.user.email,
              title: data.data.user.title,
              desc: data.data.user.desc,
              tech: data.data.user.tech,
              gitPort: data.data.user.git,

          })
            // console.log('from state Candy Name22: ', this.state.name)
            console.log('email edit page: ', this.state.email)
            console.log(this.state.desc)
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
        <div className='row newNn'>
                <NavBar candidate={false}/>
        </div>



         <div className="container"> 
                <div className='row'>
                     <h2 className='col l6 offset-l3 editProH'>Personal Info</h2> 
                </div>
                <div className='row'>
                <button className="col l6 offset-l3 btn btn-sm btn-primary btn-block editBtnn" type="edit" onClick={this.readFalse}>EDIT</button>
                </div>
            <form className="form-signin" method="post" action="/allcands">
            
                <label htmlFor="inputEmail" className="sr-only">{this.state.email}</label>
                <input readOnly={this.state.readOnly} placeholder="Email" type="email" name="Email" id="inputEmail" className="form-control" defaultValue={this.state.email} />
               
                <label htmlFor="inputTitle" className="sr-only">{this.state.title}</label>
                <input readOnly={this.state.readOnly} type="text" placeholder="Title" name="Title" id="inputTitle" className="form-control" defaultValue={this.state.title} />
                
                <label htmlFor="inputDescription" className="sr-only">{this.state.desc} </label>
                <input readOnly={this.state.readOnly} type="text" placeholder='Description' name="Description" id="inputDescription" className="form-control" defaultValue={this.state.desc} />
                
                <label htmlFor="inputTechnologies" className="sr-only">{this.state.tech}</label>
                <input readOnly={this.state.readOnly} type="text" placeholder='Technologies' name="Technologies" id="inputTechnologies" className="form-control" defaultValue={this.state.tech} />
                
                <label htmlFor="inputGithub" className="sr-only">{this.state.gitPort}</label>
                <input readOnly={this.state.readOnly} type="text" placeholder='Github Link' name="Github" id="inputGithub" className="form-control" defaultValue={this.state.gitPort} autofocus/>
               
                <label htmlFor="inputProject" className="sr-only">Last 2 Employers or Favorite Projects</label>
                <input readOnly={this.state.readOnly} type="text" placeholder='Last 2 Employers or Projects' name="Project" id="inputProject" className="form-control" autofocus/>
               
                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>

        </div> 


        </React.Fragment>
        )
    }
}

