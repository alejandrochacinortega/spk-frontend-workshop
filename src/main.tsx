/* ==========================================================
   You do not need to change this file.
   It finds <div id="root"> in index.html and tells React
   to draw the <App /> component inside it.
   ========================================================== */
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

createRoot(document.getElementById('root')!).render(<App />);
