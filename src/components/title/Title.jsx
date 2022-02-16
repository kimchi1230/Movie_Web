import "./title.scss";
import PropTypes from 'prop-types';
import React, { useEffect } from 'react'

const Title = props => {
  useEffect(()=>{
        if(props.title ==='undefined'){
            document.title = 'TMovie';
        }else{
            document.title = props.title;
        }
  },[props.title])
  return (
    <div className="fw-6">
        {props.children}
    </div>
  );
};


Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;