import Bug_num from "./Bug_num";

const Bug = ({ data }) => {
  return (
    <div className="bug">
      <h2>Исправленные ошибки</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>№</strong>
            </td>
            <td>
              <strong>Обозначение</strong>
            </td>
            <td>
              <strong>Описание</strong>
            </td>
          </tr>
          {data.map((obj, i) => (
            <Bug_num obj={obj} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bug;
