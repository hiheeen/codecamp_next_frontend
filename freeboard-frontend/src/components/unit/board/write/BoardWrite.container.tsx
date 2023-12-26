import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';
import { useRouter } from 'next/router';
import { IBoardWriteProps, IUpdateBoardInput } from './BoardWrite.types';
import { ChangeEvent } from 'react';
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from '../../../../commons/types/generated/types';
import type { Address } from 'react-daum-postcode';

export default function BoardWrite({ isEdit, data }: IBoardWriteProps) {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [zonecode, setZonecode] = useState('');

  const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, 'updateBoard'>,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const router = useRouter();
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== '') {
      setWriterError('');
    }
    if (
      event.target.value !== '' &&
      password !== '' &&
      title !== '' &&
      contents !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== '') {
      setPasswordError('');
    }
    if (
      writer !== '' &&
      event.target.value !== '' &&
      title !== '' &&
      contents !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== '') {
      setTitleError('');
    }
    if (
      writer !== '' &&
      password !== '' &&
      event.target.value !== '' &&
      contents !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== '') {
      setContentsError('');
    }
    if (
      writer !== '' &&
      password !== '' &&
      title !== '' &&
      event.target.value !== ''
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
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
              boardAddress: {
                zipcode: zonecode,
                address,
                addressDetail,
              },
            },
          },
        });
        const boardId = result.data?.createBoard._id;
        if (result.data?.createBoard._id === undefined) {
          alert('요청에 문제가 있습니다.');
          return;
        }
        router.push(`/boards/${boardId}`);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!contents && !address && !addressDetail) {
      alert('수정된 내용이 없습니다');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }

    const updateBoardInput: IUpdateBoardInput = { boardAddress: {} };
    if (address) updateBoardInput.boardAddress.address = address;
    if (zonecode) updateBoardInput.boardAddress.zipcode = zonecode;
    if (addressDetail)
      updateBoardInput.boardAddress.addressDetail = addressDetail;
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다.');
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      console.log(result, 'updateResult');
      if (result.data?.updateBoard._id === undefined) {
        alert('요청에 문제가 있습니다.');
        return;
      }
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  const onToggleAddressModal = (): void => {
    setIsOpen(!isOpen);
  };
  const onSearchAddressComplete = (data: Address) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsOpen(!isOpen);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
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
    onToggleAddressModal,
    onSearchAddressComplete,
    onChangeAddressDetail,
    isOpen,
    isEdit,
    isActive,
    data,
    address,
    zonecode,
  };
  return <BoardWriteUI {...propsForBoardWriteUI} />;
}
