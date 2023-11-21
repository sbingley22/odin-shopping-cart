import styles from "./Item.module.css"
import PropTypes from 'prop-types'

const Item = ({item, addItem}) => {
    return (
        <div className={styles.card} onClick={() => addItem(item.id)}>
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
            <h3>${item.price}</h3>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object,
    addItem: PropTypes.func,
}

export default Item