const { Command } = require('@oclif/command')

class SecretsCommand extends Command {
  async run () {
  }
}

SecretsCommand.description = 'Manage secrets by user'
SecretsCommand.flags = {}

module.exports = SecretsCommand
