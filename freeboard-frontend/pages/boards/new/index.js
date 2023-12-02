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
} from '../../../styles/boardsNew';

function BoardNew() {
  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 입력하세요"></Writer>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력하세요"
          ></Password>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 입력하세요"></Subject>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents placeholder="내용을 입력하세요"></Contents>
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
        <SubmitButton>등록하기</SubmitButton>
      </SubmitWrapper>
    </Wrapper>
  );
}

export default BoardNew;
