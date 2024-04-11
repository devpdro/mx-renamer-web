import { TableInformationProps } from "../../../../../../../../interfaces";

import * as S from "./table-styles";

const Table: React.FC<TableInformationProps> = ({ caption, data, width }) => {
  return (
    <S.TableId width={width}>
      <caption>{caption}</caption>
      <tbody>
        {Array.isArray(data) &&
          data.map((item: string, index: number) => (
            <tr key={index}>
              <th>{item}</th>
            </tr>
          ))}
      </tbody>
    </S.TableId>
  );
};

export default Table;
