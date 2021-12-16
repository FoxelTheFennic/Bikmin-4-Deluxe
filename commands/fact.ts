import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Fun',
    description: 'Tells you a fact about Pikmin',

    slash: true,
    testOnly: false,
    testServer: ['735354860962185236'],

    callback: ({ interaction, args, text}) => {
        const messages = ["During feeding, if you double tap a Pikmin the screen will zoom in on them! Nice way to keep an eye on your favourite, right?",
         "If you tap and hold your finger on a Pikmin, it picks them up and allows you to see their details and move them around!", 
         "When you send Pikmin to pick things up for you, you can actually run away and make them take longer to come back! I wouldn’t do that though, it’s just really mean and pointless.", 
         "Whilst in feeding mode, you can feed Pikmin your Nectar. But what you might not know, is you can throw Pikmin AND the Nectar by simply flicking either said Pikmin or said Nectar.",
         "Here’s one of my favourite facts, The Devs used pictures of their cats as placeholder images! SO WHOLESOME!! https://i.imgur.com/GBGWg22l.jpg"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

            const embed = new MessageEmbed()
            .setDescription(randomMessage)
            .setTitle("Fact")
            .setColor('GREEN')
            return embed
    }
} as ICommand