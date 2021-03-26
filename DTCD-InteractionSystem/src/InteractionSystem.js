import axios from 'axios';
import {SystemPlugin} from '../../DTCD-SDK/index';

export class InteractionSystem extends SystemPlugin {
	static getRegistrationMeta() {
		return {
			type: 'core',
			title: 'Система взаимодействия',
			name: 'InteractionSystem',
			version: '0.2.2',
			withDependencies: false,
			priority: 4,
		};
	}

	constructor() {
		super();
		this.baseURL = window.location.origin;
		this.instance = axios.create({
			baseURL: this.baseURL,
			headers: {'Access-Control-Allow-Origin': '*'},
		});
		const config = {};
		Object.assign(this, this.instance, config);
	}

	async GETRequest(url, config = {}) {
		const response = await this.instance.get(url, config);
		return response;
	}

	async POSTRequest(url, data, config = {}) {
		const response = await this.instance.post(url, data, config);
		return response;
	}

	async PUTRequest(url, data, config = {}) {
		const response = await this.instance.put(url, data, config);
		return response;
	}

	async DELETERequest(url, data, config = {}) {
		const response = await this.instance.delete(url, data, config);
		return response;
	}
}
