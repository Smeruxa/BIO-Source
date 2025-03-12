import avatar from "../assets/avatar.jpg";

export default function Header() {
    return (
        <div className="header">
            <img src={avatar} alt="Smeruxa" className="avatar" />
            <h1 className="title">Smeruxa</h1>
        </div>
    );
}