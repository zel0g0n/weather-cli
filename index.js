const getArgs = require('./helpers/args')
const weatherCLI = () => {
  const args = getArgs(process.argv)
  console.log(args)

  if(args.h) {
    // help
  }

  if(args.t) {
    // save token
  }

  if(args.s) {
    // save city
  }

}

weatherCLI()