import React, {Component} from "react";
import NavBar from '../nav/navBar'
import axios from 'axios';
import EditButton from 'react-edit-button'


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
            <NavBar/>

        <br></br>
        <br></br>
        <br></br>
         <div className="container"> 
            <div className='row'>
                <h2 className='col l4 editProCan' class="left-align">Personal Info</h2> 
        </div>

                <p class="right-align">
                        <button className="btn btn-lg btn-primary btn-block"  type="edit" onClick={this.readFalse}>EDIT</button>
                </p>  


            <form className="form-signin" method="post" action="/allcands">
            
                <label htmlFor="inputEmail" className="sr-only">{this.state.email}</label> Email:
                <input readOnly={this.state.readOnly} type="email" name="Email" id="inputEmail" className="form-control" defaultValue={this.state.email} />
               
                <label htmlFor="inputTitle" className="sr-only">{this.state.title}</label> Title:
                <input readOnly={this.state.readOnly} type="text" name="Title" id="inputTitle" className="form-control" defaultValue={this.state.title} />
                
                <label htmlFor="inputDescription" className="sr-only">{this.state.desc} </label> Description:
                <input readOnly={this.state.readOnly} type="text" name="Description" id="inputDescription" className="form-control" defaultValue={this.state.desc} />
                
                <label htmlFor="inputTechnologies" className="sr-only">{this.state.tech}</label> Technologies:
                <input readOnly={this.state.readOnly} type="text" name="Technologies" id="inputTechnologies" className="form-control" defaultValue={this.state.tech} />
                
                <label htmlFor="inputGithub" className="sr-only">{this.state.gitPort}</label> Github Page:
                <input readOnly={this.state.readOnly} type="text" name="Github" id="inputGithub" className="form-control" defaultValue={this.state.gitPort} autofocus/>
               
                <label htmlFor="inputProject" className="sr-only">Last 2 Employers or Favorite Projects</label> Prior Employers and/or Favorite Technologies:
                <input readOnly={this.state.readOnly} type="text" name="Project" id="inputProject" className="form-control" defaultValue="Last 2 Employers or Projects" autofocus/>
               
                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>

        </div> 


        </React.Fragment>
        )
    }
}

