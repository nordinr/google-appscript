Guide
===========
This was a project of registration submission using google form where everyone will be emailed their unique id, FRG-XXXX(Prefix can be modified) after their registration.

google-appscript > App Script for sending email using mailApp.sendMail() to every response submitted in Google Form

1. Copy script to your g-appscript in google sheet (response)
2. Modify name of you sheet on line specified in the comment
3. Don't forget to add trigger using menu (on.submit) to the function (sendMail)

Info
==============
Instead of using default response email from google form. This code are able to select which row+column in the response sheet and send it to the corresponding email (or you can specify it manually)

Additional file random-formula-for-sheet (gsheet formula) generate unique id after form being submitted.
