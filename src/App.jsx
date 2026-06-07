import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh' }}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
        }}>
          <span style={{ fontWeight: 600 }}>My App</span>
          <DarkModeToggle />
        </header>
        <main style={{ padding: '24px' }}>
          <h1>Welcome</h1>
          <p>Toggle dark mode using the switch in the top-right corner.</p>
        </main>
      </div>
    </ThemeProvider>
  );
}
