import styles from '@/components/sectionIntegration/SectionIntegration.module.css'
import { ButtonPrimary } from '../button'
import Image from 'next/image'
export default function SectionIntegration() {

    const empresas = ['rdstation', 'salesforce', 'google', 'facebook', 'linkedin', 'wordpress', 'hotmart', 'shopify', 'shopify', 'zapier']
    return (
        <section className={styles.section}>
            <div className={styles.section_criar_conta}>
                <h2 className='heading-md'>
                    Torne sua operação de Marketing ainda mais poderosa
                </h2>
                <p className='subtitle-sm'>
                    O RD Station Marketing se conecta as principais ferramentas nacionais e internacionais 
                </p>
                <ButtonPrimary>CRIAR CONTA GRATUITA</ButtonPrimary>
            </div>
            <div className={styles.section_empresas}>
                {empresas.map((empresa, index) => {
                    return (<li key={index}>
                        <Image src={`/images/${empresa}.png`} alt={ `Logomarca da empresa ${empresa}`} width='103' height='68' />
                    </li>)
                })}
            </div>
            <ButtonPrimary>CRIAR CONTA GRATUITA</ButtonPrimary>
        </section>
    )
}