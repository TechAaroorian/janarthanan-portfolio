import { Header } from "./components/layout/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <p className="text-slate-600 dark:text-slate-400">
          Tailwind CSS v4 & Dark Mode active.
        </p>
      </main>
    </div>
  );
}

export default App;
