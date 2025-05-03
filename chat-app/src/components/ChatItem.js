import React from 'react'
import styles from "./styles.module.css"


export default function ChatItem({value}) {
  return (
    <div className={`${styles.chatItem} ${value.fromMe ? styles.right : "" } `}  >
        {value.message}

      
    </div>
  )
}
