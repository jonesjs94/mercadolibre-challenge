export default jest.fn(() => ({
  user: {
    id_usuario: 1,
    nombre: 'Mercadolibre',
    apellido: 'User',
    nivel: 'ORO',
    imagen: 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png',
  },
  level: {
    ORO: {
      id_nivel: 'ORO',
      descripción: 'Nivel Oro - Mercadopuntos',
    },
  },
  restrictions: {
    tipo: 'warning',
    mensaje: 'Tu cuenta no ha sido verificada aún. Revisa tu mail',
  },
  purchases: [
    {
      id_compra: 300193,
      titulo: 'Celular Samsung Galaxy A51 128gb Refabricado Liberado',
      precio: {
        total: 109999.99,
        moneda: 'ARS',
      },
      cantidad: 1,
      fecha: '2022-05-15T12:11:10.000-03:00',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_720907-MLA46771068666_072021-V.webp',
      vendedor: {
        id: 4007,
        nickname: 'AIR-VISION',
      },
      id_transaccion: 7010193,
      id_envio: 1000010193,
    },
    {
      id_compra: 300193,
      titulo: 'Celular Samsung Galaxy A51 128gb Refabricado Liberado',
      precio: {
        total: 109999.99,
        moneda: 'ARS',
      },
      cantidad: 1,
      fecha: '2022-05-15T12:11:10.000-03:00',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_720907-MLA46771068666_072021-V.webp',
      vendedor: {
        id: 4007,
        nickname: 'AIR-VISION',
      },
      id_transaccion: 7010193,
      id_envio: 1000010193,
    }
  ],
  payment: {
    7010191: {
      id_transaccion: 7010191,
      estado: 'realizada',
    },
    7010192: {
      id_transaccion: 7010192,
      estado: 'rechazada',
    },
    7010193: {
      id_transaccion: 7010193,
      estado: 'rechazada',
    }
  },
  shipment: {
    1000010191: {
      id_envio: 1000010191,
      estado: 'entregado',
    },
    1000010192: {
      id_envio: 1000010192,
      estado: 'cancelado',
    },
    1000010193: {
      id_envio: 1000010193,
      estado: 'cancelado',
    }
  },
}));