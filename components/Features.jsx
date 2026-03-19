'use client'

import styles from './features.module.css'

const defaultItems = ['社区协议规则 ✨', '帮助教程指南 ⚡', '社区公告通知 🪁', '名单信息公示 📣']

export default function Features({ items }) {
  const featureItems = Array.isArray(items) && items.length ? items : defaultItems

  return (
    <div className={styles.features}>
      {featureItems.map(item => (
        <div key={item} className={styles.feature}>
          {item}
        </div>
      ))}
    </div>
  )
}
