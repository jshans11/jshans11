import { useTheme } from '../context/ThemeContext';
import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    toggleTheme();
    // Issue #5: analytics instrumentation
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'dark_mode_toggled', { new_theme: isDark ? 'light' : 'dark' });
    }
  };

  return (
    <div className={styles.wrapper} title="Toggle Dark Mode">
      <label className={styles.switch} aria-label="Toggle dark mode">
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
          className={styles.input}
        />
        <span className={styles.slider} />
      </label>
      <span className={styles.icon} aria-hidden="true">
        {isDark ? '☀️' : '🌙'}
      </span>
    </div>
  );
}
