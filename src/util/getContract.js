import Web3 from 'web3'
import {address, ABI} from './constants/luckyContract'

let getContract = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    console.log("ABIIIIIII",ABI);
    let luckyContract = web3.eth.contract(ABI)
    console.log("CONTRACT ",luckyContract)
    let luckyContractInstance = luckyContract.at(address)
    resolve(luckyContractInstance)
})

export default getContract