import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import {loadData, showLoader, hideLoader} from "../actions";
import {Breadcrumbs} from "@mui/material";
import {LinearProgress} from '@mui/material';

function PurchaseDetail(props) {
  const params = new URLSearchParams(window.location.search);
  const purchaseSelected = props.purchases ? 
    props.purchases.find(p => p.id_compra == params.get('compraId'))
    : null;

  // load and set Shipment status - show loader
  useEffect(() => {
    props.showLoader();
    
    if(purchaseSelected && !props.shipment) {
      props.loadData('shipment-status', `shipmentId=${purchaseSelected.id_envio}`, 'SHIPMENT');
    } 
  }, [props.shipment]);
  
  // load and set Payment status - hide loader
  useEffect(() => {
    if(purchaseSelected && !props.payment) {
      props.loadData('payment-status', `paymentId=${purchaseSelected.id_transaccion}`, 'PAYMENT');
    } 
    
    if (props.payment && props.shipment) {
      props.hideLoader();
    }
  }, [props.payment]);
  
  return (
    <>
    {!props.purchases ?
      <Navigate replace to="/profile" />
    :
    props.loading ?
      <div className='loader'>
        <LinearProgress />
      </div>
    :
    <div className="container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/profile">
          Compras
        </Link>
        <p>Detalle de compra</p>
      </Breadcrumbs>
      
      {props.shipment ? 
      <div className="state">
        <h2 className={`${props.shipment.estado}`}>
          Su compra fue {props.shipment.estado}
        </h2>
      </div> : null}
      
      <div className="purchase-detail">
  
        <div className="card card--big product">
          <div className="product__info">
            <h3 className="product__title text-title">
              {purchaseSelected.titulo}
            </h3>
            <p className="product__amount text-grey">
              Vendido por {purchaseSelected.vendedor.nickname}
            </p>
            <p className="product__amount text-grey">
              {`${purchaseSelected.cantidad} ${purchaseSelected.cantidad === 1 ? 'Unidad' : 'Unidades'}`}
            </p>
          </div>
          <img className="product__image" src={purchaseSelected.imagen} />
        </div>
        
        <div className="detail">
          <h3 className="text-title">
            Detalle de la compra
          </h3>
          <p className="text-grey">
            13 de mayo | #7010191
          </p>
          {props.payment ?
          <p className="text-grey">
            Pago {props.payment.estado}
          </p>
          : null}
        </div>
      </div>
    </div>
    }
  </>
  );
};

const mapPropsToState = state => ({
  purchases: state.purchases.data,
  shipment: state.shipment.data,
  payment: state.payment.data,
  loading: state.loader.loading
});

const mapDispatchToProps = dispatch => ({
  loadData: (route, urlParam, actionType) => dispatch(loadData(route, urlParam, actionType)),
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader()),
});

export default connect(
  mapPropsToState, mapDispatchToProps
)(PurchaseDetail);