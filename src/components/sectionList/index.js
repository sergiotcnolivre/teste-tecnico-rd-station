import styles from '@/components/sectionList/SectionList.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SectionList () {
    return (
        <section className={styles.section}>
            <div className={styles.section_container_image}>
                <Image src='/images/section-list-img.jpg' width='600' height='600' alt='Imagem de uma mulher sorrindo'/>
            </div>

            <div className={styles.section_container_text}>
                
                <h3 className='heading-sm'>
                    Resultados previsíveis <br />
                    e mais clientes para sua empresa
                </h3>

                <p className='subtitle-sm'>
                    Torne sua atuação no Marketing Digital mais eficaz
                </p>

                <ul>
                    <li className='body-md'>
                        <span>Ferramentas intuitivas</span> e com modelos prontos, vídeos explicativos e passo a passo guiado
                    </li>
                    <li className='body-md'>
                        <span>Implementação com especialistas</span>  focada em planejamento e prática (nos planos Marketing Pro e Enterprise)
                    </li>
                    <li className='body-md'>
                        <span>Time de especialistas em Sucesso do Cliente</span> para apoiar na otimização da estratégia em cada fase da sua jornada (nos planos Marketing Pro e Enterprise)
                    </li>
                    <li className='body-md'>
                        <span>Suporte técnico</span> em português, espanhol e inglês para tirar dúvidas, com 97% de satisfação entre nossos clientes
                    </li>
                    <li className='body-md'>
                        <span>Muito conteúdo educativo,</span> eventos, cursos da <Link href='#' target='_blank'>RD University </Link>  e comunidades para você continuar evoluindo
                    </li>
                </ul>
            </div>
        </section>
    )
}