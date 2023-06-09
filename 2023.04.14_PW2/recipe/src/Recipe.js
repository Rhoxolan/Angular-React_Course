import cutlets from "./cutlets.jpg"

function Recipe() {
    return (
        <div>
            <h3>Ингридиенты:</h3>
            <ul>
                <li>Свинина - 0,5 кг</li>
                <li>Говядина - 0,5 кг</li>
                <li>Лук репчатый - 1-2 шт.</li>
                <li>Яйцо - 1 шт.</li>
                <li>Соль - 0,5-1 ч. л.</li>
                <li>Перец черный молотый - 0,25 ч. л.</li>
                <li>Сухари панировочные - для панировки котлет</li>
                <li>Масло растительное для жарки - 50 мл</li>
            </ul>
            <h3>Пошаговый рецепт:</h3>
            <ol>
                <li>Свинина - 0,5 кг</li>
                <li>Мясо нарезать кусочками. Лук репчатый очистить и разрезать на 4 части. Мясо и лук перемолоть на мясорубке.</li>
                <li>
                    В полученный мясной фарш добавить яйца, соль, перец. Фарш хорошенько перемешать. Для того, чтобы фарш получился удачным,
                    его необходимо тщательно отбить, несколько раз бросая с некоторым усилием в миску. Далее желательно поместить фарш в
                    холодильник на час-два, но если нет времени, можно и сразу жарить котлеты.
                </li>
                <li>Сформировать небольшие котлеты из фарша. Обвалять их в сухарях.</li>
                <li>
                    Разогреть сковороду. Налить растительное масло. Жарить котлеты на среднем огне с двух сторон до румяной корочки.
                    Затем выложить все жареные котлеты в сковороду, налить немного воды, накрыть крышкой и потушить около 10 минут.
                </li>
                <li>Котлеты готовы. Приятного аппетита!</li>
            </ol>
            <img src={cutlets} class="img-fluid mx-auto d-block" alt="cutlets" />
        </div>
    );
}

export default Recipe;

/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */