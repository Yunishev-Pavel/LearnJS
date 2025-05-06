//  Задача 1: Базовый импорт
// У тебя есть файл math.js:
// math.js
export function sum(a, b) {
    return a + b;
  }
  
  export function mult(a, b) {
    return a * b;
  }
  // Вопрос: Как импортировать обе функции sum и mult в другой файл?
  import { sum, mult } from './math.js';
  import * as math from './math.js';
  
  
  //  Задача 2: Default + Named экспорт
  // Файл greetings.js:
  // greetings.js
  export default function sayHello(name) {
    return `Hello, ${name}!`;
  }
  export const smile = "😊";
  // Вопрос: Как импортировать обе сущности в другом файле, назвав sayHello как hello?
  import sayHello, { smile } from './greetings.js';
  
  
  // 🧩 Задача 3: Импорт всего
  // Файл colors.js:
  // colors.js
  export const red = "#FF0000";
  export const green = "#00FF00";
  export const blue = "#0000FF";
  // Вопрос: Как импортировать всё в виде объекта palette, чтобы обращаться к цветам так: palette.red?
  import * as palette from './colors.js';
  
  
  // Задача 4: Реэкспорт
  // У тебя два файла:
  // moduleA.js
  export const foo = 42;
  // moduleB.js
  // ?
  // Вопрос:Как из moduleB.js сделать так, чтобы можно было импортировать foo напрямую из moduleB.js?
  export { foo } from './moduleA.js';
  
  
  
  //  Задача 5: Ошибочный импорт
  // utils.js
  export default function print() {
    console.log("Hello");
  }
  // index.js
  // import { print } from './utils.js'; 
  // print();
  // Вопрос:Что не так и как это исправить
  import print from './utils.js';
  
  // Как импортировать только одну функцию из модуля динамически и сразу вызвать её? Пример?
  import('./math.js')
    .then(module => module.sum(3, 4));
  
    const { sum } = await import('./math.js');
  sum(3, 4);
  
  
  // обработка ошибок в import()
  try {
    const module = await import('./something.js');
  } catch (err) {
    console.error('Ошибка загрузки модуля', err);
  }
  
  
  
  
  // задать имя переменной модулю, загруженному через import()
  const utils = await import('./utils.js');
  utils.doSomething();
  
  
  // Можно писать путь через переменную:
  let moduleName = 'math.js';
  import(`./modules/${moduleName}`);
  // Но путь должен быть корректным и доступным во время выполнения, иначе будет ошибка. 
  // Webpack и другие сборщики могут не подхватить динамически сформированные пути — нужно быть аккуратным.
  
  
  
  // 1. Ленивая загрузка (lazy loading)
  // Подгружаем модуль только при необходимости, чтобы ускорить начальную загрузку страницы:
  const button = document.getElementById('loadChart');
  
  button.addEventListener('click', async () => {
    const module = await import('./chart.js');
    module.drawChart(); // запускаем функцию из модуля
  });
  // модуль chart.js загружается только при клике, а не сразу.
  
  
  // 2.Условный импорт (if)
  // Загружаем модуль в зависимости от условия, например от платформы:
  
  if (navigator.platform === 'Win32') {
    const winMod = await import('./windows-module.js');
    winMod.init();
  } else {
    const unixMod = await import('./unix-module.js');
    unixMod.init();
  }
  //  Зачем: не грузим лишний код, если он не нужен
  
  
  //3.  Импорт по действию пользователя
  // Пример: пользователь открывает модальное окно с редактированием профиля:
  async function openEditProfileModal() {
    const modalModule = await import('./edit-profile-modal.js');
    modalModule.showModal();
  }
  //  Зачем: не грузим UI-модуль, если пользователь им не воспользовался.
  
  // 4. Импорт в обработчиках событий
  // Например, при наведении мыши:
  element.addEventListener('mouseenter', async () => {
    const module = await import('./tooltip.js');
    module.showTooltip(element);
  });
  // Зачем: подгружаем подсказку только при первом наведении.
  
  // 5. Импорт при ошибках / fallback
  // Если основной модуль не работает, пробуем альтернативный:
  try {
    const main = await import('./main.js');
    main.start();
  } catch (e) {
    const fallback = await import('./fallback.js');
    fallback.start();
  }
  //  Зачем: реализуем устойчивость к сбоям.
  
  // 6. Импорт плагинов или расширений
  // Если в приложении подключаются внешние модули по списку:
  const pluginNames = ['auth', 'logger', 'notifier'];
  
  for (const name of pluginNames) {
    const plugin = await import(`./plugins/${name}.js`);
    plugin.init();
  }
  //  Зачем: масштабируемость — можно добавлять новые модули без переписывания кода.