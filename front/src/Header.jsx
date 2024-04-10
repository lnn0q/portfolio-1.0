const Header = () => {
  return (
    <header>
      <div className="header__previewBox">
        <img src="/assets/images/background.jpg" className="header__img" />
        <div className="header__labelModal">
          <div className="header__labelTyped">Hi!</div>
        </div>
      </div>
      <nav className="header__nav">
        <a href="#">About</a>
        <a href="#">Contacts</a>
        <a href="#">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
