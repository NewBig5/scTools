const ethers = require('ethers')
const tmAbi = require('./abi/tokenManager.json')
const wtAbi = require('./abi/mappingToken.json')

const url = 'https://gwan-ssl.wandevs.org:46891'
const priv = process.env.PK
const tmAddr = '0x017aB6485fF91C1A0a16B90E71f92B935B7213d3'
const wpTokenAddr = ''
const data = ["770",["0x0000000000000000000000000000000000000000","algorand","ALGO","6","2147483931"],"2147483931","0x0000000000000000000000000000000000000000","2153201998","0xF5D9FE62A64d5Ce624B351D3fc9C2E0599acdd0b"]

async function main() {
  let tx
  let httpProvider = new ethers.providers.JsonRpcProvider(url)
  let wallet = new ethers.Wallet(priv, httpProvider)

  let tokenManager = new ethers.Contract(tmAddr, tmAbi, httpProvider)
  tokenManager = tokenManager.connect(wallet)
  // let token = new ethers.Contract(wpTokenAddr, wtAbi, httpProvider)
  // token = token.connect(wallet)

  // tx = await token.transferOwner(tmAddr)
  // await tx.wait()
  // console.log("transferOwner:", tx)

  tx = await tokenManager.addTokenPair(...data)
  await tx.wait()
  console.log("addTokenPair:", tx)

  let info = await tokenManager.getTokenPairInfo(770)
  console.log("info:", info)
}


main()