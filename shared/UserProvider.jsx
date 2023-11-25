import {
  UserActionContext,
  UserContext,
  useUserProvider,
} from "./_hooks/use-user";

export default function UserProvider({ children }) {
  const [user, userAction] = useUserProvider();

  return (
    <UserContext.Provider value={user}>
      <UserActionContext.Provider value={userAction}>
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
}
