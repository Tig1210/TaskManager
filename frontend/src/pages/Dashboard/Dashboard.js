import styles from './Dashboard.module.scss'

import { useRef, useState } from 'react'

function Dashboard() {
  const [isDragging, setIsDragging] = useState(false)
  const ref = useRef()

  const data = [
    {
      id: 1,
      content: 'Начало',
      status: 'К выполнению',
    },
    {
      id: 2,
      content: 'Среднее',
      status: 'К выполнению',
    },
  ]

  const [cards, setCards] = useState(data)

  const headersTitle = ['К выполнению', 'В процессе', 'Завершен']

  const handleUpdateList = (id, status) => {
    console.log(id, status)
    let card = cards.find((item) => item.id === id)

    if (card && card.status !== status) {
      card.status = status

      setCards((prev) => [...prev.filter((item) => item.id !== id), card])
    }
  }

  const handleDragging = (dragging) => setIsDragging(dragging)

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('text', `${card.id}`)

    handleDragging(true)
  }

  const handleDrop = (e, status) => {
    console.log(e, status)
    const id = +e.dataTransfer.getData('text')
    handleUpdateList(id, status)

    // e.target.style.background = 'none'
    // e.target.style.position = 'none'
    // e.target.style.zIndex = 'none'
    // e.target.style.width = 'none'
    // e.dataTransfer.setDragImage(e.target, 0, 0)

    handleDragging(false)
  }

  const handleDragEnd = () => {
    // e.target.style.background = 'none'
    // e.target.style.position = 'none'
    // e.target.style.zIndex = 'none'
    // e.target.style.width = 'none'
    handleDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  console.log(isDragging)

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <div className={styles.block}></div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.table}>
          <div className={styles.container}>
            {headersTitle.map((header, index) => (
              <div
                key={index}
                className={`${styles.block} ${isDragging ? styles.block__dragging : ''}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, header)}
              >
                <h2>{header}</h2>
                <div className={styles.cardsList}>
                  {cards
                    .filter((card) => card.status === header)
                    .map((card, index) => (
                      <>
                        <div
                          key={index}
                          className={`${styles.card}`}
                          draggable={true}
                          onDragStart={(e) => handleDragStart(e, card)}
                          onDragEnd={handleDragEnd}
                        >
                          {card.content}
                        </div>

                        <div ref={ref} className={styles.drag}></div>
                      </>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
