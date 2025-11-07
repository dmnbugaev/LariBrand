import Link from "next/link";
import './Link_sing_up.css'

export default function UI_kit_link_sing_up({href, children}) {
    return (
        <Link
            href={href}
            className='sing_up_link'
        >
            {children}
        </Link>
    )
}