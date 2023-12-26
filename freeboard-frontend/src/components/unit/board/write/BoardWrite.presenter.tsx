import { Modal } from 'antd';
import * as S from './BoardWrite.styles';
import { IBoardWriteUIProps } from './BoardWrite.types';
import DaumPostcodeEmbed from 'react-daum-postcode';
export default function BoardWriteUI({
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
}: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>게시글 {isEdit ? '수정' : '등록'}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            // value={writer}
            onChange={onChangeWriter} // value를 설정하지 않아도, event에 의해 글자는 써짐, 데이터 조작 위한 setState에서의 state값과는 별개인 것.
            type="text"
            placeholder="이름을 입력하세요"
            defaultValue={data?.fetchBoard?.writer ?? ''}
            readOnly={!!data?.fetchBoard?.writer} // 앞에 !!를 붙여 boolean으로 한번 더 명시해준 이유는 typescript에서 readonly는 엄격한 boolean을 원하기 때문
          ></S.Writer>
          <S.Error>{writerError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력하세요"
            // value={password}
            onChange={onChangePassword}
          ></S.Password>
          <S.Error>{passwordError}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          //   value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 입력하세요"
          defaultValue={data?.fetchBoard?.title ?? ''}
        ></S.Subject>
        <S.Error>{titleError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          //   value={contents}
          onChange={onChangeContents}
          placeholder="내용을 입력하세요"
          defaultValue={data?.fetchBoard?.contents ?? ''} // 널리쉬 어쩌고... 연산자 중 좌항이 null이나 undefined라면 뒤의 것을 실행. 등록하기에서는 defaultValue로 들어올 데이터가 없으므로 null or undefined일 수 있음!
        ></S.Contents>
        <S.Error>{contentsError}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.ZipCode
            placeholder="05729"
            readOnly
            // value={
            //   data ? data?.fetchBoard?.boardAddress?.zipcode ?? '' : zonecode
            // }
            value={
              zonecode !== ''
                ? zonecode
                : data?.fetchBoard?.boardAddress?.zipcode ?? ''
            }
            defaultValue={data?.fetchBoard?.boardAddress?.zipcode ?? ''}
          />
          <S.SearchButton onClick={onToggleAddressModal}>
            우편번호 검색
          </S.SearchButton>
        </S.ZipCodeWrapper>
        {isOpen && (
          <Modal open={isOpen} onCancel={onToggleAddressModal}>
            <DaumPostcodeEmbed onComplete={onSearchAddressComplete} />
          </Modal>
        )}
        <S.Address
          readOnly
          value={
            address !== ''
              ? address
              : data?.fetchBoard?.boardAddress?.address ?? ''
          }
          // setState로 address가 들어오면, 즉 등록할 때 입력값이나 수정할때의 수정값이나
          // 모달을 켜서 value를 직접 준 경우에는 빈 문자열이 아니게 되니 그대로 value에 넣어주고,
          // 아닌경우는 data가 들어온 수정페이지의 첫 화면 뿐이니 상대값으로 주고,
          // 또한 데이터에 존재하지 않거나 하여 null/undefined일 경우에는 빈 문자열을 준다
          defaultValue={data?.fetchBoard?.boardAddress?.address ?? ''}
        ></S.Address>
        <S.Address
          defaultValue={data?.fetchBoard?.boardAddress?.addressDetail ?? ''}
          onChange={onChangeAddressDetail}
        ></S.Address>
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
        <S.SubmitButton
          onClick={isEdit ? onClickUpdate : onClickSubmit}
          isActive={isEdit ? true : isActive}
        >
          {isEdit ? '수정하기' : '등록하기'}
        </S.SubmitButton>
      </S.SubmitWrapper>
    </S.Wrapper>
  );
}
