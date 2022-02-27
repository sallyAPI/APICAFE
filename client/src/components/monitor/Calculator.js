import React,{Component} from 'react';

class Calculator extends Component{
    
    showOrder(orders){
        if(!orders || orders.length == 0){
            return <li className='text-right text-muted title'>ไม่มีสินค้าค่ะ</li>
        } else{
            return orders.map(order=>{
                return(
                    
                <li className='text-right text-success title' key={order.product.productName}>
                    
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice*order.quantity}
                        <button className='btn btn-light btn-sm' onClick={()=>this.props.onDelOrder(order.product)}>X</button>
                    </li>
            )})
        }
    } 

    render(){

        const {totalPrice, orders} = this.props;

        return(
            <div>
                <h1 className='text-right'>{totalPrice}</h1>
                <hr/>
                <ul className='list-unstyled'>
                    {this.showOrder(orders)}
                </ul>
                <hr/>
                <div className="d-grid gap-2 col-12 mx-auto text-center">
                    <button className='btn btn-block btn-danger title' onClick={() => {this.props.onConfirmOrder()}}>ยืนยัน</button>
                    <button className='btn btn-block btn-secondary title' onClick={() => {this.props.onCancelOrder()}}>ยกเลิก</button>
                </div>
            </div>
        )
    }
}

export default Calculator