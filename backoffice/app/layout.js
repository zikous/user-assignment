import './globals.css';
import ProtectedLayout from '@/components/ProtectedLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProtectedLayout>{children}</ProtectedLayout>
      </body>
    </html>
  );
}