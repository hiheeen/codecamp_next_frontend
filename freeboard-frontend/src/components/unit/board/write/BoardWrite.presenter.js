import * as S from './BoardWrite.styles';

export default function BoardWriteUI({
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
}) {
  return (
    <S.Wrapper>
      <S.Title>게시글 등록</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            value={writer}
            onChange={onChangeWriter}
            type="text"
            placeholder="이름을 입력하세요"
          ></S.Writer>
          <S.Error>{writerError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={onChangePassword}
          ></S.Password>
          <S.Error>{passwordError}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 입력하세요"
        ></S.Subject>
        <S.Error>{titleError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          value={contents}
          onChange={onChangeContents}
          placeholder="내용을 입력하세요"
        ></S.Contents>
        <S.Error>{contentsError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.ZipCode placeholder="05729" />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.ZipCodeWrapper>
        <S.Address></S.Address>
        <S.Address></S.Address>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요"></S.Youtube>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.ImageWrapper>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
        </S.ImageWrapper>
      </S.InputWrapper>
      <S.OptionWrapper>
        <S.Label>메인 설정</S.Label>
        {/* input과 label을 id와 htmlFor로 연결, radio-input 두 개를 name으로 연결 */}
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.SubmitWrapper>
        <S.SubmitButton onClick={onClickSubmit}>등록하기</S.SubmitButton>
      </S.SubmitWrapper>
    </S.Wrapper>
  );
}
