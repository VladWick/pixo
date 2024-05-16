import {baseUrl} from '../utils/Utils';
import {ReviewModel} from '../domain/ReviewModel';

class Api {

  getAllReviewsByProductId(productId: number): Promise<ReviewModel[]> {
    return fetch(baseUrl + `/api/user/review/product/${productId}`, {
      method: 'GET',
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ReviewModel[]>;
    });
  }

  getAllReviewsByUserId(userId: string): Promise<ReviewModel[]> {
    return fetch(baseUrl + `/api/user/review/user/${userId}`, {
      method: 'GET',
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ReviewModel[]>;
    });
  }

  addReview(review: ReviewModel): Promise<ReviewModel> {
    return fetch(baseUrl + '/api/user/review', {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ReviewModel>;
    });
  }

}

export const ReviewApi = new Api();
