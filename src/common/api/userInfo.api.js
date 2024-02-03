import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

export const getUser = async () => {
    try {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const email = user.email

                return {uid, email}
            } else {
                
            }
        });
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}