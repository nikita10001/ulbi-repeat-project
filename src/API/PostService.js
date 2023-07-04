import axios from 'axios';

export class PostService {
  static async getPosts() {
    const response = await axios.get('https://dummyjson.com/posts');
    return response;
  }
}
