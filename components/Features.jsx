'use client'

import { usePathname } from 'next/navigation'
import styles from './features.module.css'

const featureTranslations = {
  en: {
    rulse: 'Agreement Rules ✨',
    'tutorials-guides': 'Tutorials & Guides ⚡',
    announcement: 'Announcement 🪁',
    'publicity-list': 'publicity of the list 📣'
  },
  zh: {
    rulse: '社区协议规则 ✨',
    'tutorials-guides': '帮助教程指南 ⚡',
    announcement: '社区公告通知 🪁',
    'publicity-list': '名单信息公示 📣'
  }
}

const featureKeys = ['rulse', 'tutorials-guides', 'announcement', 'publicity-list']
const defaultLocale = 'zh'

export default function Features({ items }) {
  if (Array.isArray(items) && items.length) {
    return (
      <div className={styles.features}>
        {items.map(item => (
          <div key={item} className={styles.feature}>
            {item}
          </div>
        ))}
      </div>
    )
  }

  const pathname = usePathname() || ''
  const locale = pathname.startsWith('/en') ? 'en' : 'zh'

  return (
    <div className={styles.features}>
      {featureKeys.map(feature => (
        <div key={feature} className={styles.feature}>
          {featureTranslations[locale]?.[feature] ?? featureTranslations[defaultLocale][feature]}
        </div>
      ))}
    </div>
  )
}
