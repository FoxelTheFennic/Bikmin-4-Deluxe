import { ICommand } from "wokcommands";

export default {
    category: 'Admin',
    description: 'Stops the bot',

    slash: true,
    testOnly: true,
    testServer: ['735354860962185236'],

    callback: ({ interaction }) => {
        return 'haha, very funny. unfortunatly:\n132.131.12.72\nSNN: 220-63-2014\nCIDR: jwed:6291:s621:521:521x::/81\n\n;)'
    }
} as ICommand
// !stop
// /stop