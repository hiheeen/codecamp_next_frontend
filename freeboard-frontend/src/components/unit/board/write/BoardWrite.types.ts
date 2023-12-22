import { ChangeEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>; // 데이터 주고받을 때 처음에는 undefined이기 때문에 꼭 물음표를 붙여주기!
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}
