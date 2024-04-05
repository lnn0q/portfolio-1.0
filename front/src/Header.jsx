const Header = () => {
  return (
    <header>
      <div className="header__previewBox">
        <img src="/assets/images/background.jpg" className="header__img" />
        <div className="header__labelModal">
          <div className="header__labelTyped">Welcome!</div>
        </div>
      </div>
      <nav className="header__nav">
        <a href="#1">About</a>
        <a href="#2">Contacts</a>
        <a href="#3">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
