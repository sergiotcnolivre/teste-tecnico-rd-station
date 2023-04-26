import styles from '@/components/sectionTogether/SectionTogether.module.css'

export default function SectionTogether() {
    return (
        <section className={styles.section}>
            <div className={styles.section_text_container}>
                <h3 className='heading-sm'>
                    Estaremos juntos desde o primeiro passo!
                </h3>
                <p>
                    Se você ainda não sabe como extrair o máximo das ações digitais, não tem problema. O RD Station Marketing é mais que uma ferramenta, nos importamos com os seus resultados.
                </p>
                <p>
                    Estaremos com você do planejamento até a prática!
                </p>
            </div>
        </section>
    )
}