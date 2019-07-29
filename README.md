Read Me file for React Contact Form.

React Contact Form -

Objective:
Create a reusable React component, that can be used on any website or application to embed a contact form on the page. 
The form should contain the following fields:

- Name
- Email Address
- Telephone Number
- Message

Once the user has entered their details and hit the “Submit” button, the data should be sent to a PHP script, which will store the information into a database table and send an email notification to a predefined email address.

Project Status: Incomplete

I researched and found code tutorials online and developed from there.
As I went through the code I retyped it and researched as I went.
This was to ensure I understood what each part did to contribute to the form.
The front end page will currently run and display with submit button (screenshot in repository).
Submitting data returns error:  http://localhost:8080/react-contact-form/api/contact/index.php net::ERR_CONNECTION_REFUSED
No data is stored or sent.
I believe the cause of this is either an error in my PHP script (index.php) or an issue with my project hierarchy (locations below).


Project Installation/creation:
Install MAMP or similar apache server host.
run "npm install" in cmd.
Change directory to the location you want to create the project.
For example, I used the server project root: (cd C:\MAMP\htdocs)
run "create-react-app" in cmd.
The react app has now been created in the requested location.
To make amendments to the front web page/form edit: "\react-contact-form\src\app.js"
To amend formatting: "\react-contact-form\src\app.css"
To create a back end to the form create the following folder path from your project: \api\contact
Then create an index.php file and use this as the form submit handler.


Installation and Setup Instructions:
Initially download all repository files to your machine.  
Use installation steps above to create project and rename "react-contact-form".

"Install MAMP or similar apache server host.
run "npm install" in cmd.
Change directory to the location you want to create the project.
For example, I used the server project root: (cd C:\MAMP\htdocs)
run "create-react-app" in cmd.
The react app has now been created in the requested location."

Copy the following files to the following locations overwriting originals:
App.js
\react-contact-form\src
App.css
\react-contact-form\src
index.php (You will need to create two folders for this one)
C:\MAMP\htdocs\react-contact-form\api\contact

I have also used Axios in the form handler, to install this run the following in CMD:
npm install axios

To Start Server:
npm start

To Visit App:
localhost:3000

To Visit Backend:
localhost


Application configured in App.js file. 
Edit this to make amendments to form fields/data capture.

All formatting configured in App.css file.
Edit this to make amendments to form format/style.

Application back end is configured in index.PHP
Edit this to make amendments to how the data is handled and where it is sent.

Tools used to create project:
npm install create-react-app
create-react-app
npm install axios
