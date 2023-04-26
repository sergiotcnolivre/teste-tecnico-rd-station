import styles from '@/components/sectionDemo/SectionDemo.module.css'
import Image from "next/image";
import { ButtonSecondary } from "../button";
import Modal from 'react-modal';
import { useState } from 'react';

export default function SectionDemo() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function abrirModal() {
        setIsOpen(true);
    }
    
    function fecharModal() {
        setIsOpen(false);
    }

    return (
        <section className={styles.section}>
            <div className={styles.container_text}>
                <h3 className="heading-sm">Entenda melhor como o RD Station Marketing funciona na prática</h3>

                <ButtonSecondary>
                    ASSISTA A DESMONSTRRAÇÂO 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.5C5.85685 2.5 2.5 5.85685 2.5 10C2.5 14.1431 5.85685 17.5 10 17.5C14.1431 17.5 17.5 14.1431 17.5 10C17.5 5.85685 14.1431 2.5 10 2.5ZM13.9022 10.7258L8.57964 13.7802C8.10181 14.0464 7.5 13.7046 7.5 13.1452C7.5 10.6886 7.5 9.31136 7.5 6.85484C7.5 6.29839 8.09879 5.95363 8.57964 6.21976C10.6582 7.48345 11.8236 8.19195 13.9022 9.45565C14.3982 9.73387 14.3982 10.4506 13.9022 10.7258Z" fill="#212429"/>
                    </svg>
                </ButtonSecondary>
            </div>
            <div onClick={abrirModal} className={styles.container_image}>
                <Image src='/images/video-placeholder.jpg' width='650' alt="Imagem video" height='365' />
            </div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={fecharModal}
            contentLabel="Modal de exemplo"
                className={styles.modal}
            overlayClassName={styles.modal_overlay}
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lGCesaaLi4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <ButtonSecondary onClick={fecharModal}>Fechar</ButtonSecondary>
            </Modal>
        </section>
    )
}