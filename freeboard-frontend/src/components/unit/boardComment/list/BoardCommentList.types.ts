import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardCommentListProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
}
