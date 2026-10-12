import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Gestisce gli anchor tra pagine (/#selected-work) e riporta in cima al cambio pagina. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
