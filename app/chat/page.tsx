'use client'
import { useState } from "react";
import AuthPage from "@/components/AuthPage";
import ChatsPage from "@/components/ChatsPage";

export default function Chat() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}
