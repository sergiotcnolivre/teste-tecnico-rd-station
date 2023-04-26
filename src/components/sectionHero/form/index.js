import styles from '@/components/sectionHero/form/Form.module.css'
import Input from './input'
import { ButtonHighlight } from '@/components/button'
import Select from './select'
import Link from 'next/link'

export default function Form() {

    const selectOptions = [
        "Sócio(a) / CEO / Proprietário(a)",
        "Diretor(a) de Vendas",
        "Diretor(a) de Marketing",
        "Diretor(a) Outras Áreas",
        "Gerente de Marketing",
        "Gerente de Vendas",
        "Coordenador(a)/Supervisor(a) de Marketing",
        "Coordenador(a)/Supervisor(a) de Vendas",
        "Analista/Assistente de Marketing",
        "Analista/Assistente de Vendas",
        "Vendedor(a) / Executivo(a) de Contas",
        "Estudante",
        "Outros Cargos"
    ]

    return (
        <div className={styles.form_container}>
            <form>
                <h3 className='heading-xs'>Comece seus 10 dias de teste grátis do RD Station Marketing!</h3>
                <p className='subtitle-xs'>
                    Não precisa cadastrar cartão de crédito. 😉
                </p>
                <hr />
                <div className={styles.input_container}>
                    <Input labelText='Diga, qual seu nome?' placeholder='Insira seu nome' type='text' required />
                    <Input labelText='Seu email de trabalho' placeholder='Insira seu e-mail' type='email' required />
                    <Input labelText='Seu telefone' placeholder='Insira seu número de telefone com DDD' type='tel' required />
                    <Select placeholder='Placehoder' labelText='Seu cargo de ocupação' required>
                        <option selected disabled>Selecione seu cargo</option>
                        {selectOptions.map((option, index) => {
                            return (
                                <option value={option} key={index}>{option}</option>
                            )
                        })}
                        
                    </Select>
                    <Input labelText='Crie uma senha' type='password' required />
                    <Input labelText='Confirme sua senha' type='password' required />
                    
                </div>
                <div className={styles.container_legal_text} >
                    <ul>
                        <li>
                            Ao criar minha conta estou de acordo com os <Link href='https://legal.rdstation.com/pt-BR/rdstation-services-agreement/' target='_blank'>termos de uso</Link> do software e  <Link href='https://legal.rdstation.com/pt/privacy-policy/' target='_blank'>política de privacidade</Link>.
                        </li>
                        <li>
                            Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.
                        </li>
                        <li>
                            *Você pode alterar suas permissões de comunicação a qualquer tempo.
                        </li>
                    </ul>
                </div>
                <div className={styles.button_container}>
                    <ButtonHighlight>CRIAR MINHA CONTA</ButtonHighlight>
                </div>
            </form>
        </div>
    )
}