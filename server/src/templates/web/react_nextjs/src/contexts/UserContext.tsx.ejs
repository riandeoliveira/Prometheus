"use client";

import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail as updateUserEmail,
  updatePassword as updateUserPassword,
} from "firebase/auth";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { ReactNode, createContext, useState } from "react";
import { auth, db } from "services/firebase";
import { UserType } from "types";
import { State } from "types/state";

type UserContextProviderProps = {
  children: ReactNode;
};

const initialState: State.User = {
  user: {
    id: "",
    name: "",
    email: "",
    authenticated: false,
  },

  clear: () => {},
  deletes: async () => {},
  login: async () => {},
  logout: async () => {},
  register: async () => {},
  resetPassword: async () => {},
  updateEmail: async () => {},
  updateName: async () => {},
  updatePassword: async () => {},
  verifyAuth: () => {},
  verifyEmail: async () => {},
};

export const UserContext = createContext<State.User>(initialState);

export const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const [user, setUser] = useState<Omit<UserType, "password">>(
    {} as Omit<UserType, "password">
  );

  const clear = (): void => {
    setUser({
      id: "",
      name: "",
      email: "",
      authenticated: false,
    });
  };

  const deletes = async (): Promise<void> => {
    try {
      await deleteDoc(doc(db, "users", auth.currentUser?.uid as string));

      await auth.currentUser?.delete();

      clear();
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const credentials: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { uid, displayName } = credentials.user;

      setUser({
        id: uid,
        name: displayName as string,
        email,
        authenticated: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await auth.signOut();

      clear();
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const credentials: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(credentials.user, { displayName: name });

      const userId: string = credentials.user.uid;

      await setDoc(doc(db, "users", userId), {
        name,
        email,
      });

      setUser({
        id: userId,
        name,
        email,
        authenticated: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmail = async (email: string): Promise<void> => {
    try {
      await updateUserEmail(auth.currentUser as User, email);

      await updateDoc(doc(db, "users", auth.currentUser?.uid as string), {
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateName = async (name: string): Promise<void> => {
    try {
      await updateProfile(auth.currentUser as User, { displayName: name });

      await updateDoc(doc(db, "users", auth.currentUser?.uid as string), {
        name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updatePassword = async (password: string): Promise<void> => {
    try {
      await updateUserPassword(auth.currentUser as User, password);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyAuth = (): void => {
    onAuthStateChanged(auth, (currentUser: User | null) => {
      if (currentUser) {
        setUser({
          id: currentUser.uid,
          name: currentUser.displayName as string,
          email: currentUser.email as string,
          authenticated: true,
        });
      } else {
        setUser({
          id: "",
          name: "",
          email: "",
          authenticated: false,
        });
      }
    });
  };

  const verifyEmail = async (): Promise<void> => {
    try {
      await sendEmailVerification(auth.currentUser as User);
    } catch (error) {
      console.error(error);
    }
  };

  const data: State.User = {
    user,
    clear,
    deletes,
    login,
    logout,
    register,
    resetPassword,
    updateEmail,
    updateName,
    updatePassword,
    verifyAuth,
    verifyEmail,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
