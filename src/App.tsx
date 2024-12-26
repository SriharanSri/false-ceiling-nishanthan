import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Breadcrumb from "./components/Breadcrumb";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <Breadcrumb />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <MainContent />
          </div>
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </div>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
