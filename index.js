const { AkairoClient } = require("discord-akairo");

class ColorWarsBotClient extends AkairoClient {
	constructor() {
		super({
			ownerID: "317468487838728196"
		});
	}
}

const client = new ColorWarsBotClient();

client.login(process.env.ColorWarsBotToken);
