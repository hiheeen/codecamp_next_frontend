import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import BoardCommentListUI from './BoardCommentList.presenter';
import {
  //   DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from './BoardCommentList.queries';
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';

export default function BoardCommentList() {
  const router = useRouter();
  if (typeof router.query.boardId !== 'string') return <></>;

  //   if (typeof router.query.boardId !== 'string') return <></>;

  //   const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  const onClickDelete = () => {};
  //   const onClickDelete = async (
  //     event
  //   ) => {
  //     const password = prompt("비밀번호를 입력하세요.");
  //     try {
  //       if (!(event.target instanceof HTMLImageElement)) {
  //         alert("시스템에 문제가 있습니다.");
  //         return;
  //       }

  //       await deleteBoardComment({
  //         variables: {
  //           password,
  //           boardCommentId: event.target.id,
  //         },
  //         refetchQueries: [
  //           {
  //             query: FETCH_BOARD_COMMENTS,
  //             variables: { boardId: router.query.boardId },
  //           },
  //         ],
  //       });
  //     } catch (error) {
  //       if (error instanceof Error) alert(error.message);
  //     }
  //   };

  return (
    <BoardCommentListUI
      data={data}
      // onClickDelete={onClickDelete}
    />
  );
}
