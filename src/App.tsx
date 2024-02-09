import { Outlet } from "react-router-dom";
import { ContextToken } from "./contexts/context-token";
import { useEffect, useState } from "react";
import { AccessPayloadTokenDTO } from "./models/auth";
import * as authService from "./services/auth-service.ts";

export default function App() {
  const [contextToken, setContextToken] = useState<AccessPayloadTokenDTO>();

  useEffect(() => {
    if (authService.isAuthenticated()) {
      const tokenPayload = authService.getAccessTokenPayload();
      setContextToken(tokenPayload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextToken, setContextToken }}>
      <Outlet />
    </ContextToken.Provider>
  );
}
