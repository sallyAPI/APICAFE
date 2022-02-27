import React,{Component} from 'react';
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from 'axios';

class Monitor extends Component{
    
    constructor(props){
        super(props);
        this.state = {totalPrice: 0, orders: [], confirm: false, msg:"",colorDiv: 0};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product){
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.orders.push({product: product, quantity: 1});
        }
        const totalPrice = this.state.totalPrice + (+product.unitPrice);
        this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm: false})
    }

    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id != product.id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * (+findOrder.product.unitPrice));
        this.setState({totalPrice: totalPrice, orders: resultOrder, confirm: false});
    }

    cancelOrder(){
        this.setState({totalPrice: 0,orders: [], confirm: false})
    }

    confirmOrder(){

        const {totalPrice, orders} = this.state;       
       if(orders && orders.length > 0){
        axios.post("http://localhost:3001/orders",{orderedDate : new Date(), totalPrice, orders})
        .then(res => {
            
            this.setState({totalPrice: 0,orders: [], confirm: true,msg:"บันทึกรายการสั่งซื้อเรียบร้อยค่ะ",colorDiv: 0})
        })}else{
            this.setState({totalPrice: 0,orders: [], confirm: true,msg:"กรุณาเลือกสินค้าก่อนค่ะ",colorDiv: 1})
        }
    }

    render(){
        return(
            <div className='container-fluid mt-4'>
                
                    {this.state.confirm && this.state.colorDiv == 0 &&
                    <div className='alert alert-success title text-center ' role="alert">
                        {this.state.msg}
                    </div>
                    }
                    {this.state.confirm && this.state.colorDiv == 1 &&
                    <div className='alert alert-danger title text-center ' role="alert">
                        {this.state.msg}
                    </div>
                    }
                    
                    
                    <div className='row'>
                        <div className='col-md-9'>
                            
                            <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                        </div>
                        <div className='col-md-3'>
                            <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder}/>
                    </div>
                </div>         
            </div>
             
            

        )
    }

}

export default Monitor