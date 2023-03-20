// noinspection XmlDeprecatedElement,HtmlDeprecatedTag

import { Command, Option } from 'commander'
import inquirer from 'inquirer'
import chalk from 'chalk'

import packageJson from '../package.json' assert { type: 'json' }
const version: string = packageJson.version

const app = new Command()

const receiver = (): void => {
  inquirer.prompt([
    { type: 'input', name: 'name', message: 'Your Name' }
  ])
    .then(answers => {
      const name: string = chalk.blue(answers.name)
      console.log(`Hello ${name}`)
    })
    .catch(error => {
      console.log(error)
    })
}

app.addOption(
  new Option('-d, --data <dir>', 'directory for the data exported from Spotify')
    .default('.')
    .env('SPOTIFY_DATA_DIRECTORY')
)

app.addOption(
  new Option('-c, --clientid <client-id>', 'the Client ID for Spotify\'s API')
    .env('SPOTIFY_CLIENT_ID')
)

app.addOption(
  new Option('-s, --clientsecret <client-secret>', 'the Client Secret for Spotify\'s API')
    .env('SPOTIFY_CLIENT_SECRET')
)

// Run the default receiver
app.action(receiver)

// Pull the version from package.json
app.version(version)

app.parse(process.argv)
