const Badge = () => {
  return (
    <div className="main--badge">
      <div className="main--badgeLeft">
        <div className="main--profileIcon"></div>
      </div>
      <div className="main--badgeRight">
        <table>
          <tr className="main--fullName">
            <td>
              <mark>name:</mark>
            </td>
            <td>Bohdan Denysenko</td>
          </tr>
          <tr className="main--class">
            <td>
              <mark>class:</mark>
            </td>
            <td>clown</td>
          </tr>
          <tr className="main--age">
            <td>
              <mark>lvl:</mark>
            </td>
            <td>20</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Badge;
