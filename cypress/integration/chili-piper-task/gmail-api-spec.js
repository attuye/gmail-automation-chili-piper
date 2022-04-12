import createMessageJson from "../../support/util/encodedMessage";

describe("Gmail Main Features", function () {
  let access_token, id_token

    // beforeEach(function () {
    //    cy.loginByGoogleApi();
    // });

  it("cy.request() - Should be able to login", () => {
    // let access_token, id_token;
    cy.loginToGmail();
    cy.request({
      method: "POST",
      url: "https://www.googleapis.com/oauth2/v4/token",
      failOnStatusCode: false,
      body: {
        grant_type: "refresh_token",
        client_id: Cypress.env("googleClientId"),
        client_secret: Cypress.env("googleClientSecret"),
        refresh_token: Cypress.env("googleRefreshToken"),
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal("OK");
      expect(response.body).to.have.property("access_token");
      expect(response.body).to.have.property("id_token");
      access_token = response.body.access_token;
      id_token = response.body.id_token;
    });
  });
  it("cy.request() - Should be able to display user profile", function () {
    cy.loginToGmail();
    cy.request({
      method: "GET",
      url: "https://www.googleapis.com/oauth2/v3/userinfo",
      failOnStatusCode: false,
      headers: { Authorization: `Bearer ${access_token}` },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.email).to.equal("testchilipiper@gmail.com");
      expect(response.body.name).to.equal("Chili Piper");
    });
  });

  it("cy.request() - Should be able to display all my messages", () => {
    cy.request({
      method: "GET",
      url: "https://gmail.googleapis.com/gmail/v1/users/me/messages",
      failOnStatusCode: false,
      headers: { Authorization: `Bearer ${access_token}` },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("messages");
    });
  });

  it("cy.request() - Should be able to read a specific message", () => {
    cy.request({
      // 17ffb3744b8deed2 is the Id of the first inbox message
      method: "GET",
      url: "https://gmail.googleapis.com/gmail/v1/users/me/messages/17ffb3744b8deed2",
      failOnStatusCode: false,
      headers: { Authorization: `Bearer ${access_token}` },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("snippet");
      expect(response.body).to.have.property("threadId");
      expect(response.body.snippet).to.contain("Hi Chili, Welcome to Google.");
    });
  });

  it("cy.request() - Should be able to send message", () => {
    let message = createMessageJson();
    cy.request({
      method: "POST",
      url: "https://www.googleapis.com/gmail/v1/users/me/messages/send",
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${access_token}`,
        //  "Content-Type": "message/rfc822",
        "Content-Type": "application/json",
      },
      body: message,
    }).then((response) => {
      cy.log(response);
      expect(response.status).to.equal(200);
      expect(response.body.labelIds[0]).to.equal("SENT");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("threadId");
    });
  });
});