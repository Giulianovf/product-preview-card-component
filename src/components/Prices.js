import styles from './Prices.module.css'

function Prices(){
    return (
        <div className={styles.Prices}>
            <h2 className="item">$149.99</h2>
            <span className='item line'>
                <p className="item">
                $169.99
                </p>
            </span>
        </div>
    )
}

export default Prices