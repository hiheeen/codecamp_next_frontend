import BoardWrite from '../../../../src/components/unit/board/write/BoardWrite.container';
import BoardDetail from '../../../../src/components/unit/board/detail/BoardDetail.container';
import { FETCH_BOARD } from '../../../../src/components/unit/board/detail/BoardDetail.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);
  return <BoardWrite isEdit={true} data={data} />;
}
