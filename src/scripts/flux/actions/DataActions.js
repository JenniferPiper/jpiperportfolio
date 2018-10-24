import axios from 'axios';

import alt from 'flux/alt/alt';

class DataActions {
  
  constructor() {
    const appUrl = 'http://www.squareandplum.com';

    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`;
  }

  api(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getPages(callback) {
    this.api(this.pagesEndPoint)
      .then((response) => {
        this.getPosts(response, callback)
      });
      return true;
  }

  getPosts(pages, callback){
    this.api(this.postsEndPoint)
      .then((response) => {
        const posts = response
        const payload = { pages, posts };

        this.getSuccess(payload); // pass returned data to the store
        callback(payload);
      });
      return true;
  }

  // Return object with Pages and Posts data together
  // The Alt Store listens for this method to fire and stores the returned data
  getSuccess(payload) {
    return payload;
  }
}

export default alt.createActions(DataActions);