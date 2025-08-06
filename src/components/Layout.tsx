import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="pt-20 px-4 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
