import React from "react";
import "./../styles/contacts.css";
import icon from "./../images/hh.jpg";
import { FaVk, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Иконки FontAwesome
const Contacts = () => {
    return (
        <div className="footer-container" id="contacts">
            <div className="contacts-container">
                <p className="private">&copy; IlyaPodkin {new Date().getFullYear()}</p>
                <span className="comment">Сделано с ❤️ и кодом</span>
                <div className="link-contacts">
                    <a href="https://vk.com/id420496965" target="_blank" rel="noopener noreferrer" title="VK">
                        <FaVk className="social-icon" />
                    </a>
                    <a href="https://t.me/ilyapodkin" target="_blank" rel="noopener noreferrer" title="Telegram">
                        <FaTelegram className="social-icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://spb.hh.ru/resume/27f7caf5ff09ceafda0039ed1f51547a79574c" target="_blank" rel="noopener noreferrer" title="HH.ru">
                        <img className="social-icon" id="hh-ru" src={icon} alt="Логотип hh.ru" />
                    </a>
                    <a href="https://github.com/IlyaPodkin" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;