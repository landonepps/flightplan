const shell = require('shelljs')

shell.exec(`npm --cwd "${__dirname}" run client`)
