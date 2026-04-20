import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ 
        background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #FAF5FF 100%)',
        minHeight: '100vh' 
      }}>
        {children}
      </body>
    </html>
  );
}