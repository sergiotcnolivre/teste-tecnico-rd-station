import styles from '@/components/button/Button.module.css'

export function ButtonPrimary({children='BUTTON', type='submit', ...rest}) {
    return <button className={styles.btn_primary} type={type} {...rest}>{children}</button>
}

export function ButtonSecondary({children='BUTTON', type='submit', ...rest}) {
    return <button className={styles.btn_secondary} type={type} {...rest}>{children}</button>
}

export function ButtonHighlight({children='BUTTON', type='submit', ...rest}) {
    return <button className={styles.btn_highlight} type={type} {...rest}>{children}</button>
}