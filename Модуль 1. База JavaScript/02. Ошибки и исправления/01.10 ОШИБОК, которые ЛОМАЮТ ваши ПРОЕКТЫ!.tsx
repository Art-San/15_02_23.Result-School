// https://www.youtube.com/watch?v=_Pv6wfABwF0&t=17s
// Ошибка 1: Почему нельзя оставлять логику в компонентах?
// =====================  НЕ правильно ===================================
// const calculateTotal = (product) => {
//   return product.reduce((acc, product) => acc + product.price, 0)
// }

// const ShoppingCard = ({ products }) => {
//   const total = calculateTotal(products)
//   return <div>Total: {total}</div>
// }

// ===================== ПРАВИЛЬНО ===================================
// services/card.service.js
// class CardService {
//   calculateTotal(products) {
//     return products.reduce((acc, product) => acc + product.price, 0)
//   }
// }

// export const cardService = new CardService()

// components/ShoppingCard.jsx
// import { cardService } from '../services/card.service'

// export const ShoppingCard = ({ products }) => {
//   const total = cardService.calculateTotal(products)
//   return <div>Total: {total}</div>
// }

// Ошибка 2: Используйте константы правильно!
// =====================  НЕ правильно ===================================
if (status === 'SUCCESS') {
  // handle success
}

// ===================== ПРАВИЛЬНО ===================================
// constants/statuses.js
// export const STATUSES = {
//   SUCCESS: 'SUCCESS',
//   ERROR: 'ERROR',
//   PENDING: 'PENDING'
// }

// usage
// import { STATUSES } from './constants/statuses'

// if (status === STATUSES.SUCCESS) {
//   // handle success
// }

// Ошибка 3: Конфиги — залог стабильности
// =====================  НЕ правильно ===================================

// components/Navigation.js
// import Link from 'next/link'

// const Navigation = () => {
//   return <Link href="/contact">
//     Contact
//     </Link>
// }

// ===================== ПРАВИЛЬНО ===================================

//--- config/pages.config.js
// class PagesConfig {
//   home = '/'
//   about = '/about'
//   contact = '/contact'
// }

// export const pageConfig = new PagesConfig()

//--- components/Navigation.js

// import Link from 'next/link'
// import {pageConfig} from '../config/pages.config'

// const Navigation = () => {
//   return (
//     <Link href={pageConfig.contact}>
//        Contact
//     </Link>
//     )
// }

// export default Navigation

// Ошибка 4: Оптимизируем модули по максимуму
// =====================  НЕ правильно ===================================
// import _ from 'lodash'

// const sortedArray = _.sortBy(array, 'property')

// ===================== ПРАВИЛЬНО ===================================

// import sortBy from 'lodash'

// const sortedArray = sortBy(array, 'property')

// Ошибка 5: Динамические импорты как они есть!
// =====================  НЕ правильно ===================================
// pages/MyComponent.js
// import dynamic from 'next/dynamic'

// Отключаем SSR для компонентов, которые зависят от браузеррных API (например, window, document)
// const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {ssr: false})

// Просто делаем ленивую загрузку для улучшения производительность (SSR остается включённым)
// const LazyLoaderComponent = dynamic(() => import('../components/LazyLoaderComponent'))

// const MyPage = () => {
//   return (
//     <div className="">
//       <h1>My Page</h1>
//       <p>This page demonstrated dynamic imports with and without SSR</p>

//       {/* Компонент, который загружается только на клиенте (без SSR) */}
//       <ClientOnlyComponent/>

//       {/* Компонент, который  просто лениво загружается (SSR включен) */}
//       <LazyLoaderComponent/>

//     </div>
//   )
// }

// export default MyPage

// Ошибка 6: Уведомления
// =====================  НЕ правильно ===================================
// import { toast } from 'react-hot-toast'

// const handleClick = () => {
//   toast('Hello, world')
// }

// ===================== ПРАВИЛЬНО ===================================

// const handleClick = async () => {
//   const { toast } = await import('react-hot-toast')
//   toast('Hello, world')
// }

// Ошибка 8: SSR или ISR? Большая разница
//=====================================================================
// SSG static site generation создание статического сайта //

// SSR server side rendering - рендеринг на стороне сервера
// ISR incremental static regeneration - дополнительная статическая регенерация произошла от SSG

// Ошибка 9: tailwind-merge для чистоты кода
// =====================  НЕ правильно ===================================
// export const Button = ({ className, variant = 'primary', children }) => {
//   const baseClasses = 'px-4 py-2 font-bold rounded'
//   const variantClasses = variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'

//Пример обычным объединением классов, возможны конфликты и дубли
//   return (
//     <button className={`${baseClasses} ${variantClasses} ${className}`}>
//       {children}
//     </button>
//   )
// }

// ===================== ПРАВИЛЬНО ===================================
// import { twMerge } from 'tailwind-merge'

// export const Button = ({ className, variant = 'primary', children }) => {
//   const baseClasses = 'px-4 py-2 font-bold rounded'
//   const variantClasses = variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'

//   Пример обычным объединением классов, возможны конфликты и дубли
//   return (
//     <button className={twMerge(baseClasses, variantClasses, className)}>
//       {children}
//     </button>
//   )
// }

// Ошибка 10: Загрузка данных только когда нужно!
// =====================  НЕ правильно ===================================
// import { useQuery } from '@tanstack/react-query'

// export function Page() {
//   const {data} = useQuery({
//     queryKey: ['list'],
//     queryFn: fetchContents,
//   })

//   return (
//     <div className="">
//       <button>Показать содержание</button>
//       {data && <div>{data.contents}</div>}
//     </div>
//   )
// }

// ===================== ПРАВИЛЬНО ===================================
// первый вар

// import { useQuery } from '@tanstack/react-query'
// import { useState } from 'react'

// export function Page() {
//   const [isOpen, setIsOpen] = useState(false)

//   const query = useQuery({
//     queryKey: ['list'],
//     queryFn: fetchContents,
//     enabled: false
//   })

//   const handleShowContent = () => {
//     setIsOpen(true)
//     query.refetch()
//   }

//   return (
//     <div className="">
//       <button onClick={handleShowContent}>Показать содержание</button>
//       {isOpen && query.data && <div>{query.data.contents}</div>}
//     </div>
//   )
// }

// второй вар
// import { useState } from 'react'
// import dynamic from 'next/dynamic'

// // Ленивая погрузка компонента для содержания
// const TableDfContents = dynamic(() => import('../components/TableDfContents'))

// export const Page = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const handleShowContent = () => {
//     setIsOpen(true)
//   }

//   return (
//     <div className="">
//       <button onClick={handleShowContent}>Показать содержание</button>
//       {isOpen && <TableDfContents />}
//     </div>
//   )
// }
