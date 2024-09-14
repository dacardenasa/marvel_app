import { AxiosInstance, AxiosStatic } from "axios";

export class MarvelController {
  apiInstance: AxiosInstance;
  ts: number = 1;

  constructor(apiController: AxiosStatic) {
    this.apiInstance = apiController.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL,
      params: {
        ts: 1,
        apikey: process.env.EXPO_PUBLIC_API_KEY,
        hash: process.env.EXPO_PUBLIC_API_HASH
      },
      // timeout: 5000
    });
  }

  async get(route: string) {
    return await this.apiInstance.get(route);
  }

  async post(route: string, body = {}) {
    return await this.apiInstance.post(route, { ...body });
  }

  async put(route: string, body = {}) {
    return await this.apiInstance.put(route, { ...body });
  }

  async delete(route: string) {
    return await this.apiInstance.delete(route);
  }
}
