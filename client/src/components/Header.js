import React,{Component} from 'react'
import Home from '../containers/Home';
import {Link} from 'react-router-dom';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {date : new Date()};
    
  }

  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(), 1000);
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){
      clearInterval(this.timerID);
  }

  tick(){
    this.setState({date : new Date()});
  }

  

  render(){
    return(
      <nav className="navbar navbar-dark bg-light mb-4">

        <div className='container-fluid'>
          
            
        <Link className='text-success text-decoration-none' to="/"><h2 className='text-success text-sm mt-1' ><img style={{height : 50}} src="/images/logo/logo.png"alt="" /> APICafe </h2></Link>
            
           
                <ul className='list-inline mt-3' >
                  <li className='list-inline-item title text-light'><Link className='text-success text-decoration-none' to="/">Home</Link></li>
                  <li className='list-inline-item title text-secondary'>|</li>
                  <li className='list-inline-item title text-light'><Link className='text-success text-decoration-none'  to="/orders">Order</Link></li>
                  <li className='list-inline-item title text-secondary'>|</li>
                  <li className='list-inline-item title text-light'><Link className='text-success text-decoration-none'  to="/products">Product</Link></li>
                  <li className='list-inline-item title text-secondary'>|</li>
                  <li className='list-inline-item title text-light'><Link className='text-success text-decoration-none'  to="/about">About</Link></li>
                </ul>
           
            
                <h5 className='text-muted mt-2 mb-2'>{this.state.date.toLocaleTimeString()}</h5>


           
          
        </div>
      </nav>
    )
  }
}

export default Header