import styles from './Pessoa.module.css'

function Pessoa({nome, profissão, idade, foto}){

    return (
        <div className={styles.PessoaContainer} >
            <img src={foto} alt={nome} />
            <h2>Nome : {nome}</h2>
            <p>idade : {idade}</p>
            <p>profissão : {profissão}</p>
        </div>
    )

}

export default Pessoa