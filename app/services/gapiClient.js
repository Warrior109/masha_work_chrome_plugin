// Takes items for work from the google spreadsheer
const API_KEY = 'AIzaSyANqDimeqNp5ELZ1aZIsR408evRyVeC9Tk';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// REAL
const SPREADSHEET_ID = '1fZ24GlBgYEA76ik_Tf8yN1Nyp0u6L2EHMZC-GreqGJM';
// TEST
// const SPREADSHEET_ID = '1WwH1Ahfx39QV5NkgHxe7I7AmdyipFY4X_plCARkrMlA';
const SPREADSHEET_NAMES = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень',
                           'серпень', 'вересень', 'жовтень', 'листопад', 'лютий'];

let GApiClient = {
  init: () => {
    gapi.client.init({
      // Don't pass client nor scope as these will init auth2, which we don't want
      // clientId: CLIENT_ID,
      // scope: SCOPES,
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
    }).then(function () {
      console.log('gapi initialized')
    }, function(error) {
      console.log('error', error)
    });
  },

  loadTasksSheet: function (afterLoadCallback) {
    let spreadsheetName = SPREADSHEET_NAMES[new Date().getMonth()]

    // Get token
    chrome.identity.getAuthToken({interactive: true}, (token) => {
      // Set token in GAPI library
      gapi.auth.setToken({
        'access_token': token,
      })

      // Append values
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: spreadsheetName
      }).then((response) => {
        afterLoadCallback(response.result.values);
      });
    })
  },
};

export default GApiClient;
