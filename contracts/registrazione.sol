// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "./Allevamento.sol";
import "./interfaces.sol";


struct   Utente{
        address  id;
        string  mansione;
        address  password;
        bool  check_reg;
        
} 

struct Allevatore{
     address id_allevatore;     // chiave pubblica dell'account
     uint lt_munti;
     uint id_lotto_munto;
     string luogo_mungitura;
     string data_mungitura;
}

struct Analista{
     
     address idAnalista;
     bool flagMalattie;
     uint phLatte;
     bool esitoTests;
     
}

struct bottiglia{
    uint squadraImbot;
    string tipoLatte; // parzialmente scremato ecc
    uint lottoBotForm;
    string dataScadenza;
}


struct formaggio{
    uint lottoBotForm;
    string dataScadenza;
    string nomeForm;
    uint numForma;
    string dataCaseificazione;
    string luogoCaseificazione;
    uint mesiStagionatura;
        
}

struct schedaLatte{
        uint progressivo;
        Allevatore datiAllevatore;    // utilizzando le struct si alleggerisce lo stack dunque la compilazione avviene più velocemente
        Analista analista;
        bool flagImbot;   // true se il latte è da imbottigliare, false se è da caseificare
        formaggio forma;
        bottiglia bot;
    }
    

contract Registrazione{
    
    Utente[] public lista_utenti;
    
    address public organizzatore;
    mapping (address => Utente) public utenti;       // chiave valore dell'utente corrente
    
    
    
    
    constructor(){
        organizzatore = msg.sender;       
    }
    
    
    function register(address indirizzo_utente, string memory mans) external{                //aggiungere il modificatore
        
        require(
             msg.sender == organizzatore                   // controllo che solo l'organizzatore possa registrare gli utenti
         );
        
        require(
            utenti[indirizzo_utente].check_reg == false   // controllo che l'utente non sia già registrato
        );
        
        require(
            keccak256(abi.encodePacked(mans)) == keccak256("Allevamento") || keccak256(abi.encodePacked(mans)) == keccak256("Caseificazione") || 
            keccak256(abi.encodePacked(mans)) == keccak256("Imbottigliamento") || keccak256(abi.encodePacked(mans)) == keccak256("Analisi")          // controllo mansione dell'utente
        );
        
        
        utenti[indirizzo_utente].id = indirizzo_utente;
        utenti[indirizzo_utente].mansione = mans;                  // aggiornamento dell'utente corrente
        utenti[indirizzo_utente].check_reg = true;
        lista_utenti.push(utenti[indirizzo_utente]);              // push sulla lista di tutti gli utenti
       
    }
    
    // function get_registrati() external view returns(Utente[] memory) {
    //     return lista_utenti;
        
    // }
    
    function get_schede(address _contractAddress) external view returns(schedaLatte[] memory){
        return Ischede(_contractAddress).get_schede();
    }
    
    
    
    
    
}
