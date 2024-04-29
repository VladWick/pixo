import * as React from 'react';
import MainBanner from './MainBanner';
import {useEffect} from 'react';
import Cookies from 'js-cookie';

function Home() {

  useEffect(() => {
    console.log("LOG email cookies: " + Cookies.get("email"));
  }, []);

  return (
    <div>
      <MainBanner />
    </div>
  );
}

export default Home;
