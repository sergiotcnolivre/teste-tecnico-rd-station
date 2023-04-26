import styles from '@/components/sectionHero/form/select/Select.module.css'

export default function Select({labelText, children, required}) {
    return (
        <div className={styles.input_container}>
            <label className='body-md'>{labelText}</label>
            <select required={required} > 
                {children}
            </select>
        </div>
    )
}