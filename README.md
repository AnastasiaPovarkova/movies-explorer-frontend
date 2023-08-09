# Проект Movies-Explorer на реакте

<a href="https://mestofront.anstpov.nomoredomains.monster" target="_blank">
    <img src="https://github.com/AnastasiaPovarkova/movies-explorer-frontend/blob/main/src/images/screensaver.png?raw=true" width="900" title="Movies https" alt="Movies https"/>
</a>

## На этом сайте пользватель может:

    Зарегистрироваться под любым мейлом (даже выдуманным)
    Редактировать свой профиль (имя, email)
    Искать фильмы для вечернего просмотра
    Сохранять и удалять фильмы из избранного
    Посмотреть информацию о создании и создателе дипломной работы
____

## Технологии

Технологии, использованные в проекте

### React

Использованы хуки use.State и use.Effect. Прописан UserContext. Всплывающие уведомления при успешной регистрации или ошибке регистрации и логина.

### react-router-dom

BrowserRouter, Routes, Route, Link, useNavigate, Navigate. Роут страниц /movies, /saved-movies и /profile защищен ProtectedRoute.

### REST API

Работа с сервером для получения данных пользователя и фильмов.

### Authorization

Все запросы на авторизацию, регистрацию работают через бэкенд `https://api.diploma.anstpov.nomoredomains.rocks`. Авторизация работает через cookie (на Android).


## Команды для сборки и запуска проекта

В папке проекта вы можете запустить команды:

### `npm start`

Запустить проект в режиме разработки.
Страничка будет автоматически обновляться при изменении кода, ошибки отслеживаются в консоли.
Адрес страницы: http://localhost:3000/

### `npm run build`

Скрипт сгенерирует оптимизированную сборку проекта. Внутри проекта появится новая папка `build`. Внутри `build/static` можно найти оптимизированные версии всего написанного кода, наряду с другими ресурсами: JS, CSS и шрифтами. 

### `npm run deploy`

Размещение проекта на сервере. В команде уже прописан predeploy: build.


## Ссылки 

IP 158.160.98.150
Ссылка на макет диплома: https://disk.yandex.ru/d/vjfJmEqWAue7Ug

Ссылка на сайт: https://front.diploma.anstpov.nomoreparties.sbs

Ссылка на бекэнд: https://api.diploma.anstpov.nomoredomains.rocks


