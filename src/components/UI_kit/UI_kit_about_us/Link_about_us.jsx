import Link from "next/link";
import './Link_about_us.css'

export default function UI_kit_link_about_us({href, children}) {
    return (
        <Link
            href={href}
            className='about-us-link-item'
        >
            {children}
        </Link>
    )
}