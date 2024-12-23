import { QueryClient } from "@tanstack/react-query";

export const STORAGE = {
  token: "exe201",
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
    },
  },
});
