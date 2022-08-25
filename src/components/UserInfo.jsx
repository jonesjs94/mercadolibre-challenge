import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { loadData } from '../actions';


function UserInfo(props) {
  const [restrictions, setRestrictions] = useState(null);

  useEffect(() => {
    if(props.user) {
      // load level
      if(props.user && !props.level) {
        props.loadData('level', `levelId=${props.user.nivel}`, 'LEVEL');
      }
      
      // load and set restrictions
      if(!props.restrictions) {
        props.loadData('restrictions', `userId=${props.user.id_usuario}`, 'RESTRICTIONS');
      }
      else {
        setRestrictions(props.restrictions)
      }
    } 
  }, [props.user, props.restrictions]);

  return (
  <>
    {props.user ? 
      <div className="user card">
        <img className="user__image" src={props.user.imagen} />
        <h3 className="user__fullname">
          {`${props.user.nombre} ${props.user.apellido}`}
        </h3>
        {props.level ? 
          <p className="user__level">
            {props.level.descripción}
          </p>
        :null}
        {restrictions ? 
          restrictions.map((r, i) => (
            <p key={i} className={`user__${r.tipo}`}>
              {r.mensaje}
            </p>
          ))
        : null}
      </div>
    :null}
    </>
  )
}
const mapPropsToState = state => ({
  level: state.level.data,
  restrictions: state.restrictions.data
});

const mapDispatchToProps = dispatch => ({
  loadData: (route, urlParam, actionType) => dispatch(loadData(route, urlParam, actionType))
});

export default connect(mapPropsToState, mapDispatchToProps)(UserInfo);