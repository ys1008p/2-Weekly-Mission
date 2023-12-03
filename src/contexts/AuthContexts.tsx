import { createContext, useContext, useState, type ReactNode } from 'react';

interface Auth {
  email: string;
  profileImageSource: string;
}

interface AuthContextValue {
  auth: Auth | undefined;
  setAuth: React.Dispatch<React.SetStateAction<undefined>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('반드시 AuthProvider 안에서 사용해야 합니다');

  const { auth } = context;
  return auth;
};

export const useSetAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('반드시 AuthProvider 안에서 사용해야 합니다');

  const { setAuth } = context;
  return setAuth;
};
