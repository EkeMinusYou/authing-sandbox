import { ManagementClient } from 'authing-node-sdk';

const ACCESS_KEY = process.env.ACCESS_KEY ?? ""
const ACCESS_KEY_SECRET = process.env.ACCESS_KEY_SECRET ?? ""

const PHONE_NUMBER = process.env.PHONE_NUNBER

const managementClient = new ManagementClient({
  accessKeyId: ACCESS_KEY,
  accessKeySecret: ACCESS_KEY_SECRET,
});

export async function createUser() {
  const user = await managementClient.createUser({
    phone: PHONE_NUMBER
  })
  console.log(user)
}