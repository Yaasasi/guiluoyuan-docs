import { useRouter } from 'next/router'
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
  const { locale, defaultLocale } = useRouter()

  return (
    <div className={styles.features}>
      {['rulse', 'tutorials-guides', 'announcement', 'publicity-list'].map(feature => (
        <div key={feature} className={styles.feature}>
          {featureTranslations[locale][feature] ?? featureTranslations[defaultLocale][feature]}
        </div>
      ))}
    </div>
  )
}
