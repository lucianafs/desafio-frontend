import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Checkout from './Checkout'

class Carrinho extends Component{
    handleRemove = (productID)=>{
        this.props.removeItem(productID);
    }

    handleAddQuantity = (productID)=>{
        this.props.addQuantity(productID);
    }

    handleSubtractQuantity = (productID)=>{
        this.props.subtractQuantity(productID);
    }
    render(){
              
        let addedItems = this.props.products.length ?
            (  
                this.props.products.map(item=>{
                    return(
                        <li className="list-group-item p-3" key={item.productID}>
                            <div className="row align-items-center">
                                <div className="col-md-2"> 
                                    <img src={item.image} alt={item.image} className="w-100"/>
                                </div>
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <h5 className="card-title mt-2 mt-md-0 mb-0">{item.name}</h5>
                                    <p className="card-text text-muted mt-2 mt-md-0 mb-0">{item.description}</p>
                                    <p className="font-24 font-weight-bold mt-2 mt-md-0 mb-0">R${item.unitPrice}</p>
                                </div>
                                <div className="col-9 col-md-3 text-left text-md-center">
                                    <p className="mb-0"><b>Quantidade:</b></p>
                                    <span className="quantidade">
                                        <Link to="/carrinho"><i className="px-3" onClick={()=>{this.handleAddQuantity(item.productID)}}>+</i></Link>
                                        <span><b>{item.quantity}</b></span>
                                        <Link to="/carrinho"><i className="px-3" onClick={()=>{this.handleSubtractQuantity(item.productID)}}>-</i></Link>
                                    </span>
                                </div>
                                <div className="col-3 col-md-1">
                                    <button className="btn btn-danger" onClick={()=>{this.handleRemove(item.productID)}}>X</button>
                                </div>
                            </div> 
                        </li>
                    )
                })
            ):

            (
                <p>Seu carrinho está vazio.</p>
            )
       return(

            <main role="main">
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 pt-5 pb-4">
                            <h3 className="">Produtos no carrinho:</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <ul class="list-group mb-3">
                                {addedItems}
                            </ul>
                        </div>
                    </div>
                    <Checkout />
                </div>
            </main>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (productID)=>{dispatch(removeItem(productID))},
        addQuantity: (productID)=>{dispatch(addQuantity(productID))},
        subtractQuantity: (productID)=>{dispatch(subtractQuantity(productID))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Carrinho)