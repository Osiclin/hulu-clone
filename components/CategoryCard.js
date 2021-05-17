import styles from '../styles/CategoryCard.module.css'
import Image from 'next/image'

export default function CategoryCard(props) {
    return(
        <div className={styles.card}>
            <Image src={props.catimg} alt="" width={294} height={400} />
            <div className={styles.cattext}>
                <p className={styles.tag}>{props.tag}</p>
                <h6 className={styles.category}>{props.category}</h6>
            </div>
        </div>
    )
}