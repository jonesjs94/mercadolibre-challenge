import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {handleDate} from '../utils';

/* 
todo:
Paginado
*/

const ItemList = (props) => (
  <div className="item__list">
  <h2>Compras</h2>
    {props.purchases ? props.purchases.map((data, i) => (
      <div key={i} className="item card">
        <div className="item__header">
          <p className="item__date">
            {handleDate(data.fecha)}
          </p>
          <p className="item__id">
            #{data.id_compra}
          </p>
        </div>
        <div className="item__body">
          <div>
            <p className="item__title">
              {data.titulo}
            </p>
            <p className="item__quantity">
              {`${data.cantidad} ${data.cantidad === 1 ? 'Unidad': 'Unidades'}`}
            </p>
          </div>
          <div>
            <Link className="item__link" to={`/purchase_detail?compraId=${data.id_compra}`}>
              Ver detalle
            </Link>
            <p className="item__amount text-grey">
              <span>Total:</span>
              {`${data.precio.moneda}$ ${data.precio.total}`}
            </p>
          </div>
        </div>
      </div>
    )) 
    : 
    <div>Ups! Hubo un error, uelve a intentarlo.</div>}
  </div>
);



export default ItemList;