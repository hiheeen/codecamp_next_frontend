import * as S from './BoardDetail.styles';
import { getDate } from '../../../../commons/libraries/utils';

export default function BoardDetailUI({ data, onClickMoveUpdate }) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{getDate(data?.fetchBoard?.createdAt)}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{data?.fetchBoard?.title}</S.Title>
          <S.Contents>{data?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button>목록으로</S.Button>
        <S.Button onClick={onClickMoveUpdate}>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
