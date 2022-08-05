function sendEmail(e) {

      var ss = SpreadsheetApp.getActiveSpreadsheet(); 
      var sheet = ss.getSheetByName("PENDAFTARAN");
      var email = sheet.getRange(sheet.getLastRow(),3,1,1).getValue(); 
      var id = sheet.getRange(sheet.getLastRow(),1,1,1).getValue();
      var nama = sheet.getRange(sheet.getLastRow(),4,1,1).getValue();




  //Logger.log(sheet.getLastRow() + " Is the last Row.");
  
  //var range = sheet.getLastRow()
  //var range2 = range.getRange();
  
  //Range Values
  //var data = getValues(range);
  //console.log(id);

     var message = "<HTML><BODY style=text-align:center>"

          + "Terima kasih "
          + "<b>"
          + nama
          + "</b>"
          + ", "
          + "<p>Pendaftaran berjaya, Nombor pendaftaran anda ialah : "
          + "<hr><br/></br>"
          + "<h1>"
          + id
          + "</h1>"
          + "<br/><hr>"
          + "<p>Sila pastikan anda mencetak nombor ini untuk rujukan nombor bertuah</p>"      
 
          + "</BODY></HTML>";

         var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
          Logger.log("Remaining email quota: " + emailQuotaRemaining);

          console.log("emel::", email)
          console.log("id::", id)
          console.log("nama::", nama)
          //console.log("mesej::", message)
          Logger.log(message)
        //MailApp.sendEmail(email, "FUN RIDE GEMAPUTRA -"+id, {htmlBody: message}); 

        var options = {};
options.name = "Urusetia Fun Ride Gemaputra";
options.htmlBody = message;
MailApp.sendEmail(email, "FUN RIDE GEMAPUTRA : "+id, "[nohtml]Terima kasih, no ID pendaftaran anda ialah"+id, options) 
        
    }






//   var named_values = e.namedValues
//   var values  = e.values
//   var recepient = named_values['Email Address']
//   // var id_values = e.values

//   var locations = [
// ["PENDAFTARAN",1,2,2],
// ];

  
//   var id  = named_values["ID"]

//   var body = "Terima kasih " + recepient + ". Pendaftaran berjaya. Nombor ID anda ialah " + id + "."

//   console.log("named_values::", named_values)
//   console.log("values::", values)
//   // console.log("rec::", recepient)
//   // console.log("id::", id)
  //  console.log("pendaf::", email)
//   MailApp.sendEmail(recepient, body)

//}
