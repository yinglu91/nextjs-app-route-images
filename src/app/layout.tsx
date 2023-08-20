import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container, SSRProvider } from "@/components/bootstrap";
import NavBar from "./NavBar";
import { QueryClientProviderWrapper } from "./ReactQueryProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Gallery",
  description: "Nextjs 13.4 Image Gallery",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className="py-4">
              <QueryClientProviderWrapper>
                {children}
              </QueryClientProviderWrapper>
            </Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
