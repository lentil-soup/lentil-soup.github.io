//Global variables to access the calendar
     clientId = 'asmithh99@gmail.com',
     scopes = 'https://www.googleapis.com/auth/calendar',
     calendarId = 'asmithh99@gmail.com',
     eventsList = [];


//Autorize the user
    checkAuth();

      //authorization in google
      function checkAuth() {
         gapi.auth.authorize(
            {
               'client_id': clientId,
               'scope': scopes,
               'immediate': true
            }, handleAuthResult);
      }

      //checks if authorized
      function handleAuthResult(authResult) {

         if (authResult && !authResult.error) {
            loadCalendarApi();
         } else {
            handleAuthClick();
         }
      }

      //request credentials
      function handleAuthClick() {
         gapi.auth.authorize(
            {
               client_id: clientId,
               scope: scopes,
               immediate: false
            }, handleAuthResult);
         return false;
      }

     function loadCalendarApi() {

         gapi.client.load('calendar', 'v3', makeApiCall);

      }`