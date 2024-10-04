import { fetchGetSchemaById } from '../../api/schema/schema'
import { fetchAddTask } from '../../api/task/task'
import CardTask from '../../components/CardTask/CardTask'
import styles from './Dashboard.module.scss'

import { useEffect, useState } from 'react'

function Dashboard() {
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  console.log(isLoading)

  useEffect(() => {
    fetchGetSchemaById(1, setIsLoading, setData)
  }, [])

  // const data = {
  //   id: 1,
  //   accessUsers: [],
  //   headerTitles: ['К выполнению', 'В процессе', 'Завершен', 'Тестирование'],
  //   cardsList: [
  //     {
  //       id: 1,
  //       dashboardId: 1,
  //       content: {
  //         title: 'Начало',
  //         createdData: '23.09.2024',
  //       },
  //       status: 'К выполнению',
  //     },
  //     {
  //       id: 2,
  //       dashboardId: 1,
  //       content: {
  //         title: 'Среднее',
  //         createdData: '23.09.2024',
  //       },
  //       status: 'К выполнению',
  //     },
  //     {
  //       id: 3,
  //       dashboardId: 1,
  //       content: {
  //         title: 'Конец',
  //         createdData: '23.09.2024',
  //       },
  //       status: 'К выполнению',
  //     },
  //     {
  //       id: 4,
  //       dashboardId: 1,
  //       content: {
  //         title: 'Завершен',
  //         createdData: '23.09.2024',
  //       },
  //       status: 'К выполнению',
  //     },
  //   ],
  // }

  const [cards, setCards] = useState(data?.tasks)
  console.log(data)

  const handleUpdateList = (id, status) => {
    console.log(id, status)
    let card = cards.find((item) => item.id === id)
    if (card) {
      card.status = status
      setCards((prev) => [card, ...prev.filter((item) => item.id !== id)])
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
    handleDragging(false)
  }

  const handleDragEnd = () => {
    handleDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.main}>
      {isLoading ? (
        <div>LOADING....</div>
      ) : (
        <>
          <div className={styles.menu}>
            <div className={styles.block}>
              <button onClick={() => fetchAddTask()}>+</button>
            </div>
          </div>
          <div className={styles.dashboard}>
            <div className={styles.table}>
              <div
                className={styles.container}
                style={{
                  gridTemplateColumns: `repeat(${data?.schemeInfo?.headers_title?.length}, 1fr)`,
                }}
              >
                {data?.schemeInfo?.headers_title?.map((header, index) => (
                  <div
                    key={index}
                    className={`${styles.column} ${isDragging ? styles.column__dragging : ''}`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, header)}
                  >
                    <h2>{header}</h2>
                    <div className={styles.cardsList}>
                      {cards
                        ?.filter((card) => card.status === header)
                        ?.map((card) => (
                          <CardTask
                            card={card}
                            key={card.id}
                            handleDragStart={handleDragStart}
                            handleDragEnd={handleDragEnd}
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
