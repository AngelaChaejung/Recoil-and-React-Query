import "./App.css";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Test from "./Test";
// useQuery - read. useMutation은 수정(CUD),
function App() {
  const client = new QueryClient({
    DefaultOptions: {
      queries: {
        // retry: false,
      },
      mutation: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <Test />네
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
