import { useSyncExternalStore } from "react";
import QueryStore from "./QueryStore";

export default function useQuery(fetchFunc) {
  const queryStore = new QueryStore();

  fetchFunc()
    .then((res) => {
      queryStore.updateQuery("fetched", res);
    })
    .catch((err) => {
      throw err;
    });

  queryStore.updateQuery("fetching");

  const query = useSyncExternalStore(
    queryStore.subscribe,
    queryStore.getSnapshot,
  );

  return query.state === "fetched"
    ? { data: { ...query.response }, isLoading: false }
    : { data: null, isLoading: true };
}
