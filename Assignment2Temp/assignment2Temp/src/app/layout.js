"use client";

import { AuthProvider } from "./contexts/authContext";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <div>  </div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
