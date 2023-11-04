import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <>
      <Image src="/icons/Ourmoe-Loge.png" alt="归落原" width="110" height="55" />
      <div className={styles.logo}>
        <span className={styles.logo__title}></span>
      </div>
    </>
  )
}
