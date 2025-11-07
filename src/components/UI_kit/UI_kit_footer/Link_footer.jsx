import Link from "next/link";
import './Link_footer.css'

export default function UI_kit_link_footer({href, children}) {
    return (
        <Link
            href={href}
            className='footer-link-item'
        >
            {children}
        </Link>
    )
}