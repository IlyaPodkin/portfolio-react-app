import React from "react";
import "./../styles/skills.css";
import MyPhoto from "./../images/It`s me.jpg";

const Skills = () => {
    return (
        <div className="skills-container">

            <h2 className="skills-header">Навыки</h2>

            <div className="elements-container">
                <div className="number-container">
                    1
                </div>
                <div className="info-container">
                    <h3>Опыт разрабоки</h3>
                    <ul>
                        <li>Создаю веб-приложения с использованием ASP.NET Core на серверной стороне и React на клиентской стороне по методологии RESTful API.</li>
                        <li>Для контейнеризации приложений применяю Docker.</li>
                        <li>Разрабатываю desktop-приложения на базе WPF с использованием архитектурного паттерна MVVM.</li>
                        <li>Основной инструмент и язык программирования: C#, JS.</li>
                    </ul>
                </div>
                <div className="photo-container">
                    <img src={MyPhoto} className="avatar" alt="Фото автора" />
                </div>
            </div>

            <div className="elements-container">
                <div className="number-container">
                    2
                </div>
                <div className="info-container">
                    <h3>Языки программирования</h3>
                    <ul>
                        <li>Основные: C#, JavaScript.</li>
                        <li>Дополнительный опыт: Python (разработка backend-части криптографического приложения), C, C++, Java (простые программы).</li>
                    </ul>
                </div>
                <div className="photo-container">
                    <img src={MyPhoto} className="avatar" alt="Фото автора" />
                </div>
            </div>

            <div className="elements-container">
                <div className="number-container">
                    3
                </div>
                <div className="info-container">
                    <h3>Фреймворки библиотеки и другие технологии</h3>
                    <ul>
                        <li>Backend: ASP.NET Core MVC, Entity Framework, Swagger.</li>
                        <li>Frontend: React, Bootstrap (использую редко, так как самостоятельно занимаюсь написанием стилей для веб-приложений).</li>
                        <li>Desktop: WPF (MVVM), WinForms.</li>
                        <li>Контейнеризация: Docker.</li>
                        <li>Базы данных: PostgreSQL, MS SQL, SQLite, Oracle PL/SQL.</li>
                    </ul>
                </div>
                <div className="photo-container">
                    <img src={MyPhoto} className="avatar" alt="Фото автора" />
                </div>
            </div>

            <div className="elements-container">
                <div className="number-container">
                    4
                </div>
                <div className="info-container">
                    <h3>Технологии разметки</h3>
                    <ul>
                        <li>Интерфейсы и документы: XAML, HTML/CSS, Markdown, LaTeX.</li>
                    </ul>
                </div>
                <div className="photo-container">
                    <img src={MyPhoto} className="avatar" alt="Фото автора" />
                </div>
            </div>

            <div className="elements-container">
                <div className="number-container">
                    5
                </div>
                <div className="info-container">
                    <h3>Мониторинг и управление версиями</h3>
                    <ul>
                        <li>Мониторинг: Zabbix, Grafana.</li>
                        <li>Управление версиями: GIT.</li>
                    </ul>
                </div>
                <div className="photo-container">
                    <img src={MyPhoto} className="avatar" alt="Фото автора" />
                </div>
            </div>

            <div className="elements-container">
                <div className="number-container">
                    6
                </div>
                <div className="info-container">
                    <h3>Рабочая среда и инструменты</h3>
                    <ul>
                        <li>IDE: Visual Studio 2022, Visual Studio Code.</li>
                        <li>Сервисы: Confluence, Jira, Kaiten.</li>
                    </ul>
                </div>
                <div className="photo-container">
                    <img src={MyPhoto} className="avatar" alt="Фото автора" />
                </div>
            </div>

        </div>
    );
}

export default Skills;