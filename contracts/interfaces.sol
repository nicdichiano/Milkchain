// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./registrazione.sol";
import "./Allevamento.sol";
import "./login.sol";
import "./analisi.sol";

interface reg{
    
        // function get_registrati() external view returns(Utente[] memory); 
        function register(address indirizzo_utente, string memory mans) external;
}
    
interface Ischede{
    function get_schede() external view returns(schedaLatte[] memory);
    function aggiornaSchedaAnalisi(uint _progressivo,Analista memory) external;
    function aggiornaImbot(uint _progressivo, bottiglia memory _bot) external;
    function aggiornaCaseificazione(uint _progressivo, formaggio memory _forma) external;
    
}