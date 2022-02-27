import React,{Component} from 'react';



/*const  ProductItem =(props) => {
        const {productName, unitPrice,} = props;
        return(
            <div>
                <p>{productName}sss</p>
                <p>{unitPrice}</p>
            </div>
        )
    }*/
class ProductItem extends Component{
    constructor(props){
       super(props);
      
    }
    
    
    render(){
        const {productName, unitPrice,thumbnail} = this.props.product;
        return(
            <div className='col-md-3 col-sm-6'>
                <img className='img-fluid img-thumbnail' src={thumbnail}/>
                <h5 className='mt-2'>{productName}</h5>
                <p className='title text-right'>{unitPrice} THB</p>
                <div className="d-grid gap-2 col-12 mx-auto text-center">
                
                    { this.props.onAddOrder &&
                    <button className='btn btn-block btn-secondary title' onClick={()=> this.props.onAddOrder(this.props.product)}>
                    ซื้อ
                    </button>
                    }
                    <div  className='row'>
                        <div  className='col-6'>
                            { (this.props.onDelProduct || this.props.onEditProduct) &&
                            <button className='btn  btn-info  aaa'onClick={()=> this.props.onEditProduct(this.props.product)}>
                            แก้ไข
                            </button>
                            }
                        </div>
                        <div  className='col-6'>
                            { (this.props.onDelProduct || this.props.onEditProduct) &&
                            <button className='btn  btn-danger  aaa' onClick={()=> this.props.onDelProduct(this.props.product)}>
                            ลบ 
                            </button>
                            }
                        </div>        
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default ProductItem;