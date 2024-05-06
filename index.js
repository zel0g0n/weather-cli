const getArgs = require('./helpers/args')
const weatherCLI = () => {
  const arr = getArgs(process.argv)
  console.log(arr)
  if(args.h) {
    // help
  }

  if(args.t) {
    // save token
  }

  if(args.s) {
    // save city
  }
  //result
}
weatherCLI()