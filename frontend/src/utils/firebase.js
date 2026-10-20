
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fresherai2216.firebaseapp.com",
  projectId: "fresherai2216",
  storageBucket: "fresherai2216.firebasestorage.app",
  messagingSenderId: "349097076921",
  appId: "1:349097076921:web:2ca81a5e72b952507bd368",
  measurementId: "G-9F0R0G0P2F"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}

//Bhai, jab sir ne pehli baar Redis use karna start kiya tha,
//  tab flow ye tha ki user Google se login karta hai,
//  frontend Firebase se ID token leta hai aur Axios ke through Gateway ke /api/auth/login endpoint par bhejta hai; 
// Gateway request ko Auth Service tak proxy karta hai, jahan login controller Firebase Admin ke verifyIdToken(token) se token verify karta hai aur decoded.uid se MongoDB mein user ko find karta hai, ya user nahi milne par create karta hai. Uske baad backend crypto.randomUUID() se ek random sessionId generate karta hai, jo Firebase UID se alag hota hai, aur Redis mein session:${sessionId} key ke against user ki details—jaise MongoDB ka user._id, name, email aur interview coins—JSON ke form mein store karta hai, generally 7-day expiry ke saath. Phir backend browser ko session naam ki HTTP cookie deta hai, jisme ye random sessionId hota hai. Ab jab user future mein request bhejta hai, browser cookie automatically Gateway ko send karta hai; Gateway ka isAuth middleware req.cookies.session se session ID nikalta hai aur Redis mein session:${sessionId} search karta hai, jahan se usko pata chalta hai ki ye session kis user ka hai; phir middleware user details ko req.user mein attach karke next() call karta hai. Agar request /api/resume, /api/interview, /api/roadmap ya /api/billing ke liye hai, toh proxyWithHeaders req.user.userId lekar outgoing request mein x-user-id header add karta hai aur request relevant microservice ko forward karta hai. Lekin agar request /api/me ki hai, toh Gateway ka app.get("/api/me", isAuth, getCurrentUser) route isAuth ke baad directly getCurrentUser controller chalata hai, jo current user ki details frontend ko return karta hai; frontend mein getCurrentUser() function, jo user.api.js mein hai, Axios se /api/me call karta hai aur React user state ko update kar sakta hai, especially page refresh ke baad. Poora flow yaad rakh: Firebase ID token verify → MongoDB user find/create → random session ID generate → Redis mein session ID se user details store → browser cookie → future request → isAuth → Redis se user details → req.user → /api/me se current user response, ya proxyWithHeaders ke through protected microservice tak x-user-id.