import React, { Component } from 'react'
import { connect } from 'react-redux'
class Checkout extends Component{

    render(){
  
        return(
            <div className="row justify-content-end align-items-center mt-3">
                <div className="col-md-6 col-xl-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="font-24 font-weight-bold text-right text-md-left mb-3 mb-md-0">Total: R${this.props.total}</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <button className="btn btn-success" disabled >Finalizar compra</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Checkout)