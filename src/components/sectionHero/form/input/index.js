import styles from '@/components/sectionHero/form/input/Input.module.css'

export default function Input({type, placeholder, labelText, required, children}) {
    return (
        <div className={styles.input_container}>
            <label className='body-md'>{labelText}</label>
            <input type={type} placeholder={placeholder} required={required}>{children}</input>
        </div>
    )
}