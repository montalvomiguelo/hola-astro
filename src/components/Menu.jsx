import { menu, toggle } from "../store";
import { trapFocus, removeTrapFocus } from "../a11y";
import { useRef, useEffect } from 'preact/hooks';

export const Menu = ({ children }) => {
    const aside = useRef();

    useEffect(() => {
        if (menu.value === 'open') {
            trapFocus(aside.current);
        } else {
            removeTrapFocus()
        }
    }, [menu.value]);

    if (menu.value === 'closed') return null;
    return (
        <aside class="menu" onClick={toggle} role="dialog" aria-modal="true" aria-label="Menu" tabindex="-1" ref={aside} onKeyUp={event => event.code.toUpperCase() === 'ESCAPE' && toggle()}>
            <nav onClick={event => event.stopPropagation()}>
                {children}
            </nav>
        </aside>
    );
};