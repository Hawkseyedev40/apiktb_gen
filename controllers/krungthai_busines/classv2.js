/**
 * @fileoverview Node.js API Client for Authorization services.
 * This client is a conversion from the provided Java AuthorizationApi interface.
 * It uses Axios for making HTTP requests.
 */

// Import Axios for making HTTP requests
const axios = require('axios');

// --- API Configuration ---
// กำหนด Base URL สำหรับ API ของคุณ
// โปรดเปลี่ยน URL นี้ให้ตรงกับ API จริงของคุณ
const BASE_URL = 'https://business.krungthai.com/ktb/rest/biznext-channel'; // ตัวอย่าง Base URL

// สร้าง Axios instance ที่กำหนดค่าเริ่มต้น
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // เพิ่ม Headers อื่นๆ ที่พบในรูปภาพ หรือที่จำเป็นสำหรับการเรียก API
        // ค่าเหล่านี้มักจะเป็นค่าคงที่ หรืออาจมีการกำหนดแบบไดนามิกในแอปพลิเคชันจริง
        'User-Agent': 'okhttp/3.14.9', // ตัวอย่าง User-Agent จากรูปภาพ
        'X-Platform': 'android/12',    // ตัวอย่าง X-Platform จากรูปภาพ
        'X-Client-Version': '4.4.1',   // ตัวอย่าง X-Client-Version จากรูปภาพ
        'X-Device-ID': '5337dadf-0885-4411-b95c-14eb7785ea24-devc', // ตัวอย่าง X-Device-ID (ควรเป็นค่าจริงของอุปกรณ์)
        'X-Device-Model': 'samsung-SM-A065F', // ตัวอย่าง X-Device-Model (ควรเป็นค่าจริงของอุปกรณ์)
        'X-Channel-Id': 'MB',          // ตัวอย่าง X-Channel-Id จากรูปภาพ
        'Accept-Language': 'th-TH',    // ตัวอย่าง Accept-Language จากรูปภาพ
        'Accept': 'application/json, text/plain, */*', // ตัวอย่าง Accept จากรูปภาพ
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Authorization token ถูกจัดการโดย setAuthToken/clearAuthToken methods
        // 'X-Correlation-ID': 'cf7da406-b193-4374-8292-5fa264bbb130', // Correlation ID มักจะสร้างแบบไดนามิก
    },
});

/**
 * @typedef {Object} Aq2
 * Represents a generic success response or a simple acknowledgement.
 * (Based on the Java file, this seems to be a generic success type)
 * @property {string} message - ข้อความตอบกลับ (ตัวอย่าง)
 * @property {boolean} success - สถานะความสำเร็จ (ตัวอย่าง)
 */

// --- TypeScript/JSDoc Interfaces for Request and Response Entities ---
// These interfaces are inferred from the Java imports.
// You might need to adjust the properties based on the actual API documentation
// or the structure of your Java entity classes.

/**
 * @typedef {Object} TokenResponse
 * @property {string} accessToken - Access token.
 * @property {string} refreshToken - Refresh token.
 * @property {number} expiresIn - Token expiry time in seconds.
 * @property {string} tokenType - Type of the token (e.g., "Bearer").
 */

/**
 * @typedef {Object} BiometricUuidResponse
 * @property {string} biometricUuid - Unique ID for biometric authentication.
 */

/**
 * @typedef {Object} SetPinRequest
 * @property {string} newPin - New PIN to be set.
 * @property {string} oldPin - Old PIN (if changing).
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} TradeOnlineMFAAuthenticationRequest
 * @property {string} transactionId - Transaction ID.
 * @property {string} otp - One-Time Password.
 */

/**
 * @typedef {Object} SetPasswordRequest
 * @property {string} newPassword - New password to be set.
 * @property {string} activationCode - Activation code.
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} SetPasswordResponse
 * @property {boolean} success - Indicates if the password was set successfully.
 * @property {string} message - A message related to the operation.
 */

/**
 * @typedef {Object} MFAAuthenticationRequest
 * @property {string} challengeId - MFA challenge ID.
 * @property {string} response - User's response to the MFA challenge (e.g., OTP, biometric signature).
 */

/**
 * @typedef {Object} VerifyPasswordResetRequest
 * @property {string} verificationCode - Code received for password reset verification.
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} VerifyPasswordResetResponse
 * @property {boolean} verified - True if verification is successful.
 * @property {string} message - Verification message.
 */

