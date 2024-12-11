import { Header } from './components/Header';
import { LaunchingSoon } from './components/LaunchingSoon';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Logo />
      <div className="relative z-10">
        <Header />
        <main className="flex-1 mt-20">
          <LaunchingSoon />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;