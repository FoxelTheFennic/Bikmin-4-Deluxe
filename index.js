import DiscordJS, { Application, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

// Tells discord we are using the following intents
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('bot is ready!')
// replace guildId with your testing server id
    const guildId = '735354860962185236'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands= guild.commands
    } else {
        commands= client.application?.commands
    }
// creates command names and description
    commands?.create({
        name: 'stop',
        description: 'Stops the bot'
    })

    commands?.create({
        name: 'childslavery',
        description: 'forces a 2 year old to do match for you',
        options: [
            {
                name: 'num1',
                description: 'The first number.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })
})
// checks if interaction is one of our commands
client.on('interactionCreate', (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

// code for stop command
    if (commandName === 'stop') {
        interaction.reply({
            content: 'haha, very funny. unfortunatly:\n132.131.12.72\nSNN: 220-63-2014\nCIDR: jwed:6291:s621:521:521x::/81\n\n;)',
            ephemeral: true,
        })
// code for childslavery command
    } else if (commandName === 'childslavery') {
        const num1 = options.getNumber('num1') || 0
        const num2 = options.getNumber('num2') || 0

        interaction.reply({
            content: `The child says its ${num1 + num2} (its probably wrong though, cause it is a stupid child)`,
            ephemeral: true,
        })
    }
})

client.login(process.env.TOKEN)