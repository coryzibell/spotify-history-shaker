import { Command } from 'commander'
import inquirer from 'inquirer'

const app = new Command()

const receiver = (): void => {
  inquirer.prompt([
    { type: 'input', name: 'name', message: 'Your Name' }
  ])
    .then(answers => {
      const name: string = answers.name
      console.log(`Hello ${name}`)
    })
    .catch(error => {
      console.log(error)
    })
}

app
  .version('1.0.0')
  .action(receiver)

app.parse(process.argv)
