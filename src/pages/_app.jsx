import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryClient = new QueryClient();


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
  <QueryClientProvider>

    
  </QueryClientProvider>;
}
