// Цель урока:

// 1. Разобраться с изменениями новой версии React Router
// 2. Изучить новые паттерны для реализации роутинга 
// Содержание урока:


// 1. Обзор учебного приложения
// 2. Установка React Router 6
// 3. <Routes> и <Route>
// 4. Вложенные <Route>
// 5. <Outlet>
// 6. <Navigate>
// 7. Новый Protected Route
// 8. <NavLink> и <Link>
// 9. useRoutes()

// Стартовый код (RR5): ссылка
// https://drive.google.com/drive/folders/1drqUCrW2V1wDpGmC0bE9ZaulDjqdT_aX

// Итоговый проект (RR6): ссылка
// https://drive.google.com/drive/folders/1GVCMHsqtPTkO2fTS65ujlybuCO_Ucjkg


// Lesson 13. Summary


// 1. Installation to rrv5 proeject 
//  npm i react-router-dom@6

// 2. <Switch/> --> <Routes/>

// /v5                  /v6
// <Switch>             <Routes> 
//     ...      --->       ...
// </Switch>            </Routes>

// 3. <Route/>

// - exact (exact by dafault)
// - render
// - component
// + element as JSX.Element
// - {children} + Nested Route components

// 4.Route path

// 1. / - not work as absolute 
// 1. / - не работает как абсолютный путь
// 2. Path is Relative, NOT absolute
// 2. Путь Relative НЕ абсолютный
// 3. Add /* in end of route path, if it has nested routes
// 3. Добавьте /* в конец пути маршрута, если он имеет вложенные маршруты
// 4. Use path params in nested routes
// 4. Используйте параметры пути во вложенных маршрутах
// 5. DON'T use OPTIONAL params
// 5. НЕ ИСПОЛЬЗУЙТЕ доп параметры
// 6. Exact by default
// 7. Order doesn't matter
// 7. Порядок не имеет значения
// 8. Use index route param 
// 8. Использовать index параметр маршрута
// 9. Use * path for not found routes 
// 9. Используйте * путь для не найденных маршрутов 

// 5. <Outlet/>
// Use Outlet to describe a point of render child Route components in Layouts
//  Используйте Outlet для описания точки рендеринга дочерних компонентов маршрута в макетах.

// 6. <Redirect/> --> <Navigate/>

{/* <Navigate/> component API */}

// 1. to (string path)
// 2. state (object)
// 3. replace (boll)

// 7. Programmatically navigation. useHistory --> useNavigation
//    Программная навигация

// useNavigation hook Api 

// 1. to(path or number) (-1)-перебросит на одну страницу назад
// 2. state (object)
// 3. replase (bool) 

// const navigation = useNavigation()
// navigation(to, (replace, state))


// 8. Protected Route
// ...................       .......................
// . Protected Route .<------.Request url from user.---Signal to React router
// ...................       .......................           .
//                                                             .
//                                                             ..........................Parse URL Path
//                   Return JSX Element---Yes....                                                .
//                                              .                                                .
//                                               is user logged in?------------Call Route by Path.
//                                              .
//                                           Return Redirect(Navigate)....


// 9. NavLink and Link

// - exact --> end 
// - activeClassName
// - activeStyle
// - (isActive) ---> ({isActive})
// + Nested links and path like linux dir navigation("../" = one Route comonet level UP)

// 10. useRoutes

// Use hook useRoutes to describe routes throw array and objects 