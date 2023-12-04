import { useState } from 'react';
import {
  Wrapper,
  InputWrapper,
  WriterWrapper,
  Writer,
  Label,
  Password,
  Title,
  Subject,
  Contents,
  Address,
  ZipCodeWrapper,
  ZipCode,
  SearchButton,
  Youtube,
  UploadButton,
  ImageWrapper,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  SubmitButton,
  SubmitWrapper,
  Error,
} from '../../../styles/boardsNew';

function BoardNew() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

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

  const onClickSubmit = () => {
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
      alert('게시글이 등록되었습니다.');
    }
  };

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            value={writer}
            onChange={onChangeWriter}
            type="text"
            placeholder="이름을 입력하세요"
          ></Writer>
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={onChangePassword}
          ></Password>
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 입력하세요"
        ></Subject>
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>

        <Contents
          value={contents}
          onChange={onChangeContents}
          placeholder="내용을 입력하세요"
        ></Contents>
        <Error>{contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipCodeWrapper>
          <ZipCode placeholder="05729" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipCodeWrapper>
        <Address></Address>
        <Address></Address>
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요"></Youtube>
      </InputWrapper>
      <InputWrapper>
        <Label>사진 첨부</Label>
        <ImageWrapper>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageWrapper>
      </InputWrapper>
      <OptionWrapper>
        <Label>메인 설정</Label>
        {/* input과 label을 id와 htmlFor로 연결, radio-input 두 개를 name으로 연결 */}
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <SubmitWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </SubmitWrapper>
    </Wrapper>
  );
}

export default BoardNew;
