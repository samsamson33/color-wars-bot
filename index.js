const { AkairoClient } = require("discord-akairo");
const JSONBlob = require("jsonblob");

class ColorWarsBotClient extends AkairoClient {
	constructor() {
		super({
			ownerID: "317468487838728196"
		});

		this.JSONBlob = new JSONBlob(process.env.ColorWarsJSONBlobID);
	}

	async login() {
		this.data = await this.JSONBlob.getBlob();
	}

	async fetchData() {
		this.data = await this.JSONBlob.getBlob();
		return this.data;
	}

	async storeData() {
		const data = await this.JSONBlob.updateBlob(this.data);
		return data;
	}
}

const client = new ColorWarsBotClient();

client.login(process.env.ColorWarsBotToken);
