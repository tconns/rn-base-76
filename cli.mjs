import inquirer from 'inquirer'
import { spawn } from 'child_process'
// import path from 'path'
// import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
const questions = [
  {
    name: 'Init',
    message: 'What do you want to do?',
    type: 'list',
    choices: ['Generate Type StyleSheet', 'Start Server', 'Build', 'Bundle'],
  },
  {
    name: 'Build',
    type: 'list',
    message: 'Which platform do you want to build?',
    when: (answers) => answers['Init'] === 'Build',
    choices: ['Build Android', 'Build iOS'],
  },
  {
    name: 'Bundle',
    type: 'list',
    message: 'Which platform do you want to Bundle on?',
    when: (answers) => answers['Init'] === 'Bundle',
    choices: ['Bundle Android', 'Bundle iOS'],
  },
]

function runCommand(cmd, args) {
  const spawned = spawn(cmd, args, { stdio: 'inherit', shell: true })

  spawned.on('error', (error) => {
    console.error(`Error: ${error}`)
  })
  spawned.on('exit', (code, signal) => {
    console.log(`Process exited with code ${code} and signal ${signal}`)
  })
}

inquirer.prompt([...questions]).then(async (answers) => {
  function runCommandWithAnswers(command, answers) {
    const commandsMap = {
      'Generate Type StyleSheet': ['generate:type-class'],
      'Start Server': ['start:server'],
      Build: {
        'Build Android': ['android'],
        'Build iOS': ['ios'],
      },
      Bundle: {
        'Bundle Android': ['bundle:android'],
        'Bundle iOS': ['bundle:ios'],
      },
    }

    const commandToRun = commandsMap[command]

    if (Array.isArray(commandToRun)) {
      commandToRun && runCommand('yarn', commandToRun)
    } else if (typeof commandToRun === 'object') {
      const answerKey = answers[command]
      const answerCommand = commandToRun[answerKey]
      answerCommand && runCommand('yarn', answerCommand)
    } else if (typeof commandToRun === 'function') {
      commandToRun(answers)
    }
  }

  runCommandWithAnswers(answers['Init'], answers)
})
