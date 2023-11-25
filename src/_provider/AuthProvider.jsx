import {
  useAuthProvider,
  AuthContext,
  AuthActionContext,
} from "/src/_hook/use-auth";

export default function AuthProvider({ children }) {
  const [isLoggedIn, authAction] = useAuthProvider();

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <AuthActionContext.Provider value={authAction}>
        {children}
      </AuthActionContext.Provider>
    </AuthContext.Provider>
  );
}