/**
 * @typedef {Object} ResetPasswordRequest
 * @property {string} userId - User ID.
 * @property {string} newPassword - New password.
 * @property {string} verificationCode - Verification code.
 */

/**
 * @typedef {Object} ResetPinVerificationRequest
 * @property {string} verificationCode - Code received for PIN reset verification.
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} ResetPinVerificationResponse
 * @property {boolean} verified - True if verification is successful.
 * @property {string} message - Verification message.
 */

/**
 * @typedef {Object} PasswordActivationRequest
 * @property {string} activationCode - Activation code for password.
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} PasswordActivationResponse
 * @property {boolean} activated - True if activation is successful.
 * @property {string} message - Activation message.
 */

/**
 * @typedef {Object} PreloginResponse
 * @property {string} preloginToken - Token for pre-login operations.
 * @property {string} message - Pre-login message.
 */

/**
 * @typedef {Object} VerifyCredentialsRequest
 * @property {string} username - Username.
 * @property {string} password - Password.
 */

/**
 * @typedef {Object} VerifyCredentialsResponse
 * @property {boolean} verified - True if credentials are valid.
 * @property {string} message - Verification message.
 */

/**
 * @typedef {Object} VerifyBiometricsRequest
 * @property {string} biometricData - Biometric data (e.g., fingerprint hash).
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} VerifyBiometricsResponse
 * @property {boolean} verified - True if biometrics are valid.
 * @property {string} message - Verification message.
 */

/**
 * @typedef {Object} VerifyOtpRequest
 * @property {string} otp - One-Time Password.
 * @property {string} transactionId - Transaction ID.
 */

/**
 * @typedef {Object} BiometricActivationRequest
 * @property {string} biometricUuid - Biometric UUID to activate.
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} LogoutResponse
 * @property {boolean} success - True if logout was successful.
 * @property {string} message - Logout message.
 */

/**
 * @typedef {Object} MFAChallengeRequest
 * @property {string} challengeType - Type of MFA challenge (e.g., "OTP", "BIOMETRIC").
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} MFAChallengeResponse
 * @property {string} challengeId - ID of the generated challenge.
 * @property {string} challengeMessage - Message for the user (e.g., "Enter OTP sent to your phone").
 */

/**
 * @typedef {Object} GenerateOtpRequest
 * @property {string} userId - User ID for OTP generation.
 * @property {string} purpose - Purpose of the OTP (e.g., "LOGIN", "TRANSACTION").
 */

/**
 * @typedef {Object} GenerateOtpResponse
 * @property {string} transactionId - Transaction ID for the generated OTP.
 * @property {string} message - Confirmation message.
 */

/**
 * @typedef {Object} VerifyUserRequest
 * @property {string} username - Username to verify.
 * @property {string} nationalId - National ID (if applicable).
 */

/**
 * @typedef {Object} VerifyUserResponse
 * @property {boolean} verified - True if user is verified.
 * @property {string} message - Verification message.
 */

/**
 * @typedef {Object} VerifyPinRequest
 * @property {string} pin - PIN to verify.
 * @property {string} userId - User ID.
 */

/**
 * @typedef {Object} VerifyPinResponse
 * @property {boolean} verified - True if PIN is valid.
 * @property {string} message - Verification message.
 */

/**
 * @typedef {Object} GrantOtpRequest
 * @property {string} otp - One-Time Password.
 * @property {string} grantType - Grant type (e.g., "client_credentials").
 * @property {string} clientId - Client ID.
 */

/**
 * @typedef {Object} GrantOptResponse
 * @property {string} accessToken - Access token.
 * @property {string} refreshToken - Refresh token.
 */

/**
 * @typedef {Object} ResendPasswordRequest
 * @property {string} userId - User ID for resending password.
 */

/**
 * @typedef {Object} ResendPasswordResponse
 * @property {boolean} success - True if password resend was successful.
 * @property {string} message - Resend message.
 */

/**
 * @typedef {Object} AcceptTermsAndConditionsRequest
 * @property {string} userId - User ID.
 * @property {boolean} accepted - True if terms and conditions are accepted.
 */

/**
 * @typedef {Object} GenerateKeyResponse
 * @property {string} publicKey - Generated public key.
 * @property {string} keyId - Key identifier.
 */

/**
 * @typedef {Object} ResendStarterRequest
 * @property {string} userId - User ID for resending starter pack.
 */

/**
 * @typedef {Object} LoginRequest
 * Represents the request body for a custom login endpoint.
 * @property {string} password - User's password.
 * @property {string} pin - User's PIN.
 * // Note: devicesid, Device_Model, Device_Version, Device_Platform are typically sent as headers.
 * // They are included here as per the user's provided body example, but consider moving them to headers.
 */


