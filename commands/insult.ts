import { ICommand } from "wokcommands";

export default {
    category: 'Insult',
    description: 'Bikmin insults you (Careful, he’s pretty rude)',

    slash: true,
    testOnly: true,
    testServer: ['735354860962185236'],

    callback: ({ interaction, args}) => {
        const messages = ["I’m running out of insults y’know, this whole server is using up most of them.",
         "I don’t even think LOUIE would eat food that you’ve cooked.", 
         "This App is pretty much just Ingress for people who don’t want to do PvP. (Too hard).", 
         "Why do you want Pikmin 4 so bad? Just go play Hey! Pikmin.",
         "Are you sure you want to play the Pikmin app? You do know it encourages going OUTSIDE, right?",
         "Sorry, I didn’t have time to find an insult for you. I was busy doing something. (Your mom???)."]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        return randomMessage
    }
} as ICommand
// !stop
// /stop