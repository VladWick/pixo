import * as React from 'react';
import MainBanner from './MainBanner';
import {useEffect} from 'react';
import Cookies from 'js-cookie';

function Home() {

  // categories
  // products

  useEffect(() => {
    console.log("LOG email cookies: " + Cookies.get("email"));

    // Get all products
    // axios.request({
    //   method: "GET",
    //   url: path
    // }).then(response => {
    //   console.log(response.data);
    // });

  }, []);

  return (
    <div>
      <MainBanner />
    </div>
  );
}

export default Home;
