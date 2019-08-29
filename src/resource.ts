import { ErrorKeys, ErrorResponse } from './typings/error';
export default abstract class Resource {
  protected readonly client: any;
  protected readonly endpoint: string;
  constructor(client: any, endpoint: any) {
    this.client = client;
    this.endpoint = endpoint;
  }

  static exceptionHandle(error: any): ErrorResponse {
    if (
      error.response.data.hasOwnProperty(ErrorKeys.ERROR_CODE) &&
      error.response.data.hasOwnProperty(ErrorKeys.ERROR_INFO)
    ) {
      return {
        [ErrorKeys.ERROR_CODE]: error.response.data.error_code,
        [ErrorKeys.ERROR_INFO]: error.response.data.error_info,
      };
    }
    return error;
  }

  async get(id?: string) {
    try {
      const url =
        id === undefined ? `${this.endpoint}` : `${this.endpoint}/${id}`;
      const response = await this.client.get(`${url}`);
      return response.data;
    } catch (err) {
      return Resource.exceptionHandle(err);
    }
  }

  async create(data?: any) {
    try {
      const response = await this.client.post(`${this.endpoint}`, data);
      return response.data;
    } catch (err) {
      return Resource.exceptionHandle(err);
    }
  }

  async update(id: string, data?: any) {
    try {
      const response = await this.client.patch(`${this.endpoint}/${id}`, data);
      return response.data;
    } catch (err) {
      return Resource.exceptionHandle(err);
    }
  }
}
