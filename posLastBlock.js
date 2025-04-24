const ethers = require('ethers')

// const url = 'https://gwan-ssl.wandevs.org:56891'
const url = 'http://192.168.1.179:22223'
const begin = 4046000
// const MainnetPow2PosUpgradeBlockNumber = 4046000
const account = "0x9da26fc2e1d6ad9fdd46138906b0104ae68a65d8"

async function main() {
  let httpProvider = new ethers.providers.JsonRpcProvider(url)

  let cur = await httpProvider.getBlockNumber()
  console.log("cur:", cur)
  let b = await httpProvider.getBlock(cur)
  let lastEpoch = parseInt(b.timestamp/86400);
  console.log("lastEpoch:", lastEpoch)
  let lastBlock = b

  let balance = await httpProvider.getBalance(account, 4062386)
  console.log("balance:", balance)

  // for(let i=cur; i>begin; i--) {
  //   let b = await httpProvider.getBlock(cur)
  //   let epochID = parseInt(b.timestamp/86400);
  //   if(epochID != lastEpoch) {
  //     try {
  //       await httpProvider.getBalance(account, i)
  //     }catch(err) {
  //       console.log("err:", err)
  //     }
  //     lastBlock = i
  //     lastEpoch = epochID
  //     console.log("lastEpoch:", lastEpoch)
  //     i -= 15000
  //   }
  // }
}


main()