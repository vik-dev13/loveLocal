import { getSales } from "@/apis/sales";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";
import { IUser } from "../interface/index";

export const UserContext = createContext<IUser | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    getSales().then((data) => {
      setUser(data?.user);
    });
  }, []);
  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
