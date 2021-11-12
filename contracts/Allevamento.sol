// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./registrazione.sol";
import "./interfaces.sol";

    
contract Allevamento{

  schedaLatte [] public schede;
    
//   function get_registrati_allevamento(address _contractAddress)  external view  returns(Utente[] memory) {
       
//       return reg(_contractAddress).get_registrati();
      
        
//     }
    

   
   function aggiornaScheda(Allevatore memory _datiAllevatore) external{
       
       schedaLatte memory scheda_singola;
       uint l;
       l=schede.length;
       if (l>0){
       scheda_singola.progressivo=schede[l-1].progressivo +1;
       }
       else{
           scheda_singola.progressivo=0;
       }
       scheda_singola.datiAllevatore.id_allevatore=msg.sender;
       scheda_singola.datiAllevatore.lt_munti=_datiAllevatore.lt_munti;
       scheda_singola.datiAllevatore.id_lotto_munto=_datiAllevatore.id_lotto_munto;
       scheda_singola.datiAllevatore.data_mungitura=_datiAllevatore.data_mungitura;
       scheda_singola.datiAllevatore.luogo_mungitura=_datiAllevatore.luogo_mungitura;
       
       
       schede.push(scheda_singola);
      
   }
   
   function aggiornaSchedaAnalisi(uint _progressivo,Analista memory _analista) external{
      

      schede[_progressivo].analista.idAnalista=msg.sender;
      schede[_progressivo].analista.phLatte=_analista.phLatte;
      schede[_progressivo].analista.esitoTests=_analista.esitoTests;
      schede[_progressivo].analista.flagMalattie=_analista.flagMalattie;
      
       
   }
   
   function aggiornaImbot(uint _progressivo,bottiglia memory _bot) external{
       schede[_progressivo].flagImbot = true;
       schede[_progressivo].bot.squadraImbot = _bot.squadraImbot;
       schede[_progressivo].bot.tipoLatte = _bot.tipoLatte;
       schede[_progressivo].bot.lottoBotForm = _bot.lottoBotForm;
       schede[_progressivo].bot.dataScadenza = _bot.dataScadenza;
   }
   
   function aggiornaCaseificazione(uint _progressivo, formaggio memory _forma) external{
       schede[_progressivo].flagImbot= false;
       schede[_progressivo].forma.lottoBotForm = _forma.lottoBotForm;
       schede[_progressivo].forma.dataScadenza = _forma.dataScadenza;
       schede[_progressivo].forma.nomeForm = _forma.nomeForm;
       schede[_progressivo].forma.numForma = _forma.numForma;
       schede[_progressivo].forma.dataCaseificazione = _forma.dataCaseificazione;
       schede[_progressivo].forma.luogoCaseificazione= _forma.luogoCaseificazione;
       schede[_progressivo].forma.mesiStagionatura = _forma.mesiStagionatura;
       
   }

   function get_schede() external view returns(schedaLatte[] memory){
       return schede;
   }
   
   function get_schede_filtro_munto(uint _id_lotto_munto) external view returns(schedaLatte[] memory){
       uint l;
       l=schede.length;
       schedaLatte [] memory schede_filtro=new schedaLatte[](l);
       uint i;
       uint j=0;
       for(i=0;i<l;i++){
           if (schede[i].datiAllevatore.id_lotto_munto == _id_lotto_munto){
               schede_filtro[j]=schede[i];
               j++;
           }
       }
       schedaLatte [] memory schede_filtro_stampa = new schedaLatte[](j);
       
       for (i=0;i<j;i++){
          schede_filtro_stampa[i] = schede_filtro[i];
       }
       return schede_filtro_stampa;
   }
   
   function getAllevatori() external view returns(Allevatore [] memory){
       uint l=schede.length;
       uint i;
       Allevatore [] memory allevatori= new Allevatore [](l);
       for (i=0;i<l;i++){
           allevatori[i] = schede[i].datiAllevatore;
       }
       
       return allevatori;    // per il momento facciamo restituire tutti i dati dell'allevatore per ciascuna scheda
       
   }
   
    
   
    
    
    
}