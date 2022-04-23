const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('group')
		.setDescription('Replies with a link to the group!'),
	async execute(interaction) {
		await interaction.reply('A link to the group is: https://www.roblox.com/groups/14577494/Priceblox-PLC#!/about');
	},
};