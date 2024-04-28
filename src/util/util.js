// Hàm check 2 mảng giá trị để xử lí đưa dữ liệu được thêm vào cuối cùng
export const adjustArray = (oldArray, newArray) => {
  // clone mảng về oldArray
  const result = [...oldArray];
  // ["A","B"] ==> ["A","C","B"]
  // Kiểm tra nếu phần tử chưa có trong mảng cũ đang là result thì thực hiện thêm vào
  for (let item of newArray) {
    if (!oldArray.includes(item)) {
      result.push(item);
    }
  }

  if (result.length > 1) {
    return result.filter(item => newArray.includes(item));
  }

  return result;
};

export const getFirstCharacter = name => {
  const words = name.split(' ');
  const newName = words.map(word => word[0]);
  return newName.join('');
};

export const convertDateAndMonth = (date, month) => {
  // handle date
  const newDate = date.toLocaleString('en-US', {
    day: '2-digit',
  });
  // handle month
  const newMonth = month.toLocaleString('en-US', {
    month: 'short',
  });
  return newDate + ' ' + newMonth;
};

export function getTodayAndTomorrow(now) {
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  const options = { day: 'numeric', month: 'short' };

  const todayString = now.toLocaleString('en-US', options);
  const tomorrowString = tomorrow.toLocaleString('en-US', options);

  return `${todayString}-${tomorrowString}`;
}
