import axios, { AxiosInstance, AxiosResponse } from "axios";
import store from "@/store";
import Hero from "@/models/Hero";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

export default class BackEndGateway {
  static getAllHeroes() {
    this._sendRequest("/heroes", "get").then(response => {
      const heroesJson = response && response.data;
      const heroes = Array<Hero>();
      for (const entry of heroesJson) {
        const hero = Hero.fromJson(entry);
        heroes.push(hero);
      }

      store.commit("addHeroes", heroes);
    });
  }

  static _sendRequest(
    url: string,
    type: string,
    data: Record<string, any> = {}
  ) {
    const httpRequest = this._createRequest();

    return this._executeRequest(httpRequest, type, url, data);
  }

  static _createRequest() {
    return axios.create({
      baseURL: "http://localhost:8081",
      withCredentials: false,
      headers: {
        "Content-Type": "application/json;  charset=utf-8"
      }
    });
  }

  static _executeRequest(
    httpRequest: AxiosInstance,
    type: string,
    url: string,
    body: any
  ) {
    let httpRequestType: Promise<AxiosResponse>;

    if (type == GET) {
      httpRequestType = httpRequest.get(url);
    } else if (type == POST) {
      httpRequestType = httpRequest.post(url, body);
    } else if (type == PUT) {
      httpRequestType = httpRequest.put(url, body);
    } else if (type == DELETE) {
      httpRequestType = httpRequest.delete(url);
    } else {
      throw Error("You cannot send a request without specifying a valid type");
    }

    return httpRequestType
      .then(response => {
        if (response.status == 200) {
          return response;
        }
      })
      .catch(error => {
        console.debug(`Error: request failed with ${error}`); // push to logger
      });
  }
}
