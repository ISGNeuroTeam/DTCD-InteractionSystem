import {InteractionSystem} from '../src/InteractionSystem';

describe('InteractionSystem:getRegistrationMeta', () => {
	test('should be defined', () => {
		expect(InteractionSystem.getRegistrationMeta).toBeDefined();
	});
});

describe('InteractionSystem:GETRequest', () => {
	let is = new InteractionSystem();
	is.instance.get = jest.fn();

	it('fetches successfully data from an API', async () => {
		const data = {
			data: {
				hits: [
					{
						objectID: '1',
						title: 'a',
					},
					{
						objectID: '2',
						title: 'b',
					},
				],
			},
		};

		is.instance.get.mockImplementationOnce(() => Promise.resolve(data));

		await expect(is.GETRequest('react')).resolves.toEqual(data);
	});

	it('fetches erroneously data from an API', async () => {
		const errorMessage = 'Network Error';

		is.instance.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

		await expect(is.GETRequest('react')).rejects.toThrow(errorMessage);
	});
});

describe('InteractionSystem:POSTRequest', () => {
	let is = new InteractionSystem();
	is.instance.post = jest.fn();

	it('fetches successfully data from an API', async () => {
		const data = {
			data: {
				hits: [
					{
						objectID: '1',
						title: 'a',
					},
					{
						objectID: '2',
						title: 'b',
					},
				],
			},
		};

		is.instance.post.mockImplementationOnce(data => Promise.resolve('success'));

		await expect(is.POSTRequest(data)).resolves.toEqual('success');
	});

	it('fetches erroneously data from an API', async () => {
		const errorMessage = 'Network Error';

		is.instance.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

		await expect(is.POSTRequest({data: 123})).rejects.toThrow(errorMessage);
	});
});

describe('InteractionSystem:PUTRequest', () => {
	let is = new InteractionSystem();
	is.instance.put = jest.fn();

	it('fetches successfully data from an API', async () => {
		const data = {
			data: {
				hits: [
					{
						objectID: '1',
						title: 'a',
					},
					{
						objectID: '2',
						title: 'b',
					},
				],
			},
		};

		is.instance.put.mockImplementationOnce(data => Promise.resolve('success'));

		await expect(is.PUTRequest(data)).resolves.toEqual('success');
	});

	it('fetches erroneously data from an API', async () => {
		const errorMessage = 'Network Error';

		is.instance.put.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

		await expect(is.PUTRequest({data: 123})).rejects.toThrow(errorMessage);
	});
});

describe('InteractionSystem:DELETERequest', () => {
	let is = new InteractionSystem();
	is.instance.delete = jest.fn();

	it('fetches successfully data from an API', async () => {
		const data = {
			data: {
				hits: [
					{
						objectID: '1',
						title: 'a',
					},
					{
						objectID: '2',
						title: 'b',
					},
				],
			},
		};

		is.instance.delete.mockImplementationOnce(data => Promise.resolve('success'));

		await expect(is.DELETERequest(data)).resolves.toEqual('success');
	});

	it('fetches erroneously data from an API', async () => {
		const errorMessage = 'Network Error';

		is.instance.delete.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

		await expect(is.DELETERequest({data: 123})).rejects.toThrow(errorMessage);
	});
});
