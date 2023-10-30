import { SystemPlugin, LogSystemAdapter } from '../../DTCD-SDK/index';
import axios from 'axios';
import pluginMeta from './Plugin.Meta';

export class InteractionSystem extends SystemPlugin {
  static getRegistrationMeta() {
    return pluginMeta;
  }

  #systemName;
  #logSystem;
  #keycloak;

  constructor(guid) {
    super();

    this.#systemName = `${pluginMeta.name}[${guid}]`;
    this.#logSystem = new LogSystemAdapter('0.5.0', guid, pluginMeta.name);
    this.#keycloak = this.getDependence('keycloak');

    this.#logSystem.debug(`Start of ${this.#systemName} creation`);

    this.instance = axios.create({
      baseURL: window.location.origin,
    });

    Object.assign(this, this.instance);

    this.instance.interceptors.request.use(async config => {
      await this.#keycloak.updateToken(90);

      if (config.url.startsWith('/dtcd_workspaces')) {
        config.headers.common.Authorization = `Bearer ${this.#keycloak.token}`;
      }

      return config;
    });

    this.#logSystem.debug(`End of ${this.#systemName} creation`);
    this.#logSystem.info(`${this.#systemName} initialization complete`);
  }

  async GETRequest(url, config = {}) {
    this.#logSystem.info(`${this.#systemName} GET request run: "${url}"`);

    const response = await this.instance.get(url, config);
    const { status, statusText } = response;
    const responseJSON = JSON.stringify(response, null, '\t');

    this.#logSystem.debug(`${this.#systemName} GET "${url}" RESPONSE: ${responseJSON}`);
    this.#logSystem.info(
      `${this.#systemName} GET request finish: "${url}" STATUS: ${status} ${statusText}`
    );
    return response;
  }

  async POSTRequest(url, data, config = {}) {
    const dataJSON = JSON.stringify(data, null, '\t');
    this.#logSystem.info(`${this.#systemName} POST request run: "${url}" DATA: ${dataJSON}`);

    const response = await this.instance.post(url, data, config);
    const { status } = response;
    const responseJSON = JSON.stringify(response, null, '\t');

    this.#logSystem.debug(`${this.#systemName} POST "${url}" RESPONSE: ${responseJSON}`);
    this.#logSystem.info(`${this.#systemName} POST request finish: "${url}" STATUS: ${status}`);
    return response;
  }

  async PUTRequest(url, data, config = {}) {
    const dataJSON = JSON.stringify(data, null, '\t');
    this.#logSystem.info(`${this.#systemName} PUT request run: "${url}" DATA: ${dataJSON}`);

    const response = await this.instance.put(url, data, config);
    const { status } = response;
    const responseJSON = JSON.stringify(response, null, '\t');

    this.#logSystem.debug(`${this.#systemName} PUT "${url}" RESPONSE: ${responseJSON}`);
    this.#logSystem.info(`${this.#systemName} PUT request finish: "${url}" STATUS: ${status}`);
    return response;
  }

  async DELETERequest(url, data, config = {}) {
    const dataJSON = JSON.stringify(data, null, '\t');
    this.#logSystem.info(`${this.#systemName} DELETE request run: "${url}" DATA: ${dataJSON}`);

    const response = await this.instance.delete(url, data, config);
    const { status } = response;
    const responseJSON = JSON.stringify(response, null, '\t');

    this.#logSystem.debug(`${this.#systemName} DELETE "${url}" RESPONSE: ${responseJSON}`);
    this.#logSystem.info(`${this.#systemName} DELETE request finish: "${url}" STATUS: ${status}`);
    return response;
  }
}
