import styles from '@/components/header/Header.module.css'
import Image from "next/image";
import {ButtonPrimary, ButtonSecondary} from "../button";
import Link from "next/link";
import Form from '../sectionHero/form';

export default function Header() {
    return (
        <header className={styles.header}>
            <div >
                <Image src="/logo.png" alt="Logomarca da empresa RD Station" width="174" height="32" />
            </div>
            
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href='#'>Menu 1</Link>
                    </li>
                    <li>
                        <Link href='#'>
                            Menu 2
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.6891 10.0595L4.12878 6.49917C3.95707 6.32745 3.95707 6.04907 4.12878 5.87737L4.54404 5.46212C4.71546 5.2907 4.99327 5.29037 5.1651 5.46139L8.00001 8.28302L10.8349 5.46139C11.0067 5.29037 11.2845 5.2907 11.456 5.46212L11.8712 5.87737C12.0429 6.04908 12.0429 6.32747 11.8712 6.49917L8.3109 10.0595C8.1392 10.2312 7.86081 10.2312 7.6891 10.0595Z" fill="#212429"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>Menu 3</Link>
                    </li>
                    <li>
                        <Link href='#'>Menu 4</Link>
                    </li>
                    <li>
                        <Link href='#'>Menu 5</Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.header_container_btn}>
                <ButtonSecondary />
                <ButtonPrimary>
                    BUTTON
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M13.2376 6.78617L16.5492 10.1301C16.7059 10.2884 16.7059 10.5449 16.5492 10.7032L13.2376 14.0472C12.9848 14.3024 12.5526 14.1217 12.5526 13.7606V11.3621H3.73465C3.51305 11.3621 3.33337 11.1807 3.33337 10.9569V9.87637C3.33337 9.65259 3.51305 9.47116 3.73465 9.47116H12.5526V7.07266C12.5526 6.71168 12.9849 6.53089 13.2376 6.78617Z" fill="#212429"/>
                    </svg>
                </ButtonPrimary>
            </div>
            <div className={styles.form}>
                <Form />
            </div>
        </header>
    )
}