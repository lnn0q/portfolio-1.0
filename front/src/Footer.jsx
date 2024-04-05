const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <div className="footer__label">
        &copy; {2024 !== year ? "2024 - " + year : "2024"}
      </div>
    </footer>
  );
};

export default Footer;
