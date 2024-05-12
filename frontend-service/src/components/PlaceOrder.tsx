import * as React from 'react';
import {useEffect} from 'react';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) {
      navigate("");
    }
  }, []);

  return (
    <div>
      <h3>placing order</h3>
    </div>
  );
}

export default PlaceOrder;
