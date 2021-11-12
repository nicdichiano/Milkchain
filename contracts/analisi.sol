// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./registrazione.sol";
import "./Allevamento.sol";
import "./interfaces.sol";



contract Analisi{
    
    // function getAllregistrati(address _contractAddress)  external view  returns(Utente[] memory) {
       
    //   return reg(_contractAddress).get_registrati();
      
        
    // }
    

   
   function aggiorna(address _contractAddress,uint _progressivo, Analista memory _analista) external {
      
      Ischede(_contractAddress).aggiornaSchedaAnalisi(_progressivo, _analista);
       
   }
   
   function get_schede(address _contractAddress) external view returns(schedaLatte[] memory){
       
       return Ischede(_contractAddress).get_schede();
   }
   

  
    
    
    
}