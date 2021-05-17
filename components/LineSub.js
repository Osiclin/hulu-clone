import styles from '../styles/LineSub.module.css'

export default function LineSub(props) {
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.price}>{props.price1}</p>
            <p className={[styles.price, styles.headm].join(' ')}>{props.price2}</p>
            <p className={styles.price}>{props.price3}</p>
        </div>
    )
}