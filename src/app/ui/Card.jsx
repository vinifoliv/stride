import styles from './Card.module.css';

export default function Card() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Introdução à Computação</h2>
            <h3 className={styles.date}>10 de Outubro de 2024</h3>
            <p className={styles.body}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus tempora libero beatae temporibus laborum laboriosam quae assumenda dolor at voluptatum maxime a illum molestiae amet consequuntur, sequi quis ab praesentium.</p>
        </div>
    );
}