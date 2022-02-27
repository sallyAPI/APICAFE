import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';
class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
   this.props.productsFetch()
}


  render(){
    return(
      <div>
        <Header/>
        <Monitor products={this.props.products}/>
        <Footer company="Worapong" email="worapongpp@hotmail.com"/>
      </div>

    )


}



}

  function mapStateToProps({products}){
    return { products}


  }
export default connect(mapStateToProps, { productsFetch })(Home);
