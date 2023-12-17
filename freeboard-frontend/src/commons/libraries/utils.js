export const getDate = (date) => {
  const _date = new Date(date); // props로 받는 date와 구분하기 위해 _를 붙인다
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
