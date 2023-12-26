import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardDetailUIProps {
  onClickMoveUpdate: () => void;
  data?: Pick<IQuery, 'fetchBoard'>;
}
