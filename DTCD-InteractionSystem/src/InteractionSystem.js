import axios from 'axios';
import { SystemPlugin, LogSystemAdapter } from '../../DTCD-SDK/index';
import { version } from './../package.json';

export class InteractionSystem extends SystemPlugin {
  static getRegistrationMeta() {
    return {
      type: 'core',
      title: 'Система взаимодействия',
      name: 'InteractionSystem',
      version,
      withDependencies: false,
      priority: 4,
    };
  }

  #systemName;
  #logSystem;

  constructor(guid) {
    super();
    this.#systemName = `${InteractionSystem.getRegistrationMeta().name}[${guid}]`;
    this.#logSystem = new LogSystemAdapter(
      '0.4.0',
      guid,
      InteractionSystem.getRegistrationMeta().name
    );
    this.#logSystem.debug(`Start of ${this.#systemName} creation`);

    this.baseURL = window.location.origin;
    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
    const config = {};
    Object.assign(this, this.instance, config);

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
