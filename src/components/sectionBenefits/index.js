import styles from '@/components/sectionBenefits/SectionBenefits.module.css'
import Card from './card'

export default function SectionBenefits() {
    
    const cards = [
        {
            icon: 'chart_line',
            title: 'Torne sua operação de Marketing Digital mais produtiva',
            description: 'Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.',
        },
        {
            icon: 'bullhorn',
            title: 'Crie facilmente campanhas que funcionam',
            description: 'É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas poderosas, e contam com dezenas de modelos — como de Landing Pages, Pop-ups, emails — para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.',
        },
        {
            icon: 'chart_network',
            title: 'Construa jornadas personalizadas e gere vendas em escala',
            description: 'Envie a mensagem certa na hora certa e construa jornadas personalizadas que geram até 5x mais conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade de Marketing e Vendas.',
        },
        {
            icon: 'star',
            title: 'Encontre automaticamente as melhores oportunidades',
            description: 'Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários. Defina critérios para identificar automaticamente Leads com maior potencial de compra e envie para o comercial oportunidades qualificadas.',
        },
        {
            icon: 'chart_pie',
            title: 'Saia da incerteza e comprove resultados',
            description: 'Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing Digital traz mais vendas e clientes.',
        },
        {
            icon: 'globe',
            title: 'Suporte ágil e na sua língua',
            description: 'Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97% entre nossos clientes e um tempo médio de resolução de 6 horas. E o melhor: tudo isso em português.',
        },
    ]

    return (
        <section className={styles.section}>
            <h2 className="heading-md">
                A ferramenta de Automação de <br /> Marketing líder na América Latina
            </h2>
            <div className={styles.section_container_card}>
                {cards.map((card, index) => {
                    return (
                        <Card key={index} altIcon={card.icon} description={card.description} title={card.title} icon={card.icon} />
                    )
                })}
            </div>
            
        </section>
    )
}