

//@ts-ignore
export const firebaseimport = async (service: "app" | "firestore" | "auth") => import(`https://www.gstatic.com/firebasejs/9.13.0/firebase-${service}.js`)
