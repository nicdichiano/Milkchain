// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./registrazione.sol";
import "./Allevamento.sol";
import "./interfaces.sol";


contract Produzione{
    
   //  function getAllregistrati(address _contractAddress)  external view  returns(Utente[] memory) {
       
   //    return reg(_contractAddress).get_registrati();
      
        
   //  }

   
   function aggiornaBot(address _contractAddress,uint _progressivo,bottiglia memory _bot) external {
      
      Ischede(_contractAddress).aggiornaImbot( _progressivo, _bot);
       
   }
   
   function aggiornaCaseif(address _contractAddress,uint _progressivo,formaggio memory _forma) external {
      
      Ischede(_contractAddress).aggiornaCaseificazione( _progressivo,  _forma);
       
   }
   
   function get_schede(address _contractAddress) external view returns(schedaLatte[] memory){
       
       return Ischede(_contractAddress).get_schede();
   }
   

  
    
    
    
}