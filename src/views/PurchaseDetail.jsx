import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {loadData, showLoader, hideLoader, clearStatus} from "../actions";
import {Breadcrumbs, LinearProgress, Tooltip} from "@mui/material";
import {handleDate} from '../utils';

function PurchaseDetail(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const purchaseSelected = props.purchases ? 
    props.purchases.find(p => p.id_compra == params.get('compraId'))
    : null;

  // load and set status of shipment and payment - show loader
  useEffect(() => {
    props.showLoader();
    
    if (purchaseSelected) {
      props.loadData('shipment-status', `shipmentId=${purchaseSelected.id_envio}`, 'SHIPMENT');
      props.loadData('payment-status', `paymentId=${purchaseSelected.id_transaccion}`, 'PAYMENT');
    } else {
      setError(true);
    }
    
  }, []);
  
  // hide loader
  useEffect(() => {
    if (props.payment && props.shipment) {
      setLoading(false);
      props.hideLoader();
    }
  }, [props.payment]);

  // unmount
  useEffect(() => {
    setLoading(true)
    return () => {}
  }, []);

  return (
    <>
    {error ? 
      <div>No se encuentra esta compra</div>
    :
    loading ?
      <div className='loader'>
        <LinearProgress />
      </div>
    :
    <div className="container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/profile">Compras</Link>
        <p>Detalle de compra</p>
      </Breadcrumbs>
      
      <div className="purchase-detail">  
        <div className="product__header">
          {props.payment ?
            <Tooltip title={`La transacción fue ${props.payment.estado}`}>
              <p className={`product__payment_status product__payment_status--${props.payment.estado}`}>
                {props.payment.estado}
              </p>
            </Tooltip>
          : null}
          <p className="text-grey"># {purchaseSelected.id_compra} | {handleDate(purchaseSelected.fecha)}</p>
        </div>
        <div className="card card--big product">
          <div className="product__info">
            <h3 className="product__title text-title">
              {purchaseSelected.titulo}
            </h3>
            <p className="text-grey">
              Vendido por {purchaseSelected.vendedor.nickname}
            </p>
            <p className="product__amount">
              {`${purchaseSelected.cantidad} ${purchaseSelected.cantidad === 1 ? 'Unidad' : 'Unidades'}`}
            </p>
          </div>
          <img className="product__image" src={purchaseSelected.imagen} />
        </div>
        <div className="product__footer">
          {props.shipment ? 
            <p className="text-grey">El <strong>envío</strong> ha sido 
              <span className={`product__shipment-status product__shipment-status--${props.shipment.estado}`}>
                {props.shipment.estado}
              </span>
            </p>
          :null}
          <div className="price">
            <p>Total</p>
            <p className="price__total">{purchaseSelected.precio.moneda}$ {purchaseSelected.precio.total}</p>
          </div>
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