'use client'

import { useParams } from 'next/navigation'
import styles from './features.module.css'

const featureTranslations = {
  en: {
    'rulse': 'Agreement Rules ✨',
    'tutorials-guides': 'Tutorials & Guides ⚡',
    'announcement': 'Announcement 🪁',
    'publicity-list': 'publicity of the list 📣',
  },
  zh: {
    'rulse': '社区协议规则 ✨',
    'tutorials-guides': '帮助教程指南 ⚡',
    'announcement': '社区公告通知 🪁',
    'publicity-list': '名单信息公示 📣',
  },
}

export default function Features() {
  const params = useParams()
  const locale = params?.lang === 'en' ? 'en' : 'zh'
  const translations = featureTranslations[locale]

  return (
    <div className={styles.features}>
      {['rulse', 'tutorials-guides', 'announcement', 'publicity-list'].map(feature => (
        <div key={feature} className={styles.feature}>
          {translations[feature]}
        </div>
      ))}
    </div>
  )
}
