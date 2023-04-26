import Head from 'next/head'
import Header from '@/components/header'
import { Nunito_Sans } from 'next/font/google'
import Footer from '@/components/footer'
import SectionIntegration from '@/components/sectionIntegration'
import SectionDemo from '@/components/sectionDemo'
import SectionCta from '@/components/sectionCta'
import SectionBenefits from '@/components/sectionBenefits'
import SectionHero from '@/components/sectionHero'
import SectionTogether from '@/components/sectionTogether'
import SectionList from '@/components/sectionList'

const NunitoSans = Nunito_Sans({
  weight: ['400', '700', '900', '800'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>RD Station: Plataforma de Marketing Digital e Vendas nº 1 🇧🇷</title>
        <meta name="description" content="Do Marketing às Vendas, a RD Station é a plataforma com tudo para sua empresa criar uma Máquina de Crescimento. Teste de graça!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={NunitoSans.className}>
        <Header />
        <SectionHero />
        <SectionTogether />
        <SectionList />
        <SectionBenefits />
        <SectionCta />
        <SectionDemo />
        <SectionIntegration />
        <Footer />
      </main>
    </>
  )
}
