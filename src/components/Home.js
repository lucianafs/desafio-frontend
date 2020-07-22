import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    
    handleClick = (productID)=>{
        this.props.addToCart(productID); 
    }

    render(){
        let itemList = this.props.products.map(item=>{
            return(
                <div className="col-md-6 col-lg-4 col-xl-3 p-2" key={item.productID}>
                    <div className="card">
                        <div className="card-image">
                            <img src={item.image} alt={item.name} className="w-100" />
                        </div>
                        <div className="card-body pt-3">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <div className="row justify-content-between align-items-end">
                                <div className="col-6">
                                    <span className="font-24 font-weight-bold">R${item.unitPrice}</span>
                                </div>
                                <div className="col-6 text-right">
                                    <small className="text-muted">Em estoque: {item.unitsInStock}</small>
                                </div>
                            </div>
                            <button to="/" className="btn btn-md btn-block btn-pink mt-2" onClick={()=>{this.handleClick(item.productID)}}>adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <main role="main">
                <div className="container mt-2 mt-md-0 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 p-5 text-center d-none d-md-block">
                            <h4 className="display-4">Lorem ipsum</h4>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam quis purus pulvinar posuere. Suspendisse potenti. Mauris tincidunt condimentum mi. Aenean ullamcorper mollis egestas. Sed ipsum diam, placerat id erat convallis, rutrum auctor lacus.</p>
                        </div>
                    </div>
                    <div className="row">
                        {itemList}
                    </div>
                </div>
            </main>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (productID)=>{dispatch(addToCart(productID))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)