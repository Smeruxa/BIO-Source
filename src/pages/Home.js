import { useEffect } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.jpg";
import project8 from "../assets/projects/project8.jpg";
import project9 from "../assets/projects/project9.jpg";
import project10 from "../assets/projects/project10.jpg";
import project11 from "../assets/projects/project11.jpg";
import python from "../assets/projects/python.png";
import blast from "../assets/blast.png";
import github from "../assets/github.png";
import vk from "../assets/vk.png";
import telegram from "../assets/telegram.png";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    { title: "Admin Tools", image: project1, callback: () => window.open("https://www.blast.hk/threads/74682/"), tooltip: "AdminTools для Russia RP" },
    { title: "Stop Whining", image: project2, callback: () => window.open("https://www.blast.hk/threads/74702/"), tooltip: "Мульти-чит для SA:MP/CR:MP с поддержкой R1/R3" },
    { title: "Quick Shout", image: project3, callback: () => window.open("https://smeruxa.tw1.ru/talks/"), tooltip: "Короткое общение через мини-чат" },
    { title: "SChat", image: project10, callback: () => window.open("https://github.com/Smeruxa/SChat/tree/master"), tooltip: "Мобильный чат-мессенджер" },
    { title: "Password Manager", image: project11, callback: () => window.open("https://github.com/Smeruxa/Password-Manager-QT"), tooltip: "Менеджер паролей/заметок/важных дат" },
    { title: "Pro AutoClicker", image: project4, callback: () => window.open("https://www.blast.hk/threads/114415/"), tooltip: "Pro-автокликер на левую и правую кнопок мыши" },
    { title: "Multi Injector", image: project5, callback: () => window.open("https://github.com/Smeruxa/Multi-Injector"), tooltip: "Мульти-инжектор DLL для AmazingRP" },
    { title: "Messenger", image: project6, callback: () => window.open("https://github.com/Smeruxa/Messenger"), tooltip: "Мой первый мессенджер на HTML/CSS/PHP/JS" },
    { title: "Translator RU-EN", image: project7, callback: () => window.open("https://github.com/Smeruxa/Translator-RU-EN"), tooltip: "Оверлей переводчик с английского внутри игры" },
    { title: "Samp Launcher", image: project8, callback: () => window.open("https://smeruxa.tw1.ru/error/"), tooltip: "Лаунчер SA:MP (выполнено за 10$) | один из первых моих заказов" },
    { title: "ARZ WoodBot", image: project9, callback: () => window.open("https://smeruxa.tw1.ru/error/"), tooltip: "Бот для Arizona RP [Заказ]" },
    { title: "Weather Monitoring", image: python, callback: () => window.open("https://github.com/Smeruxa/tg-Weather-Monitoring"), tooltip: "Мониторинг погоды в выбранной точке" },
    { title: "WB Parser", image: python, callback: () => window.open("https://github.com/Smeruxa/tg-Wildberries-Parser"), tooltip: "Wildberries парсер товаров по названию" },
    { title: "Python Bot Controller", image: python, callback: () => window.open("https://github.com/Smeruxa/PythonBot-Controller"), tooltip: "Запуск пайтон-ботов на сайте" }
];

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container">
            <Header />
            <div className="bio-section" data-aos="fade-up">
                <div className="bio-content">
                    <h2>Привет, я Smeruxa</h2>
                    <p className="bio">
                        Я фриланс FullStack разработчик. Пишу на языках <span className="highlight">C++, Python, PHP, CSS, HTML, React JSX/TSX, MySQL, Lua для SA:MP и CR:MP</span>, создаю веб-приложения, разрабатываю приложения для Windows, развертываю ботов, поднимаю серверы и многое другое.
                    </p>
                    <div className="skills-icons">
                        <div className="icon">⚙️ C++</div>
                        <div className="icon">💻 React</div>
                        <div className="icon">🐍 Python</div>
                        <div className="icon">🌐 Web</div>
                    </div>
                </div>
            </div>
            <div className="projects-section">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        image={project.image}
                        callback={project.callback}
                        tooltip={project.tooltip}
                        data-aos="fade-up"
                    />
                ))}
            </div>
            <div className="button-container" data-aos="fade-up">
                <button className="visit-button" onClick={() => window.open("http://smeruxa.tw1.ru")}>Визитная карточка</button>
            </div>
            <div className="contact-buttons" data-aos="fade-up">
                <a href="https://vk.com/wfsmeruxa" className="contact-button">
                    <img src={vk} alt="VK" className="contact-icon" />
                </a>
                <a href="https://t.me/smeruxa" className="contact-button">
                    <img src={telegram} alt="Telegram" className="contact-icon" />
                </a>
                <a href="https://www.blast.hk/threads/190175/" className="contact-button">
                    <img src={blast} alt="Forum" className="contact-icon" />
                </a>
                <a href="https://github.com/Smeruxa" className="contact-button">
                    <img src={github} alt="Github" className="contact-icon" />
                </a>
            </div>
        </div>
    );
}