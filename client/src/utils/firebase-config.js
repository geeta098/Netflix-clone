
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB3RfzXVn_3mUd2PdGXkZut1MzFMai8W6k",
  authDomain: "netflix-project-af070.firebaseapp.com",
  projectId: "netflix-project-af070",
  storageBucket: "netflix-project-af070.appspot.com",
  messagingSenderId: "876992366624",
  appId: "1:876992366624:web:95c1d19fce798b85899445",
  measurementId: "G-DHVZLG6TMT"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)