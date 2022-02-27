import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from '../../common/FormField';
import {productFormFields} from './formFields';
class ProductForm extends Component {

    renderField (formFields) {
        
        return formFields.map(({label, name , type, required}) => {
            return(
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField}/>
            )
        })
    }



    render(){
        return (
            <div>
                <form>
                      {this.renderField(productFormFields)} 
                      <button className='btn btn-block btn-info title mt-2 aaa' type='submit'>
                          บันทึก
                      </button>
                </form>

            </div>
        )
    }
}

function validate(values){
    console.log(values);
}

ProductForm = reduxForm({ validate, from : "productForm"})(ProductForm);

export default ProductForm ;