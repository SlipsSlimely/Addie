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
            .setRequired(true))
        .addStringOption((option) =>
            option.setName('modifiers')
            .setDescription('The number of sides you want your dice to have')
            .setRequired(false)),


    async execute(interaction) {


        const diceCount = interaction.options.getString('dicetotal');
        const sideCount = interaction.options.getString('sides');
        const modifierCount = interaction.options.getString('modifiers');
        const diceCountArray = diceCount.split(" ");
        const sideCountArray = sideCount.split(" ");
        //const modifierCountArray = modifierCount.split(" ");
        let diceCountTrueArray = diceCountArray.map(Number);
        let diceCountTrue = 0;
/*         let diceOverseerArray = [
            diceCountArray,
            sideCountArray,
            modifierCountArray
        ] */
        counterLooper = 0;
        outputCounter = 0;
        const diceOutput = [];
        grandTotal = 0;
        //killNumber = Math.floor(Math.random()*(sideCount - 1 + 1))+1;

/*         for (let i = 0; i < diceCount; i++) {
            diceOutput[i] = Math.floor(Math.random()*(sideCount - 1 + 1))+1;
          } */
        
        for (let i = 0; i < diceCountArray.length; i++) {
            for (let i = 0; i < diceCountArray[counterLooper]; i++) {
                diceOutput[outputCounter] = Math.floor(Math.random()*(sideCountArray[counterLooper] - 1 + 1))+1;
                outputCounter = outputCounter + 1;
              }
              counterLooper = counterLooper + 1;
          }
        
        for (let i = 0; i < diceCountTrueArray.length; i++) {
            diceCountTrue = diceCountTrue + diceCountTrueArray[i];
          }

          
        for (let i = 0; i < diceOutput.length; i++) {
            grandTotal = grandTotal + diceOutput[i];
          }
        


                await interaction.reply({
                    content: `You rolled ${diceCountTrue} dice, the rolls added up to ${grandTotal}. The individual dice rolls are: ${diceOutput.toString()}`
                })

            }
          };
            


    
 
