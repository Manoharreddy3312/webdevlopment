import styles from './HomeModule.module.css'

function HomeModule() {
  return (
    <div id={styles.box}>
        <div className={styles.dropdownContainer}><a href="#home">Home</a></div>
        <div className={styles.dropdownContainer}><a href="#about">About</a></div>
        <div className={styles.dropdownContainer}><a href="#contact">Contact</a></div>
        <div className={styles.dropdownContainer}><a href="#services">Services</a></div>
        <div className={styles.dropdownContainer}><a href="#register">Register</a></div>
      
    </div>
  )
}

export default HomeModule
