import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <>
      <Image src="/icons/64.png" alt="归落原" width="36" height="36" />
      <div className={styles.logo}>
        <span className={styles.logo__title}>归落原 · 文档</span>
      </div>
    </>
  )
}
