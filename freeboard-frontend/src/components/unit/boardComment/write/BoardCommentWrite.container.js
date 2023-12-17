import { useState } from 'react';
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
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickWrite = async () => {
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: 0,
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
