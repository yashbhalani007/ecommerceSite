import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";


export const signupAPI = (data) => {
    try {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent!
                            // A confirmation email has been sent to ${user.email}.
                            resolve({ message: `Email verification sent!`, user: user });
                        })
                        .catch(() => {
                            reject({ message: 'Failed to send email verification' })
                        })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
                        reject({ message: 'Email is already in use' })
                    } else if (errorCode.localeCompare('auth/weak-password') === 0) {
                        reject({ message: 'Password should be at least 6 characters' })
                    }
                    // ..
                })
        })

    } catch (error) {
        console.log(error);
    }
}

export const loginAPI = async (data) => {
    console.log(data);
    try {
        return new Promise(async (resolve, reject) => {
            await signInWithEmailAndPassword(auth, data.email, data.password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    let data = []
                    const querySnapshot = await getDocs(collection(db, "users"));
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                        data.push({ ...doc.data() })
                    });

                    for (const v of data) {
                        console.log("Checking:", user.email, v.email, user.emailVerified, v.type);
                
                        // Trim whitespace and convert to lowercase for case-insensitive comparison
                        const userEmail = user.email.trim().toLowerCase();
                        const vEmail = v.email.trim().toLowerCase();
                
                        if (userEmail === vEmail && user.emailVerified) {
                            if (v.type === 'supplier' && v.emailVerified === true) {
                                console.log("Conditions met:", v.type === 'supplier' && v.emailVerified === true);
                                sessionStorage.setItem('adminAuth', JSON.stringify({ isAuthenticated: true }));
                                return resolve({ message: 'Signed in successfully', user: user });
                            } else {
                                console.log("Seller account not approved:", v.type, v.emailVerified);
                                return reject({ message: 'Your seller account is not approved by the super admin' });
                            }
                        }
                    }
                    

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare('auth/invalid-login-credentials') === 0) {
                        reject({ message: 'Invalid username/password*' })
                    } else if (errorCode.localeCompare('auth/invalid-credential') === 0) {
                        reject({ message: 'Invalid username/password*' })
                    }
                });
        })

    } catch (error) {
        console.log(error);
    }
}

export const userloginAPI = (data) => {
    console.log(data);
    try {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    let data = []
                    const querySnapshot = await getDocs(collection(db, "users"));
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                        data.push({ ...doc.data() })
                    });


                    if (user.emailVerified) {
                        return resolve({ message: 'Login  in successfully', user: user })

                    } else {
                        console.log('no');
                        return reject({ message: 'Email is not verified' })
                    }

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare('auth/invalid-login-credentials') === 0) {
                        reject({ message: 'Invalid username/password*' })
                    } else if (errorCode.localeCompare('auth/invalid-credential') === 0) {
                        reject({ message: 'Invalid username/password*' })
                    }
                });
        })

    } catch (error) {
        console.log(error);
    }
}

export const forgotAPI = (data) => {
    try {
        console.log(data);
        return new Promise((resolve, reject) => {
            sendPasswordResetEmail(auth, data.email)
                .then(() => {
                    // Password reset email sent!
                    console.log('email sent!!');
                    resolve({ message: "Password reset email sent!" })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare('auth/invalid-email') === 0) {
                        reject({ message: 'The provided email is invalid!' })
                    } else if (errorCode.localeCompare('auth/user-not-found') === 0) {
                        reject({ message: 'No user record found for the provided email!' })
                    }
                    console.log(errorCode, errorMessage);
                });
        })
    } catch (error) {

    }
}

export const logoutAPI = () => {
    try {
        return new Promise((resolve, reject) => {
            signOut(auth).then(() => {
                // Sign-out successful.
                sessionStorage.removeItem('adminAuth');
                resolve({ message: "Logout successful!" })
            }).catch((error) => {
                // An error happened.
                reject({ message: error.message })
            });
        })
    } catch (error) {

    }
}

export const userlogoutAPI = () => {
    try {
        return new Promise((resolve, reject) => {
            signOut(auth).then(() => {
                // Sign-out successful.
                resolve({ message: "Logout successful!" })
            }).catch((error) => {
                // An error happened.
                reject({ message: error.message })
            });
        })
    } catch (error) {

    }
}

