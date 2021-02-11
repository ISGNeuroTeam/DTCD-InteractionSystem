import {BaseAdapter} from './BaseAdapter';

export class InteractionSystemAdapter extends BaseAdapter {
	/**
	 * @constructor
	 */
	constructor() {
		super();
		this.instance = this.getSystem('InteractionSystem');
	}

	/**
	 * Sends GET request to the given url with config
	 * @param {String} url url of API endpoint
	 * @param {Object} config axios request config
	 * @returns {Object} response object
	 */
	GETRequest(url, config = {}) {
		return this.instance.GETRequest(url, config);
	}

	/**
	 * Sends POST request to the given url with the given data and config
	 * @param {String} url url of API endpoint
	 * @param {Object} data body data object
	 * @param {Object} config axios request config
	 * @returns {Promise<any>} response object
	 */
	POSTRequest(url, data, config = {}) {
		return this.instance.POSTRequest(url, data, config);
	}

	/**
	 * Sends PUT request to the given url with the given data and config
	 * @param {String} url url of API endpoint
	 * @param {Object} data body data object
	 * @param {Object} config axios request config
	 * @returns {Promise<any>} response object
	 */
	PUTRequest(url, data, config = {}) {
		return this.instance.PUTRequest(url, data, config);
	}

	/**
	 * Sends DELETE request to the given url with the given data and config
	 * @param {String} url url of API endpoint
	 * @param {Object} data body data object
	 * @param {Object} config axios request config
	 * @returns {Promise<any>} response object
	 */
	DELETERequest(url, data, config = {}) {
		return this.instance.DELETERequest(url, data, config);
	}
}
