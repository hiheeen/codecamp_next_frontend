import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCH_BOARDS } from './BoardList.queries';
import { useRouter } from 'next/router';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../../commons/types/generated/types';

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickMoveToBoardDetail = (id: string): void => {
    router.push(`boards/${id}`);
  };
  const onClickMoveToBoardNew = (): void => {
    void router.push('/boards/new');
  };

  //   const onClickMoveToBoardDetail = (
  //     event: MouseEvent<HTMLDivElement>
  //   ): void => {
  //     void router.push(`/boards/${event.currentTarget.id}`);
  //   };  => 함수에 id를 인자로 넘겨주는 방법 말고, id(className같은)에 el._id 등을 넘겨주었을 때에는 event.target.id에 접근해야 하는데, 이때 event.target이 태그라는것을 명시해줘야 함.
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
