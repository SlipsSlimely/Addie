const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
    // This is the text the bot puts out in the console when it initially starts up
	execute(client) {
        console.log('Addie online!')
        client.user.setActivity("Chance Time"); 
	},
};