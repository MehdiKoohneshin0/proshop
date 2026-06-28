import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col h-screen justify-between">
      <Header />
      <div className="p-6 wrapper">{children}</div>
      <Footer />
    </main>
  );
}
