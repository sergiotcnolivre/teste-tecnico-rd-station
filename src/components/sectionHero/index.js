import styles from '@/components/sectionHero/SectionHero.module.css'
import Form from './form'

export default function SectionHero() {
    return (
        <section className={styles.section}>
            <div className={styles.section_container_text}>
                <h1 className='heading-lg'>
                    Gere mais <span>oportunidades</span>  <br />
                    para seu negócio
                </h1>
                <p className='body-lg'>
                    O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados.
                </p>
            </div>
            <div className={styles.form}>
                <Form />
            </div>
        </section>
    )
}