import {baseUrl} from '../utils/Utils';
import {FavouriteModel} from '../domain/FavouriteModel';

class Api {

  getAllFavouritesByUserId(userId: string): Promise<FavouriteModel[]> {
    return fetch(baseUrl + `/api/user/favourite/${userId}`, {
      method: 'GET',
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<FavouriteModel[]>;
    });
  }

  addFavourite(favourite: FavouriteModel): Promise<FavouriteModel> {
    return fetch(baseUrl + '/api/user/favourite', {
      method: 'POST',
      body: JSON.stringify(favourite),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<FavouriteModel>;
    });
  }

}

export const FavouritesApi = new Api();
