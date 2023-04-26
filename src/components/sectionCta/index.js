import styles from '@/components/sectionCta/SectionCta.module.css'
import { ButtonHighlight } from '../button'

export default function SectionCta() {
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <h2 className='heading-md'>
                    Por que mais de 25.000 empresas escolheram o RD Station?
                </h2>
                <p className='body-md'>
                    Combinamos nossos produtos de Marketing e Vendas com pessoas que se importam com seus resultados e um ecossistema que apoia o seu negócio do planejamento à prática.
                </p>
                <ButtonHighlight>CRIAR CONTA GRATUITA</ButtonHighlight>
            </div>
        </section>
    )
}