import axios from 'axios';

export class PostService {
  static async getPosts(limit = 10, skip = 0) {
    const response = await axios.get('https://dummyjson.com/posts', {
      params: {
        limit,
        skip,
      },
    });
    return response;
  }
}
