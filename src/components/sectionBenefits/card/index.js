import styles from '@/components/sectionBenefits/card/Card.module.css'
import Image from 'next/image'

export default function Card({icon, altIcon, title, description}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <Image src={`/images/${icon}.png`} width='32' height='32' alt={altIcon} />
            </div>
            <div className={styles.card_body}>
                <h4 className='heading-sm'>
                    {title}
                </h4>
            </div>
            <div className={styles.card_footer}>
                <p className='body-md'>
                    {description}
                </p>
            </div>
        </div>
    )
}