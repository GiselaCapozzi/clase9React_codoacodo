import styles from '../styles/titulo.module.css';

const Titulo = ({ titulo }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
    </div>
  )
}

export default Titulo