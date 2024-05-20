import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const OAuth2Callback = ({ location }) => {
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [location, history]);

  return <div>Loading...</div>;
};

export default OAuth2Callback;
