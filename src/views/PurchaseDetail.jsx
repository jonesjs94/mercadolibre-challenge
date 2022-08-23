import React, {useState} from "react";
import moment from "moment";

function PurchaseDetail() {
  const compra = {
    id_compra: 300200,
    titulo: 'Celular LG K40',
    precio: {
      total: 105000.00,
      moneda: 'ARS',
    },
    cantidad: 3,
    fecha: '2022-07-25T10:23:18.000-03:00',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp',
    vendedor: {
      id: 4010,
      nickname: 'FAROCUDR19',
    },
    id_transaccion: 7010200,
    id_envio: 1000010200,
  };
  
  const transaccion = {
    id_transaccion: 7010200,
    estado: 'rechazada',
  };
  
  const envio = {
    id_envio: 1000010200,
    estado: 'cancelado',
  };

  return (
    <div className="container">
      
      <div className="breadcrumb">
        <p>Compra - Estado de la compra</p>
      </div>
      
      <div className="state">
        <h2 className={`${transaccion.estado}`}>
          Su compra fue {transaccion.estado}
        </h2>
      </div>
      
      <div className="purchase-detail">

        <div className="card card--big product">
          <div className="product__info">
            <h3 className="product__title text-title">
              {compra.titulo}
            </h3>
            <p className="product__amount text-grey">
              Vendido por {compra.vendedor.nickname}
            </p>
            <p className="product__amount text-grey">
              {`${compra.cantidad} ${compra.cantidad === 1 ? 'unidad' : 'unidades'}`}
            </p>
          </div>
          <img className="product__image" src={compra.imagen} />
        </div>
        
        <div className="detail">
          <h3 className="text-title">
            Detalle de la compra
          </h3>
          <p className="text-grey">
            13 de mayo | #7010191
          </p>
          <p className="text-grey">
            Pago realizado
          </p>
      </div>
      </div>
    </div>
  );
};

export default PurchaseDetail;
/* 


- Id de la compra
- Fecha de compra

- Precio

- Estado del pago
*/