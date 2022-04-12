import { faker } from "@faker-js/faker";

function createMessageJson() {
    const body = faker.lorem.paragraph()
  const messages = [
    "From: Chili Piper <testchilipiper@gmail.com>",
    "To: Attu <mabubeker@excellerentsolutions.com>",
    "Content-Type: text/html; charset=utf-8",
    "MIME-Version: 1.0",
    "Subject: Gmail API test",
    "",
    body,
    "\n",
    "Thank you",
    "\n",
    "Chili Piper"
  ];

  function encodedMessage() {
    return Buffer.from(messages.join("\n"))
      .toString("base64")
    //   .replace(/\+/g, "-")
    //   .replace(/\//g, "_")
    //   .replace(/=+$/, "");
  }

  return JSON.stringify({
    raw: encodedMessage(),
  });
  //  return raw+ encodedMessage()
}

console.log(createMessageJson());

export default createMessageJson;
