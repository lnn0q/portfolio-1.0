const Content = () => {
  // return <main>Personality, Carrier</main>;
  return (
    <main>
      <div className="main--badge">
        <div className="main--badgeLeft">
          <div className="main--profileIcon"></div>
        </div>
        <div className="main--badgeRight">
          <div className="main--fullName">Bohdan Denysenko</div>
          <div className="main--age">
            <mark>lvl:</mark> 20
          </div>
        </div>
      </div>
      <div className="main--personality"></div>
      <div className="main--carrier"></div>
    </main>
  );
};

export default Content;
