const ethers = require('ethers')
const osmAbi = require('./abi/osm.json')

const osmAddr = '0x1E7450D5d17338a348C5438546f0b4D0A5fbeaB6'
const wkAddr =  '0xfdc69bc821fa8256b52a08f3ec2f60d71c8b5cd1'
async function main() {
    const url = "https://gwan-ssl.wandevs.org:56891"
    const httpProvider = new ethers.providers.JsonRpcProvider(url)
    const osm = new ethers.Contract(osmAddr, osmAbi, httpProvider)
    let info = await osm.getStoremanInfo(wkAddr)
    console.log("info:", info)
}



main()