**Description:** 
This project aims to provide a user-friendly interface for monitoring data fetched from the DataDog API. Users can view existing monitors in tabular format, create new monitors via a form, and receive updates on monitor events in real-time. 

**APP Component:**
• It is responsible for rendering other components, including the Table component and the Form component.
• The App component fetches monitor data from the DataDog API and passes it as props to the Table component for display.
• It also contains the logic for updating monitor data when a new monitor is created using the Form component.

**Form Component:**
• The Form component is responsible for rendering a form to create new monitors.
• It includes input fields for providing the message, name, query, and type of the monitor.
• The form submission triggers an API call to create a new monitor using the provided data.
• Input fields are validated to ensure all required fields are filled before submission.

**Table Component:**
• The Table component displays monitor data fetched from the DataDog API in tabular format.
• It receives monitor data as props from the App component and maps it to rows in the table.
• Each row in the table represents a monitor and displays its name, type, message, query, and owner.
• Input fields are validated to ensure all required fields are filled before submission.
• If no monitor data is available, a message indicating "No Data Found" is displayed.

**NOTE:** (Run Server before launching the application to fetch the Data and update the data) 
I have created proxy server acts as an intermediary between client applications and the DataDog API to avoid CORS Errors.
 
1. Clone https://github.com/Santhanam-M/Spritle_Proxy_Server.git repository to your local machine. 
2. Install dependencies using npm install. 
3. Create a .env file in the root directory and add DataDog API key and application key.