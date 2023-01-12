import { AuthenticationClient } from "authing-node-sdk";

const AUTHING_APP_ID = process.env.AUTHING_APP_ID ?? "";
const AUTHING_APP_HOST = process.env.AUTHING_APP_HOST ?? "";

const authenticationClient = new AuthenticationClient({
  appId: AUTHING_APP_ID,
  appHost: AUTHING_APP_HOST,
});

export async function signInByUsernamePassword(params: {
  username: string;
  password: string;
}) {
  const result = await authenticationClient.signInByUsernamePassword({
    username: params.username,
    password: params.password,
    options: { scope: "openid profile offline_access" },
  });
  console.log(JSON.stringify(result.data));
  return;
}
