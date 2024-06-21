import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/contacts/index.module.scss'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import FeedbackForm from '@/components/modules/FeedbackForm/FeedbackForm'

const ContactsPage = ({ isWholesaleBuyersPage = false }) => {
  const mode = useStore($mode)
  const isMobile560 = useMediaQuery(560)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2 className={`${styles.contacts__title} ${darkModeClass}`}>
          {isWholesaleBuyersPage ? 'Оптовым покупателям' : 'Контакты'}
        </h2>
        <div className={styles.contacts__inner}>
          {isWholesaleBuyersPage ? (
            <div className={`${styles.contacts__list} ${darkModeClass}`}>
              <p>
                <span>
                  Условия оптовых заказов решаются индивидуально по телефону:{' '}
                </span>
                <span>+7 (955) 34-48-737</span>
              </p>
              <p>
                Либо опишите суть заказа в форме обртной связи и мы с вами
                свяжемся.
              </p>
            </div>
          ) : (
            <ul className={`${styles.contacts__list} ${darkModeClass}`}>
              <li className={styles.contacts__list__title}>
                <h3 className={darkModeClass}>
                  Магазин сантехнического оборудования
                </h3>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Офис:</span>
                <span> г. Владимир, ул. Гастело д. 8А</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Склад:</span>
                <span> г. Владимир, ул. Гастело д. 8А</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>График работы офиса:</span>
                <span> пн-пс: с 8:00 до 20:00</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Наш контактный телефон:</span>
                <span> +7 (955) 34-48-737</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Время приемок завок:</span>
                <span> Пн-Вс: с 8:00 до 20:00</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Прием заказов электронным способом на сайте:</span>
                <span> круглосуточно</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>E-mail:</span>
                <span className={styles.contacts__list__item__mail}>
                  {!isMobile560 && <MailSvg />}{' '}
                  <span>Aqualife@mail.ru</span>
                </span>
              </li>
            </ul>
          )}
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}

export default ContactsPage
