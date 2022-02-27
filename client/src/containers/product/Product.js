import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/product/ProductList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {productsFetch, productDelete} from '../../actions';
class Product extends Component {

  constructor(props){
    super(props);
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount(){
    this.props.productsFetch();
    
  }

  delProduct(product){
      this.props.productDelete(product.id);
  }
  editProduct(product){
      this.props.history.push('products/edit/'+product.id);
  }
  render(){
    return (
     <div>
        <Header/>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-11'>
                <h1>สินค้า</h1>
            </div>
            <div className='col-1'>
                <button className='btn btn-success aaa' onClick={() => this.props.history.push('products/add')}>เพิ่ม</button>
            </div>
          </div>
          <ProductList products={this.props.products} 
          onDelProduct={this.delProduct}
          onEditProduct={this.editProduct}
          />
        </div>
        <Footer/>
      </div>
    )
  }

}

function mapStateToProps({products}){
  return {products}
}

export default withRouter(connect(mapStateToProps, {productsFetch, productDelete}) (Product))