Test plan to automate Gmail API
# Scope of testing
# Features/Endpoints to be tested
1. Login
2. View User Information/Profile
3. View All Messages
4. Read specific Message
5. Send Message

# Why to test the above features
1. Login: This is the main feature of gmail to access all other features.
2. View User Information/Profile: The logged user should be able to see the correct information entered by herself/himself.
3. View All Messages: The logged user should be able to read both inbox and Sent messages
4. Read specific Message: User should be able to open and read a specific message
5. Send Message: User should be able to send message to others.

# How to run locally
1. Clone the repository: git clone https://github.com/attuye/gmail-automation-chili-piper.git
2. Go to the root directory
3. Install all dependencies: npm install
4. Open terminal and start the Mimic app: npm start
5. Open another terminal and start Cypress: npx cypress open
6. Click the test case on Cypress dashboard and see the result

# Additional Point
I tried to create a simple app that can imitate gmail, but i could not finish it coz I do not have a background with development.

# References
1. https://docs.cypress.io/guides/testing-strategies/google-authentication#What-you-ll-learn
2. https://stackoverflow.com/questions/29119350/google-rest-api-message-in-an-rfc-2822-formatted-and-base64url-encoded-string?noredirect=1&lq=1
3. https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/
4. https://www.youtube.com/watch?v=PYWS-4CXETw
5. https://auth0.com/blog/complete-guide-to-react-user-authentication/
6. And many more......................