import { AuthenticationClient } from "authing-node-sdk";

const AUTHING_APP_ID = process.env.AUTHING_APP_ID ?? "";
const AUTHING_APP_HOST = process.env.AUTHING_APP_HOST ?? "";

const authenticationClient = new AuthenticationClient({
  appId: AUTHING_APP_ID,
  appHost: AUTHING_APP_HOST,
});

export async function parseAccessToken(token: string) {
  const result = await authenticationClient.parseAccessToken(token);
  console.log(JSON.stringify(result));
}
