// googleAuth.js
const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json'); // Store token securely!
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json'); // Path to your downloaded credentials

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        console.log('No saved token found.');
        return null;
    }
}

/**
 * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
    try {
        const content = await fs.readFile(CREDENTIALS_PATH);
        const keys = JSON.parse(content);
        const key = keys.installed || keys.web; // Adjust based on your credential type
        const payload = JSON.stringify({
            type: 'authorized_user',
            client_id: key.client_id,
            client_secret: key.client_secret,
            refresh_token: client.credentials.refresh_token,
        });
        await fs.writeFile(TOKEN_PATH, payload);
        console.log('Token saved to', TOKEN_PATH);
    } catch (err) {
         console.error('Error saving credentials:', err);
         throw new Error('Could not read credentials.json or save token.json. Ensure credentials.json exists.');
    }
}

/**
 * Load or request or authorization to call APIs.
 * You MUST run this once interactively (e.g., from a command line script)
 * to authorize the app and generate the initial token.json.
 */
async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        // Verify if the token is still valid (optional, google-auth-library often handles refresh)
         try {
             // Attempt a simple API call to check validity or refresh
             await client.getAccessToken();
             console.log('Using saved token.');
             return client;
         } catch (err) {
             console.log('Saved token likely expired or invalid, re-authenticating.');
             // Fall through to re-authenticate if refresh fails or token is bad
         }
    }
    // If no valid saved token, start the auth flow
    try {
        console.log('Starting authentication flow...');
        client = await authenticate({
            scopes: SCOPES,
            keyfilePath: CREDENTIALS_PATH,
        });
        if (client.credentials) {
            await saveCredentials(client);
            console.log('Authentication successful, token saved.');
        } else {
             console.error('Authentication failed: No credentials obtained.');
             throw new Error('Authentication failed.');
        }
        return client;
    } catch(err) {
        console.error("Error during authentication:", err);
        console.error("Ensure 'credentials.json' is in the correct path and is valid.");
        console.error("You might need to run this script interactively once to grant permissions via browser.");
        throw err; // Re-throw error to indicate failure
    }
}

module.exports = { authorize };
