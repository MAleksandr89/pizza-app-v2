const Relizz = (obj) => {
  console.log(obj);
  return (
    <>
      <div>
        
        <div className="epic">
          <p>
            1.
            <a href="http://jira.pecom.local/browse/EPIC-10399">EPIC-10399</a>/{" "}
            {}
          </p>
          <p>Цель реализации - Тутцель</p>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Было</strong>
                </td>
                <td>
                  <strong>Стало</strong>
                </td>
              </tr>
              <tr>
                <td>ТуттексБыло</td>
                <td>ТуттексСтало</td>
              </tr>
            </tbody>
          </table>
          <p>Над реализацией работали:</p>
        </div>
      </div>
    </>
  );
};

export default Relizz;
