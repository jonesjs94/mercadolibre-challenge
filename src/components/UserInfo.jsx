import React, {useState} from 'react';

function UserInfo(props) {
console.log(props)
  return (
    <div className="user card">
      <img className="user__image" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png" />
      {/* <h3 className="user__fullname">{`${props.user.nombre} ${props.user.apellido}`}</h3> */}
      <p className="user__level">Nivel ORO</p>
      <p className="user__warning">Tu cuenta no ha sido verificada aún. Revisa tu mail</p>
    </div>
  )
}

export default UserInfo;