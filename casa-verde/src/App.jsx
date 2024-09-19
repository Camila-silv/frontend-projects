import { NewsletterProvider } from "./context/newsletterContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <NewsletterProvider>
      <Home />
    </NewsletterProvider>
  );
}

