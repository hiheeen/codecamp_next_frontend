import { ChangeEvent, useState } from 'react';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';

export default function BoardCommentWrite() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const router = useRouter();
  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const onClickWrite = async (): Promise<void> => {
    // async함수에서는 return 값이 없는 void 일 때 Promise를 붙여주는 듯 하다.
    try {
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }

      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 0, // 별점
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      contents={contents}
    />
  );
}