/**
 * @class AuthorizationApiClient
 * A client for interacting with the Authorization API endpoints.
 */
class AuthorizationApiClient {
    /**
     * Sets the Authorization header for subsequent requests.
     * @param {string} token - The access token (e.g., Bearer token).
     * @param {string} Device - The access token (e.g., Bearer token).
     */
    setAuthToken(token,Device) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        apiClient.defaults.headers.common['X-Device-ID'] = `${Device}`;
    }

    /**
     * Clears the Authorization header.
     */
    clearAuthToken() {
        delete apiClient.defaults.headers.common['Authorization'];
    }

    /**
     * Refreshes token using PIN and refresh token.
     * Corresponds to Java's m8157A.
     * @param {string} refreshToken - Refresh token string.
     * @returns {Promise<TokenResponse>} - Promise resolving to TokenResponse.
     */
    async refreshTokenWithPin(refreshToken) {
        try {
            const response = await apiClient.post('v1/pin/grant?grant_type=refresh_token', null, {
                params: {
                    refresh_token: refreshToken
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error refreshing token with PIN:', error.message);
            throw error;
        }
    }

    /**
     * Generates a biometric UUID.
     * Corresponds to Java's m8158B.
     * @returns {Promise<BiometricUuidResponse>} - Promise resolving to BiometricUuidResponse.
     */
    async generateBiometricUuid() {
        try {
            const response = await apiClient.get('v1/auth/biometric/generation');
            return response.data;
        } catch (error) {
            console.error('Error generating biometric UUID:', error.message);
            throw error;
        }
    }

    /**
     * Sets a new PIN for the user.
     * Corresponds to Java's m8159a.
     * @param {SetPinRequest} setPinRequest - Request body for setting PIN.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async setPin(setPinRequest) {
        try {
            const response = await apiClient.post('v1/auth/pin/set', setPinRequest);
            return response.data;
        } catch (error) {
            console.error('Error setting PIN:', error.message);
            throw error;
        }
    }

    /**
     * Refreshes token using biometric and refresh token.
     * Corresponds to Java's m8160b.
     * @param {string} refreshToken - Refresh token string.
     * @returns {Promise<TokenResponse>} - Promise resolving to TokenResponse.
     */
    async refreshTokenWithBiometric(refreshToken) {
        try {
            const response = await apiClient.post('v1/biometric/grant?grant_type=refresh_token', null, {
                params: {
                    refresh_token: refreshToken
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error refreshing token with biometric:', error.message);
            throw error;
        }
    }

    /**
     * Refreshes token using password and refresh token.
     * Corresponds to Java's m8161c.
     * @param {string} refreshToken - Refresh token string.
     * @returns {Promise<TokenResponse>} - Promise resolving to TokenResponse.
     */
    async refreshTokenWithPassword(refreshToken) {
        try {
            const response = await apiClient.post('v1/password/grant?grant_type=refresh_token', null, {
                params: {
                    refresh_token: refreshToken
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error refreshing token with password:', error.message);
            throw error;
        }
    }

    /**
     * Performs MFA authentication for trade online.
     * Corresponds to Java's m8162d.
     * @param {TradeOnlineMFAAuthenticationRequest} tradeOnlineMFAAuthenticationRequest - Request body.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async tradeOnlineMFAAuthentication(tradeOnlineMFAAuthenticationRequest) {
        try {
            const response = await apiClient.post('v1/auth/mfa/trade-online-authentication', tradeOnlineMFAAuthenticationRequest);
            return response.data;
        } catch (error) {
            console.error('Error performing trade online MFA authentication:', error.message);
            throw error;
        }
    }

    /**
     * Sets the activation password.
     * Corresponds to Java's m8163e.
     * @param {SetPasswordRequest} setPasswordRequest - Request body for setting password.
     * @returns {Promise<SetPasswordResponse>} - Promise resolving to SetPasswordResponse.
     */
    async setActivationPassword(setPasswordRequest) {
        try {
            const response = await apiClient.post('v1/auth/activation/password/set', setPasswordRequest);
            return response.data;
        } catch (error) {
            console.error('Error setting activation password:', error.message);
            throw error;
        }
    }

    /**
     * Performs MFA authentication.
     * Corresponds to Java's m8164f.
     * @param {MFAAuthenticationRequest} mfaAuthenticationRequest - Request body.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async mfaAuthentication(mfaAuthenticationRequest) {
        try {
            const response = await apiClient.post('v1/auth/mfa/authentication', mfaAuthenticationRequest);
            return response.data;
        } catch (error) {
            console.error('Error performing MFA authentication:', error.message);
            throw error;
        }
    }

    /**
     * Verifies password reset.
     * Corresponds to Java's m8165g.
     * @param {VerifyPasswordResetRequest} verifyPasswordResetRequest - Request body.
     * @returns {Promise<VerifyPasswordResetResponse>} - Promise resolving to VerifyPasswordResetResponse.
     */
    async verifyPasswordReset(verifyPasswordResetRequest) {
        try {
            const response = await apiClient.post('v1/auth/password/reset/verification', verifyPasswordResetRequest);
            return response.data;
        } catch (error) {
            console.error('Error verifying password reset:', error.message);
            throw error;
        }
    }

    /**
     * Resets password.
     * Corresponds to Java's m8166h.
     * @param {ResetPasswordRequest} resetPasswordRequest - Request body.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async resetPassword(resetPasswordRequest) {
        try {
            const response = await apiClient.post('v1/auth/reset', resetPasswordRequest);
            return response.data;
        } catch (error) {
            console.error('Error resetting password:', error.message);
            throw error;
        }
    }

    /**
     * Verifies PIN reset.
     * Corresponds to Java's m8167i.
     * @param {ResetPinVerificationRequest} resetPinVerificationRequest - Request body.
     * @returns {Promise<ResetPinVerificationResponse>} - Promise resolving to ResetPinVerificationResponse.
     */
    async verifyPinReset(resetPinVerificationRequest) {
        try {
            const response = await apiClient.post('v1/auth/pin/reset/verification', resetPinVerificationRequest);
            return response.data;
        } catch (error) {
            console.error('Error verifying PIN reset:', error.message);
            throw error;
        }
    }

    /**
     * Grants password activation.
     * Corresponds to Java's m8168j.
     * @param {PasswordActivationRequest} passwordActivationRequest - Request body.
     * @returns {Promise<PasswordActivationResponse>} - Promise resolving to PasswordActivationResponse.
     */
    async grantPasswordActivation(passwordActivationRequest) {
        try {
            const response = await apiClient.post('v1/activation/password/grant?grant_type=client_credentials', passwordActivationRequest);
            return response.data;
        } catch (error) {
            console.error('Error granting password activation:', error.message);
            throw error;
        }
    }

    /**
     * Gets prelogin information.
     * Corresponds to Java's m8169k.
     * @returns {Promise<PreloginResponse>} - Promise resolving to PreloginResponse.
     */
    async getPreloginInfo() {
        try {
            // Assumed GET based on the path and lack of request body parameter
            const response = await apiClient.get('v1/prelogin/grant?grant_type=client_credentials');
            return response.data;
        } catch (error) {
            console.error('Error getting prelogin info:', error.message);
            throw error;
        }
    }

    /**
     * Verifies user credentials (password).
     * Corresponds to Java's m8170l.
     * @param {VerifyCredentialsRequest} verifyCredentialsRequest - Request body.
     * @returns {Promise<VerifyCredentialsResponse>} - Promise resolving to VerifyCredentialsResponse.
     */
    async verifyPasswordCredentials(verifyCredentialsRequest) {
        try {
            const response = await apiClient.post('v1/auth/password/verification', verifyCredentialsRequest);
            return response.data;
        } catch (error) {
            console.error('Error verifying password credentials:', error.message);
            throw error;
        }
    }

    /**
     * Grants biometric authentication.
     * Corresponds to Java's m8171m.
     * @param {VerifyBiometricsRequest} verifyBiometricsRequest - Request body.
     * @returns {Promise<VerifyBiometricsResponse>} - Promise resolving to VerifyBiometricsResponse.
     */
    async grantBiometric(verifyBiometricsRequest) {
        try {
            const response = await apiClient.post('v1/biometric/grant?grant_type=client_credentials', verifyBiometricsRequest);
          
          console.log(response)
          
          
            return response.data;
        } catch (error) {

          console.log(error)

            console.error('Error granting biometric:', error.message);
            throw error;
        }
    }

    /**
     * Verifies OTP.
     * Corresponds to Java's m8172n.
     * @param {VerifyOtpRequest} verifyOtpRequest - Request body.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async verifyOtp(verifyOtpRequest) {
        try {
            const response = await apiClient.post('v1/auth/otp/verification', verifyOtpRequest);
            return response.data;
        } catch (error) {
            console.error('Error verifying OTP:', error.message);
            throw error;
        }
    }

    /**
     * Activates biometric preferences for a profile.
     * Corresponds to Java's m8173o.
     * @param {BiometricActivationRequest} biometricActivationRequest - Request body.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async activateBiometricPreferences(biometricActivationRequest) {
        try {
            const response = await apiClient.post('v1/profile/preferences/biometric/activation', biometricActivationRequest);
            return response.data;
        } catch (error) {
            console.error('Error activating biometric preferences:', error.message);
            throw error;
        }
    }

    /**
     * Revokes access (logout).
     * Corresponds to Java's m8174p.
     * @returns {Promise<LogoutResponse>} - Promise resolving to LogoutResponse.
     */
    async revokeAccess() {
        try {
            const response = await apiClient.post('v1/access/revoke'); // Assuming POST for revoke
            return response.data;
        } catch (error) {
            console.error('Error revoking access:', error.message);
            throw error;
        }
    }

    /**
     * Requests an MFA challenge.
     * Corresponds to Java's m8175q.
     * @param {MFAChallengeRequest} mfaChallengeRequest - Request body.
     * @returns {Promise<MFAChallengeResponse>} - Promise resolving to MFAChallengeResponse.
     */
    async requestMFAChallenge(mfaChallengeRequest) {
        try {
            const response = await apiClient.post('v1/auth/mfa/challenge', mfaChallengeRequest);
            return response.data;
        } catch (error) {
            console.error('Error requesting MFA challenge:', error.message);
            throw error;
        }
    }

    /**
     * Generates an OTP.
     * Corresponds to Java's m8176r.
     * @param {GenerateOtpRequest} generateOtpRequest - Request body.
     * @returns {Promise<GenerateOtpResponse>} - Promise resolving to GenerateOtpResponse.
     */
    async generateOtp(generateOtpRequest) {
        try {
            const response = await apiClient.post('v1/auth/otp/generation', generateOtpRequest);
            return response.data;
        } catch (error) {
            console.error('Error generating OTP:', error.message);
            throw error;
        }
    }

    /**
     * Verifies user for activation.
     * Corresponds to Java's m8177s.
     * @param {VerifyUserRequest} verifyUserRequest - Request body.
     * @returns {Promise<VerifyUserResponse>} - Promise resolving to VerifyUserResponse.
     */
    async verifyUserForActivation(verifyUserRequest) {
        try {
            const response = await apiClient.post('v1/auth/activation/verify-user', verifyUserRequest);
            return response.data;
        } catch (error) {
            console.error('Error verifying user for activation:', error.message);
            throw error;
        }
    }

    /**
     * Grants PIN (client credentials).
     * Corresponds to Java's m8178t.
     * @param {VerifyPinRequest} verifyPinRequest - Request body.
     * @returns {Promise<VerifyPinResponse>} - Promise resolving to VerifyPinResponse.
     */
    async grantPinClientCredentials(verifyPinRequest) {
        try {
            const response = await apiClient.post('v1/pin/grant?grant_type=client_credentials', verifyPinRequest);
            return response.data;
        } catch (error) {
            console.error('Error granting PIN (client credentials):', error.message);
            throw error;
        }
    }

    /**
     * Grants OTP (client credentials).
     * Corresponds to Java's m8179u.
     * @param {GrantOtpRequest} grantOtpRequest - Request body.
     * @returns {Promise<GrantOptResponse>} - Promise resolving to GrantOptResponse.
     */
    async grantOtpClientCredentials(grantOtpRequest) {
        try {
            const response = await apiClient.post('v1/password/grant?grant_type=client_credentials', grantOtpRequest);
            return response.data;
        } catch (error) {
            console.error('Error granting OTP (client credentials):', error.message);
            throw error;
        }
    }

    /**
     * Resends activation password.
     * Corresponds to Java's m8180v.
     * @param {ResendPasswordRequest} resendPasswordRequest - Request body.
     * @returns {Promise<ResendPasswordResponse>} - Promise resolving to ResendPasswordResponse.
     */
    async resendActivationPassword(resendPasswordRequest) {
        try {
            const response = await apiClient.post('v1/auth/activation/password/resend', resendPasswordRequest);
            return response.data;
        } catch (error) {
            console.error('Error resending activation password:', error.message);
            throw error;
        }
    }

    /**
     * Accepts terms and conditions.
     * Corresponds to Java's m8181w.
     * @param {AcceptTermsAndConditionsRequest} acceptTermsAndConditionsRequest - Request body.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async acceptTermsAndConditions(acceptTermsAndConditionsRequest) {
        try {
            const response = await apiClient.post('v1/auth/accept-tnc', acceptTermsAndConditionsRequest);
            return response.data;
        } catch (error) {
            console.error('Error accepting terms and conditions:', error.message);
            throw error;
        }
    }

    /**
     * Generates PIN key.
     * Corresponds to Java's m8182x.
     * @returns {Promise<GenerateKeyResponse>} - Promise resolving to GenerateKeyResponse.
     */
    async generatePinKey() {
        try {
            const response = await apiClient.post('v1/auth/pin/key/generation'); // Assuming POST with no body
            return response.data;
        } catch (error) {
            console.error('Error generating PIN key:', error.message);
            throw error;
        }
    }

    /**
     * Generates password key.
     * Corresponds to Java's m8183y.
     * @returns {Promise<GenerateKeyResponse>} - Promise resolving to GenerateKeyResponse.
     */
    async generatePasswordKey() {
        try {
            const response = await apiClient.post('v1/auth/password/key/generation'); // Assuming POST with no body
            return response.data;
        } catch (error) {
            console.error('Error generating password key:', error.message);
            throw error;
        }
    }

    /**
     * Resends starter pack.
     * Corresponds to Java's m8184z.
     * @param {ResendStarterRequest} resendStarterRequest - Request body.
     * @returns {Promise<Aq2>} - Promise resolving to a generic success response.
     */
    async resendStarterPack(resendStarterRequest) {
        try {
            const response = await apiClient.post('v1/auth/activation/starter-pack/resend', resendStarterRequest);
            return response.data;
        } catch (error) {
            console.error('Error resending starter pack:', error.message);
            throw error;
        }
    }

    /**
     * Performs a custom login with password and PIN, including device information.
     * This method assumes a specific login endpoint (e.g., 'v1/auth/login').
     * You might need to adjust the endpoint based on the actual API documentation.
     * @param {LoginRequest} loginRequest - Request body for login.
     * @returns {Promise<TokenResponse>} - Promise resolving to a TokenResponse or similar success object.
     */
    async login(loginRequest) {
        try {
            // Note: devicesid, Device_Model, Device_Version, Device_Platform are often sent as headers.
            // If the API truly expects them in the body, keep them in loginRequest.
            // Otherwise, consider setting them as default headers on apiClient.
            const response = await apiClient.post('v1/auth/login', {
                password: loginRequest.password,
                pin: loginRequest.pin
            });
            return response.data;
        } catch (error) {
            console.error('Error during login:', error.message);
            throw error;
        }
    }
}

// Export the client for use in other modules
module.exports = new AuthorizationApiClient();

// --- Example Usage (Optional - uncomment to test) ---
/*
async function testApi() {
    const authClient = new AuthorizationApiClient();

    // Example: Custom Login
    const loginBody = {
        devicesid: "5337dadf-0885-4411-b95c-14eb7785ea24-devc",
        password: "Max#test123456",
        Device_Model: "samsung-SM-A065F",
        Device_Version: "4.4.1",
        Device_Platform: "android/12",
        pin: "231080"
    };

    // Set dynamic headers from the login body if the API expects them as headers
    apiClient.defaults.headers.common['X-Device-ID'] = loginBody.devicesid;
    apiClient.defaults.headers.common['X-Device-Model'] = loginBody.Device_Model;
    apiClient.defaults.headers.common['X-Client-Version'] = loginBody.Device_Version; // Assuming Device_Version maps to X-Client-Version
    apiClient.defaults.headers.common['X-Platform'] = loginBody.Device_Platform;

    try {
        console.log('Attempting to log in with custom body...');
        const loginResponse = await authClient.login(loginBody);
        console.log('Login Successful:', loginResponse);
        // You might want to store the access token here if the login response contains it
        // authClient.setAuthToken(loginResponse.accessToken);
    } catch (error) {
        console.error('Login Failed:', error.message);
    }

    // Example: Generate Biometric UUID
    try {
        console.log('\nGenerating Biometric UUID...');
        const biometricUuidRes = await authClient.generateBiometricUuid();
        console.log('Biometric UUID:', biometricUuidRes);
    } catch (error) {
        console.error('Failed to generate Biometric UUID:', error.message);
    }
}

// Uncomment the line below to run the example usage when this file is executed
// testApi();
*/
