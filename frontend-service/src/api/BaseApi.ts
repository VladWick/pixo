import axios from 'axios';
import {baseUrl} from '../utils/Utils';
import Cookies from 'js-cookie';





export abstract class BaseApi {

  // private baseRequest = axios.create({
  //   responseType: 'json',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${Cookies.get('access_token')}`
  //   }
  // });

  protected async get<T>(path: string, params?: object): Promise<T> {

    const baseRequest = axios.create({
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // const response = await this.baseRequest.get<T>(baseUrl + path, {withCredentials: true, params: params});
    const response = await baseRequest.get<T>(baseUrl + path);
    return response.data;

    // try {
    //   const response = await this.baseRequest.get<T>(baseUrl + path, {withCredentials: true, params: params});
    //   return response.data;
    // }
    // catch (err) {
    //   return Promise.reject(ErrorUtils.parse(err.response));
    // }
  }

  protected async post<T>(path: string, data?: object):Promise<T> {

    const baseRequest = axios.create({
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': `Bearer ${Cookies.get('access_token')}`
      }
    });

    const response = await baseRequest.post<T>(
      baseUrl + path, data
    );

    return response.data;

    // const token = Cookies.get('access_token');
    // console.log('LOG : ' + token?.charAt(0));
    // console.log('LOG token auth: ' + JSON.stringify(token));

    // const config = {
    //   headers: { Authorization: `Bearer ${token}` }
    // };

    // axios.get('/api/users', config)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));

    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // };

// // Make GET request
//     axios.get(`${BASE_URL}/todos/1`, { headers })

    // const response = await axios.post<T>(
    //   baseUrl + path,
    //   {
    //     headers
    //   }
    // );

    // try {
    //   const response = await this.baseRequest.post<T>(Urls.baseServlet + path, data, {withCredentials: true});
    //   return response.data;
    // } catch (err) {
    //   return Promise.reject(ErrorUtils.parse(err.response));
    // }

  }



}