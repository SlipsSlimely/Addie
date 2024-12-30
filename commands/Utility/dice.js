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
            .setDescription('Any modifiers you want for the dice')
            .setRequired(false)),


    async execute(interaction) {


        const diceCount = interaction.options.getString('dicetotal'); //The input number of dice
        const sideCount = interaction.options.getString('sides'); //The input sides of each group of dice
        let modifierCount = interaction.options.getString('modifiers'); // Any input modifiers

        //If modifiers never gets input, give it a blank input to keep things from breaking
        if (modifierCount == null)
        {
            modifierCount = "0";
        }

        //Transferring the input information above into arrays
        const diceCountArray = diceCount.split(" "); 
        const sideCountArray = sideCount.split(" ");
        const modifierCountArray = modifierCount.split(" ");

        //Remap two of the above arrays to be integer based
        let modifierCountTrueArray = modifierCountArray.map(Number);
        let diceCountTrueArray = diceCountArray.map(Number);

        let diceCountTrue = 0;
        counterLooper = 0;
        outputCounter = 0;
        const diceOutput = [];
        let diceReadout = [];
        grandTotal = 0;
        groupNumber = 1;

        //Fill in the modifier array to be as long as the other arrays to prevent crashes or math issues
        if (modifierCountTrueArray.length == 0 || modifierCountTrueArray.length < diceCountArray.length)
        {
            for (let i = 0; i < diceCountArray.length + 1; i++) {
                if (modifierCountTrueArray[i] == 0)
                {
                    modifierCountTrueArray[i] = modifierCountTrueArray[i];
                }
                else{
                    modifierCountTrueArray.push(0);
                }
              }
        }

        //Roll all of the dice and add any modifiers
        for (let i = 0; i < diceCountArray.length; i++) {
            diceReadout.push(" Group " + groupNumber + " ");
            for (let i = 0; i < diceCountArray[counterLooper]; i++) {
                diceOutput[outputCounter] = Math.floor(Math.random()*(sideCountArray[counterLooper] - 1 + 1))+1 + modifierCountTrueArray[counterLooper];
                diceReadout.push(diceOutput[outputCounter])
                outputCounter = outputCounter + 1;
              } 
              counterLooper = counterLooper + 1;
              groupNumber = groupNumber + 1;
          }
        

        // Add up all of the actual dice rolled so the total can be output to the user  
        for (let i = 0; i < diceCountTrueArray.length; i++) {
            diceCountTrue = diceCountTrue + diceCountTrueArray[i];
          }

        // Add up all the results of each rolled die so the user has a total score  
        for (let i = 0; i < diceOutput.length; i++) {
            grandTotal = grandTotal + diceOutput[i];
          }
        

                // Output everything to the user
                await interaction.reply({
                    content: `You rolled ${diceCountTrue} dice, the rolls added up to ${grandTotal}. The individual dice rolls are: ${diceReadout.toString()}`
                })

            }
          };
            


    
 
