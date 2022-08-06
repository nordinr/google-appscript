google-appscript > App Script for sending email using mailApp.sendMail() to every respond submitted in Google Form

1. Copy script to your g-appscript in google sheet (response)
2. Modify name of you sheet on line specified in the comment
3. Don't forget to add trigger using menu (on.submit) to the function (sendMail)

Info
==============
Instead of using default response email from google form. This code are able to select which row+column in the response sheet and send it to corresponding email.

Additional file.txt (in gsheet formula) generate recursive unique id after form being submitted. This is why i made my own script.
