const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_links-block">
        <div className="footer_left-links">
          <ul className="links-list footer-list">
            <li className="link-item">
              <a href="cyber_security.php">Kiberhowpsuzlyk</a>
            </li>
            <li className="link-item">
              <a href="artificial_intelligence.php">Emeli intellekt</a>
            </li>
            <li className="link-item">
              <a href="../kiberbaslesik/">Kiberbäsleşik</a>
            </li>
            <li className="link-item">
              <a href="../kibersozluk/">Kibersözlük</a>
            </li>
            <li className="link-item">
              <a href="../tazelik">Kibertäzelikler</a>
            </li>
            <li className="link-item">
              <a href="../forum.php">Forum sahypa</a>
            </li>
          </ul>
        </div>
        <div className="footer_right-coordinates">
          <ul className="coordinates-list footer-list">
            <li className="coordinate-item">Aşgabat. ş</li>
            <li className="coordinate-item">E-salgy: innoteh@sanly.tm </li>
            <li className="coordinate-item">Tel: </li>
          </ul>
        </div>
      </div>
      <img
        className="footer-image__ui-union"
        src="logo_yasyl.png"
        alt="Kiberportal"
      />
      <div className="footer_down-info">
        <p className="footer_down-info_rights">
          © {new Date().getFullYear()} InnoTeh — Ähli hukuklary goralan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
