import styled from '@emotion/styled';
import { ISubmitButtonProps } from './BoardWrite.types';

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  // border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  font-family: Noto Sans CJK KR;
`;
export const WriterWrapper = styled.div`
  display: flex;
  width: 100%;

  //   flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
`;

export const ZipCodeWrapper = styled.div`
  width: 100%;
`;

export const ZipCode = styled.input`
  width: 77px;
  padding-left: 16px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;
export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  border: 1px solid #bdbdbd;
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
`;

export const Youtube = styled.input`
  height: 52px;
  border: 1px solid #bdbdbd;
  width: 100%;
  padding-left: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
`;
export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;
export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? 'yellow' : 'none'}
  border: none;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  cursor : pointer;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: blue;
`;
