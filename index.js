// текущий правильный ответ
let correctAnswer;
// количество правильных ответов
let score = 0;


// переменные для HTML-элементов
// кнопка «ответить»
const button = document.querySelector('#button');
// количество правильных ответов
const scoreHolder = document.querySelector('#score-holder');
// текст — правильный/неправильный ответ
const feedback = document.querySelector('#feedback');
// таймер с обратным отсчетом
const timerHolder = document.querySelector('#timer-holder');
// текущий вопрос
const task = document.querySelector('#task');
// инпут для ввода ответа
const input = document.querySelector('#input');

const holder = document.querySelector('.holder');

// обработчик клика на кнопку «ответить»
button.addEventListener('click', function () {
    // считываем ответ, который ввел пользователь
    let answer = +input.value;

    // если ответ правильный
    if (answer === correctAnswer) {
        // увеличиванем количество правильных ответов
        score++;
        // и обновляем значение в интерфейсе
        scoreHolder.textContent = `Score: ${score}`;
        // выводим соответствующий текст
        setFeedback('correct');
        // генерируем новое задание
        generateTask();
    } else {
        // ответили неправильно — показываем сообщение об этом
        setFeedback('incorrect');
    }
});

// фунция для обратной связи в интерфейсе
// возможные состояния:
// * correct — правильный ответ
// * incorrect — неправильный ответ
// * out-of-time — время вышло
function setFeedback(status = 'correct') {
    switch (status) {
        case 'correct':
            feedback.textContent = `Correct!`;
            feedback.style.color = 'rgb(142, 180, 60)';
            input.value = '';
            break;
        case 'incorrect':
            feedback.style.color = 'red';
            feedback.textContent = `Incorrect`;
            break;
        case 'out-of-time':
            feedback.textContent = `Well done!`;
            feedback.style.color = 'white';
            button.disabled = true;
            break;
    }
}

// генерируем новое задание
function generateTask() {
    // получаем два рандомных числа в пределах от 0 до 10 включительно
    const first = arbitraryRandom(0, 20);
    const second = arbitraryRandom(0, 20);
    // обновляем переменную с правильным ответом
    correctAnswer = first + second;
    // обновляем текст вопроса в интерфейсе
    task.textContent = `${first} + ${second} =`;
}

// функция для генерации случайных чисел
function arbitraryRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

// функция с запуском таймера
function startTimer() {
    // начальное значение таймера в секундах
    let timer = 60;
    // генерируем вопрос
    generateTask();

    // запускаем таймер и сохраняем его intervalId
    let intervalId = setInterval(() => {
        // каждый раз уменьшаем количество прошедших секунд
        timer--;

        // если значение таймера меньше равно нуля
        if (timer <= 0) {
            // остановить таймер
            clearInterval(intervalId);
            // вывести в интерфейсе сообщение, что время кончилось
            setFeedback('out-of-time');
        }

        // вывести, сколько времени осталось
        timerHolder.textContent = `00:${timer.toString().padStart(2, '0')}`;

    }, 1000);
}

// запустить таймер
startTimer();


//выбрать рандомное изображение для background


const bgArray = [

    'geese.jpg',
    'geese-a.jpg',
    'geese-b.jpg',
    'geese-c.jpg',
    'geese-d.jpg',
    'geese-e.jpg',
    'geese-f.jpg',
    'geese-g.jpg',
    'geese-h.jpg',
    'geese-i.jpg'
]

const getRandomEl = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

const generateBg = () => 
{
    holder.style.backgroundImage = `url(img/${getRandomEl(bgArray)})`
}
generateBg();