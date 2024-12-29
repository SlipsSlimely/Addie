//const { ActionRowBuilder, MessageButton, ButtonStyle, MessageActionRow, MessageEmbed, SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription("Rolls some dice for you!")
        .addStringOption((option) =>
            option.setName('dicetotal')
            .setDescription('This is the total number of dice you wish to roll')
            .setRequired(true))
        .addStringOption((option) =>
            option.setName('sides')
            .setDescription('The number of sides you want your dice to have')
            .setRequired(true)),


    async execute(interaction) {


        const diceCount = interaction.options.getString('dicetotal');
        const sideCount = interaction.options.getString('sides');
        const diceOutput = [];
        grandTotal = 0;
        //killNumber = Math.floor(Math.random()*(sideCount - 1 + 1))+1;

        for (let i = 0; i < diceCount; i++) {
            diceOutput[i] = Math.floor(Math.random()*(sideCount - 1 + 1))+1;
          }
        
        for (let i = 0; i < diceOutput.length; i++) {
            grandTotal = grandTotal + diceOutput[i];
          }
        


                await interaction.reply({
                    content: `You rolled ${diceCount} dice with ${sideCount} sides, the rolls added up to ${grandTotal}`
                })

            }
          };
            


    
 
