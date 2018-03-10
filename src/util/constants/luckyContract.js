const address = '0x86170783ac413b189be12017146acd9c981e3ff1'
const ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "companyMap",
		"outputs": [
			{
				"name": "companyName",
				"type": "string"
			},
			{
				"name": "balance",
				"type": "uint32"
			},
			{
				"name": "status",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MAXIMUM_SUPPLY",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"name": "productMap",
		"outputs": [
			{
				"name": "companyAddress",
				"type": "address"
			},
			{
				"name": "productId",
				"type": "uint32"
			},
			{
				"name": "promotionCount",
				"type": "uint32"
			},
			{
				"name": "status",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minimumSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lyAccount",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "barcodeMap",
		"outputs": [
			{
				"name": "barcodeId",
				"type": "bytes32"
			},
			{
				"name": "rewardAmountInWei",
				"type": "uint32"
			},
			{
				"name": "status",
				"type": "uint8"
			},
			{
				"name": "winner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokensMinted",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_companyAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_productId",
				"type": "uint32"
			}
		],
		"name": "AddProductEvent",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "registerCompany",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_checkerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_productId",
				"type": "uint32"
			},
			{
				"indexed": false,
				"name": "_barcodeNumber",
				"type": "uint32"
			},
			{
				"indexed": false,
				"name": "_coinAmount",
				"type": "uint32"
			}
		],
		"name": "UserWonEvent",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productId",
				"type": "uint32"
			},
			{
				"name": "_barcodeNumber",
				"type": "uint32"
			},
			{
				"name": "_rewardAmount",
				"type": "uint32"
			}
		],
		"name": "addBarcode",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productId",
				"type": "uint32"
			},
			{
				"name": "_promotionCount",
				"type": "uint32"
			}
		],
		"name": "addProduct",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "loadBalanceToCompany",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productId",
				"type": "uint32"
			},
			{
				"name": "_barcodeNumber",
				"type": "uint32"
			}
		],
		"name": "checkBarcode",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_productId",
				"type": "uint32"
			}
		],
		"name": "finishCampaign",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export {address, ABI}