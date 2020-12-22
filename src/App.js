import React from 'react'
import DisplayWheather from './DisplayWheather'
import Spinner from './Spinner'
class App extends React.Component {


   state = {
     lat: null,
     errMessage: null
   }
    
   componentDidMount(){
      window.navigator.geolocation.getCurrentPosition((postion) => this.setState({
          lat: postion.coords.latitude
        }),
        (error) => this.setState({
          errMessage: error.message
        })
      )
   }
   render(){
      
       if(!this.state.errMessage && this.state.lat){
            return <DisplayWheather lat={this.state.lat}/>
        }
        if(this.state.errMessage && !this.state.lat){
            return (<h1>{this.state.errMessage}</h1>)
        }
        else{
     return <Spinner message="Accept the Location"/>
   }
   }
}

export default App