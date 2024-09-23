import styles from './CardTask.module.scss'

function CardTask({ card, handleDragStart, handleDragEnd }) {
  return (
    <div
      className={styles.card}
      draggable={true}
      onDragStart={(e) => handleDragStart(e, card)}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{card.content.title}</h3>
        <div className={styles.content}>
          <div>
            <p>Комментариев:12</p>
          </div>
          <div>
            <p>Приоритет:Высокий</p>
          </div>
          <div>
            <p>Срок:11.12.2024</p>
          </div>
        </div>
        <p className={styles.date}>{card.content.createdData}</p>
      </div>
    </div>
  )
}

export default CardTask
