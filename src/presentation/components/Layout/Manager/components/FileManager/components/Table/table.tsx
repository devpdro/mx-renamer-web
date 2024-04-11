import { TableInformationProps } from "../../../../../../../../interfaces";

import * as S from "./table-styles";

const Table: React.FC<TableInformationProps> = ({ caption, data, width }) => {
  return (
    <S.TableId width={width}>
      <caption>{caption}</caption>
      <tbody>
        {Array.isArray(data) &&
          data.map(({ id, name, index }) => (
            <tr key={index}>
              <th>{id}</th>
              <th>{name}</th>
            </tr>
          ))}
      </tbody>
    </S.TableId>
  );
};

export default Table;
