//const Web3=require('web3')


// set provider for all later instances to use


App = {
  web3Provider: null,
  contracts: {},
  names: new Array(),
  url: 'http://127.0.0.1:8545',
  chairPerson:null,
  currentAccount:null,
  

  initWeb3: () =>{
        // Is there is an injected web3 instance?
    if (typeof web3 !== 'undefined') {
       App.web3Provider = window.ethereum;
      
    } else {
      // If no injected web3 instance is detected, fallback to the TestRPC
      App.web3Provider = new Web3.providers.HttpProvider(App.url);
      
    }
    
     web3 = new Web3(App.web3Provider);
    
    // web3.eth.defaultAccount=new Web3(new Web3.providers.HttpProvider(App.url)).eth.accounts[0];
    //votanti= await App.contracts.Ballot.deployed().then(function(instance){return instance.voters('0x376a0354307a484062ec7ed34b21772ccc7fdf67')}).then(function(i){primo=i.voted;})
    //console.log(votanti);
    
    //App.populateAddress();

    //const web3= new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    return App.initContract1(),App.initContract2();

  },

  initContract1 : function(){
      $.getJSON('build/contracts/Login.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      App.contracts.Login = TruffleContract(data);
      //console.log(App.contracts.Login)
      App.contracts.Login.setProvider(App.web3Provider);
      //App.contracts.Login.deployed().then(function(r){console.log(r)});
      App.contracts.Login.deployed().then(function(instance){result=instance;});
      
      
    }
  );
  },

  initContract2 : function(){
      $.getJSON('build/contracts/registrazione.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      App.contracts.registrazione = TruffleContract(data);
      // Set the provider for our contract
      App.contracts.registrazione.setProvider(App.web3Provider);
      App.contracts.registrazione.deployed().then(function(instance){result=instance;});
      
      //App.elenco_registrati();
      App.bindEvents();
      App.elenco_registrati();
    }
  );
  },


  bindEvents:   function() {
    $(document).on('click', '#registra',function(){
      let ind = $('#indirizzo').val();
      let mans = $('#mansione').val();
      App.register(ind,mans);
     
    });
  },

  register: async function(ind,mans){
    
    istanza = await App.contracts.registrazione.deployed().then(function(instance){return instance}); 
    //console.log(istanza.abi,istanza.address)
    mycontract= new web3.eth.Contract(istanza.abi,istanza.address);
    ind_organizzatore=  await web3.eth.getCoinbase();
    //console.log(ind_organizzatore)
    //setTimeout(100000);
    mycontract.methods.register(ind,mans).send({from: `${ind_organizzatore}`}, function(err,txhash){
    
    });
    
  },

  elenco_registrati: async function(){
    //console.log('pippo')
    //const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    //const NameContract = web3.eth.Contract(contract_abi, contract_address);
    let istanza = await  App.contracts.registrazione.deployed().then(function(instance){return instance}); 
    let abi= istanza.abi;
    let addr=istanza.address;
    // // // console.log(web3.version)
    // // console.log(web3.eth.Contract)
    let mycontract= new web3.eth.Contract(istanza.abi,istanza.address);
    
    for (let i=0;i<100;i++){
        try{
            ut= await mycontract.methods.lista_utenti(i).call();
            console.log(ut)
          }
          catch (error) {
            break;
          }
    }
    
    //App.bindEvents();
  
  },
 

  
};

$(function() {
  $(window).ready(function() {
    App.initWeb3();
    console.log('pino')
  });
});
