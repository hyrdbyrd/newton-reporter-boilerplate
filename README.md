# Для работы
Переносим папочку склонированого проекта newton-reporter в корень, обзываем папочку newton-reporter, после мы должны собрать сборку посредство
```sh
cd newton-reporter && npm i && cd ..
```
после инициализируем боилерплейт
```sh
npm run init-all
```
# Интеграционные тесты
## Инициализация репозитория (вместо npm install)
```sh
npm run init-all
```
## Скрипты
Для начала подгрузить в отдельной вкладке терминала selenium-standalone
```sh
npm run selenium
```
### Для запуска тестов gui
```sh
npm run hermione-gui
```
### Для запуска тестов статики
```sh
npm run hermione-static
```
