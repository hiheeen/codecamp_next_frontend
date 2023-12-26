import BoardWrite from '../../../../src/components/unit/board/write/BoardWrite.container';
import BoardDetail from '../../../../src/components/unit/board/detail/BoardDetail.container';
import { FETCH_BOARD } from '../../../../src/components/unit/board/detail/BoardDetail.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../../src/commons/types/generated/types';

export default function BoardEditPage() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== 'string') return <></>;
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  return <BoardWrite isEdit={true} data={data} />;
}
