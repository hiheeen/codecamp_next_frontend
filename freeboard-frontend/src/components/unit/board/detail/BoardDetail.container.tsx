import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD } from './BoardDetail.queries';
// import BoardCommentList from '../../boardComment/list/BoardCommentList.container';
// import BoardCommentWrite from '../../boardComment/write/BoardCommentWrite.container';

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);

  const onClickMoveUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  return (
    <>
      <BoardDetailUI data={data} onClickMoveUpdate={onClickMoveUpdate} />
    </>
  );
}
