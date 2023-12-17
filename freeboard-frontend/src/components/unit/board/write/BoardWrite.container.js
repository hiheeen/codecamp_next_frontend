import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';
import { useRouter } from 'next/router';

export default function BoardWrite({ isEdit, data }) {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== '') {
      setWriterError('');
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== '') {
      setPasswordError('');
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== '') {
      setTitleError('');
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== '') {
      setContentsError('');
    }
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError('작성자를 입력해주세요.');
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    }
    if (!title) {
      setTitleError('제목을 입력해주세요.');
    }
    if (!contents) {
      setContentsError('내용을 입력해주세요.');
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              title,
              writer,
              contents,
              password,
            },
          },
        });
        const boardId = result.data.createBoard._id;
        router.push(`/boards/${boardId}`);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert('수정된 내용이 없습니다');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    const result = await updateBoard({
      variables: {
        boardId: router.query.boardId,
        password,
        updateBoardInput,
      },
    });
    console.log(result, 'updateResult');
    router.push(`/boards/${result.data.updateBoard._id}`);
  };
  const propsForBoardWriteUI = {
    writer,
    password,
    title,
    contents,
    writerError,
    passwordError,
    titleError,
    contentsError,
    onChangeWriter,
    onChangePassword,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onClickUpdate,
    isEdit,
    data,
  };
  return <BoardWriteUI {...propsForBoardWriteUI} />;
}
