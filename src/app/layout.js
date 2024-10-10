import "./globals.css";

export const metadata = {
  title: "Stride",
  description: "Difusão de conhecimento em computação e tecnologia. Discuta em comunidade no Striderland!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
