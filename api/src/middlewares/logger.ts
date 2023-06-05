import morgan from "morgan";
import chalk from "chalk";

export default morgan((tokens, req, res) => {
    const colorMethod = (method: string) => {
        switch (method) {
            case 'GET': return chalk.bgBlue(` ${method} `)
            case 'POST': return chalk.bgYellow(` ${method} `)
            case 'PUT': return chalk.bgGreen(` ${method} `)
            case 'DELETE': return chalk.bgGrey(` ${method} `)
            default: return method
        }
    }

    const colorStatus = (status: number) => 
        status >= 500 ? chalk.red(status) :
            status >= 400 ? chalk.yellow(status) :
                status >= 300 ? chalk.cyan(status) :
                    status >= 200 ? chalk.green(status) :
                        chalk.grey(status);

    return [
        colorMethod(tokens.method(req, res) as string),
        colorStatus(parseInt(tokens.status(req, res) as string)),
        tokens.url(req, res),
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
})

