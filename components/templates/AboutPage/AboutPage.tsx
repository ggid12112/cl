/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/about/index.module.scss'

const AboutPage = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={`${styles.about__title} ${darkModeClass}`}>
          О компании
        </h2>
        <div className={styles.about__inner}>
          <div className={`${styles.about__info} ${darkModeClass}`}>
            <p>
              Компания &quot;Аквалайф&quot; специализируется на продаже
               сантехнического оборудования высокого качества. Наша компания предлагает широкий ассортимент сантехники для дома, 
               офиса, строительных объектов и других помещений.
            </p>
            <p>
            Мы работаем с лучшими производителями сантехники, что позволяет нам предлагать клиентам только надежные и современные решения. Наша команда профессионалов всегда готова помочь подобрать
             оптимальное оборудование и ответить на все вопросы клиентов. Приобретая сантехническое оборудование от компании Аквалайф, вы можете быть уверены в его качестве и надежности.
            </p>
          </div>
          <div className={`${styles.about__img} ${styles.about__img__top}`}>
            <img src="/img/about-img.png" alt="image-1" />
          </div>
          <div className={`${styles.about__img} ${styles.about__img__bottom}`}>
            <img src="/img/about-img-2.png" alt="image-2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
