import { Command } from 'commander'
import inquirer from 'inquirer'

const app = new Command()

const receiver = () => {
  inquirer.prompt([
    { type: 'input', name: 'name', message: 'Your Name' }
  ]).then(answers => {
    console.log(`Hello ${answers.name}`)
  })
}

app
  .version('1.0.0')
  .action(receiver)

app.parse(process.argv)
