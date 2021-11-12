//const { reducedPlanckConstantDependencies } = require('mathjs');
const Web3=require('web3')

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const { promises: fs } = require("fs");
//console.log(web3.eth)
// async function  pino()
//  {

// // //console.log(Web3.eth)
// // const accounts = await web3.eth.getAccounts();
// // const newAccount = web3.eth.accounts.privateKeyToAccount('0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709');
// // console.log("newAccount", newAccount);
// // await web3.eth.personal.unlockAccount(newAccount, 'test', 10000);
// // await web3.eth.getBalance(accounts[0], (err, bal) => { console.log("Ganache balance", bal); } );
// // //await web3.eth.sendTransaction({to:newAccount, from:accounts[0], value:web3.utils.toWei("5", "ether")});
// // //await web3.eth.getBalance(newAccount, (err, bal) => { console.log("New Account balance", bal); } );
// // await web3.eth.getAccounts().then(function(i){result=i;});
// // console.log(result[11]);

// accountsArray = await web3.eth.getAccounts();
// console.log(accountsArray)
// newAccount = await web3.eth.accounts.create();
// accountsArray.push(newAccount.address);
// console.log(newAccount)
// console.log(accountsArray)
// web3.eth.personal.newAccount('1')
//  }

 //pino()
//const ganache = require("ganache-core");
// const web3=new Web3(ganache.provider());
//console.log(web3.eth.accounts.create())
//data=[79,62,223,152,58,198,54,166,90,132,44,231,199,141,154,167,6,211,177,19,188,233,196,111,48,215,210,23,21,178,59,29]
// const raw_data= fs.readFileSync('keys.json');
// let chiavi= JSON.parse(raw_data);
// console.log(chiavi.private_keys['0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1'])


// data2=Buffer.from(data)
// indirizzo_input_privata='0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';
// console.log('0x'+data2.toString('hex')==indirizzo_input_privata);

async function lettura_credenziali(){
    //const privata_input='4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';
    const privata_input='b0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773';
    const raw_data = await fs.readFile('keys.json','utf-8');
    let chiavi= JSON.parse(raw_data);   
    let accountsArray = await web3.eth.getAccounts();
    const abi= [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "lista_utenti",
          "outputs": [
            {
              "internalType": "address",
              "name": "id",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "mansione",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "password",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "check_reg",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "organizzatore",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "utenti",
          "outputs": [
            {
              "internalType": "address",
              "name": "id",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "mansione",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "password",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "check_reg",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "indirizzo_utente",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "mans",
              "type": "string"
            }
          ],
          "name": "register",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_contractAddress",
              "type": "address"
            }
          ],
          "name": "get_schede",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "progressivo",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "id_allevatore",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "lt_munti",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "id_lotto_munto",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "luogo_mungitura",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "data_mungitura",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Allevatore",
                  "name": "datiAllevatore",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "idAnalista",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "flagMalattie",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "phLatte",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bool",
                      "name": "esitoTests",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct Analista",
                  "name": "analista",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "flagImbot",
                  "type": "bool"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "lottoBotForm",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "dataScadenza",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "nomeForm",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "numForma",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "dataCaseificazione",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "luogoCaseificazione",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "mesiStagionatura",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct formaggio",
                  "name": "forma",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "squadraImbot",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "tipoLatte",
                      "type": "string"
                    },
                    {
                      "internalType": "uint256",
                      "name": "lottoBotForm",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "dataScadenza",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct bottiglia",
                  "name": "bot",
                  "type": "tuple"
                }
              ],
              "internalType": "struct schedaLatte[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ];
      //console.log(web3.eth.contract)
    let mycontract= new web3.eth.Contract(abi,'0xCfEB869F69431e42cdB54A4F4f105C19C080A601');
    pippo= await mycontract.methods.lista_utenti(0).call();
    console.log(pippo)
    accountsArray = accountsArray.map(a => a.toLowerCase());
    for (let i=0;i<10;i++){
        if(chiavi.private_keys[accountsArray[i]] == privata_input){
            console.log('La chiave privata inserita si riferisce al seguente account: '+accountsArray[i]);
            return;
        }
    }
    console.log('Chiave privata non valida')



}
lettura_credenziali()

//ganache-cli -d --db "C:\Users\Utente01\Desktop\azienda_cyber\Milkchain\blockchain_privata" 

// async function retrieve_data(){
//     let instance = await registrazione.deployed();
//     let lista= await instance.lista_utenti.call();
//     console.log(lista)
// }
// retrieve_data()