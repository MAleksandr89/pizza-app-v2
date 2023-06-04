const Bug_num = ({obj, i}) => {
    return ( 
        <tr>
        <td>{i + 1}</td>
        <td>
          <a href="http://jira.pecom.local/browse/BUG-28196">
            {obj.number}
          </a>
        </td>
        <td>{obj.Purpes}</td>
      </tr>
     );
}
 
export default Bug_num;