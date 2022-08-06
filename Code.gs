function sendEmail(e) {
      var ss = SpreadsheetApp.getActiveSpreadsheet(); 
      var sheet = ss.getSheetByName("PENDAFTARAN"); // Provide your sheet name (located at the bottom of the google sheet page)
      var email = sheet.getRange(sheet.getLastRow(),3,1,1).getValue();  // get the range of last row, 3rd column, 1 row and 1 column (1x1) length.
      var id = sheet.getRange(sheet.getLastRow(),1,1,1).getValue(); // simillar to previous var
      var nama = sheet.getRange(sheet.getLastRow(),4,1,1).getValue();

     // var messages in HTML
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

      // Just for log. You may put another function to trigger a warning as google free account allows only 100 mail/day
         var emailQuotaRemaining = MailApp.getRemainingDailyQuota(); 
          Logger.log("Remaining email quota: " + emailQuotaRemaining);
      
      // Just for log again as you want to troubleshoot any errors
          console.log("emel::", email)
          console.log("id::", id)
          console.log("nama::", nama)
          Logger.log(message)
      
      // i have commented this as google have it limits on message length
        //MailApp.sendEmail(email, "TITLE OF EMAIL -"+id, {htmlBody: message}); 

      // Using option field to make sure no [blank][blank] error...
        var options = {};
            options.name = "Your-Sender-Name-if-not-this-will-be-your-default-name";
            options.htmlBody = message;

            MailApp.sendEmail(email, "TITLE OF EMAIL : "+id, "[nohtml]No HTML Message if htmlBody doesnt work"+id, options) 
        
}
