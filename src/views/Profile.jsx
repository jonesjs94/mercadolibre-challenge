import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadData, showLoader, hideLoader} from "../actions";
import UserInfo from '../components/UserInfo.jsx';
import ItemList from '../components/ItemList';
import {LinearProgress} from '@mui/material';

function Profile(props) {
  // Load user - show loader
  useEffect(() => {
    props.showLoader();
    props.loadData('user', null, 'USER');
  }, []);
  
  // Load and set purchases - hide loader
  useEffect(() => {
    if(props.user && !props.purchases) {
      props.loadData('purchases', `userId=${props.user.id_usuario}`, 'PURCHASES');
    }
    
    if(props.user && props.purchases) {
      props.hideLoader()
    }
  }, [props.user, props.purchases]);

  return (
    <>
    {props.loading ?
      <div className='loader'>
        <LinearProgress />
      </div>
      :
      <div className="container">
        <UserInfo user={props.user} />
        <ItemList idUser={props.user ? props.user.id_usuario : null} purchases={props.purchases} />
      </div>
      }
    </>
  );
};

Profile.propTypes = {
  loadData: PropTypes.func,
  user: PropTypes.shape({
    id_usuario: PropTypes.number,
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    nivel: PropTypes.string,
    imagen: PropTypes.string
  })
};

const mapPropsToState = state => ({
  user: state.user.data,
  purchases: state.purchases.data,
  loading: state.loader.loading
});

const mapDispatchToProps = dispatch => ({
  loadData: (route, urlParam, actionType) => dispatch(loadData(route, urlParam, actionType)),
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader()),
});

export default connect(mapPropsToState, mapDispatchToProps)(Profile);