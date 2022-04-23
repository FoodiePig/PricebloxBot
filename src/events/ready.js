module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: 'PRIC£BLOX', type: 'LISTENING'}], status: 'dnd' });
	},
};