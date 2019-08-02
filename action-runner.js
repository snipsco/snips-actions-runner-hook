#!/usr/bin/node

const { spawn } = require('child_process')
const path = require('path')

const snipsActionRunnerBin = path.resolve(
  __dirname,
  'node_modules',
  '.bin',
  'snips-runner'
)
const snipsActionRunner = spawn(snipsActionRunnerBin, [], { encoding: 'utf-8' })

snipsActionRunner.stdout.on('data', function(chunk) {
  console.log('[actions-runner-hook]', chunk.toString())
})
snipsActionRunner.stderr.on('data', data => {
  console.log('[actions-runner-hook]', data)
})
snipsActionRunner.on('close', function(code) {
  console.log('[actions-runner-hook]', 'close code : ' + code)
})
snipsActionRunner.on('exit', code => {
  console.log('[actions-runner-hook]', 'exit code : ' + code)
  fs.close(fd, function(err) {
    if (err) {
      console.error(err)
    }
  })
})
