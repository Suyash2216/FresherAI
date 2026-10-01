//setup of firbase Admin with our server so that we can use firbase in our project
import { initializeApp, cert } from "firebase-admin/app";

import serviceAccount from "../serviceAccountKey.json" with { type: "json" };

export const app = initializeApp({
  credential: cert(serviceAccount),
});
