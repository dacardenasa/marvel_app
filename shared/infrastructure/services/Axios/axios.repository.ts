import axios, { type AxiosInstance } from "axios";

export class AxiosController {
  apiInstance: AxiosInstance;
  ts: number = 1;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL,
      params: {
        ts: this.ts,
        apikey: process.env.EXPO_PUBLIC_API_KEY,
        hash: process.env.EXPO_PUBLIC_API_HASH
      }
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
